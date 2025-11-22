"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabaseClient"
import { Upload, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"

export default function NewOrderPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const tailorId = searchParams.get("tailor")

    const [loading, setLoading] = useState(false)
    const [tailorName, setTailorName] = useState("Selected Tailor")
    const [formData, setFormData] = useState({
        description: "",
        itemType: "",
        measurements: "standard", // or 'custom'
    })

    useEffect(() => {
        if (tailorId) {
            // Fetch tailor details to show name
            const fetchTailor = async () => {
                const { data } = await supabase
                    .from('tailors')
                    .select('shop_name')
                    .eq('user_id', tailorId)
                    .single()

                if (data) setTailorName(data.shop_name)
            }
            fetchTailor()
        }
    }, [tailorId])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
            // Save order data to localStorage to restore after login
            localStorage.setItem("pendingOrder", JSON.stringify({
                tailorId,
                formData,
                timestamp: Date.now()
            }))

            alert("Please login or sign up to complete your order. We've saved your details.")
            router.push("/auth?returnUrl=/order/new")
            return
        }

        // 1. Upload image (skipped for now, using placeholder)
        const designUrl = "https://placeholder.com/design.jpg"

        // 2. Create Order
        const { error } = await supabase.from("orders").insert({
            customer_id: session.user.id,
            tailor_id: tailorId, // In real app, ensure tailorId is present
            status: "pending",
            amount: 0, // To be set by tailor
            design_url: designUrl,
            description: `${formData.itemType}: ${formData.description}`,
        })

        if (error) {
            alert("Error creating order: " + error.message)
        } else {
            alert("Order placed successfully!")
            router.push("/dashboard/customer")
        }
        setLoading(false)
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <Link href="/tailors" className="flex items-center text-muted-foreground mb-6 hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tailors
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Create New Order</CardTitle>
                    <CardDescription>Submit your design to {tailorName}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="item-type">What do you want to stitch?</Label>
                            <Select
                                onValueChange={(value) => setFormData({ ...formData, itemType: value })}
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select item type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="suit">Suit</SelectItem>
                                    <SelectItem value="shirt">Shirt</SelectItem>
                                    <SelectItem value="dress">Dress</SelectItem>
                                    <SelectItem value="trousers">Trousers</SelectItem>
                                    <SelectItem value="lehenga">Lehenga</SelectItem>
                                    <SelectItem value="kurta">Kurta</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Design Details</Label>
                            <Textarea
                                id="description"
                                placeholder="Describe the style, fit, fabric preferences, etc."
                                className="min-h-[100px]"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Design Reference Image</Label>
                            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-muted/50 cursor-pointer transition">
                                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                                <p className="text-xs text-muted-foreground mt-1">(JPG, PNG up to 5MB)</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Measurements</Label>
                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    type="button"
                                    variant={formData.measurements === "standard" ? "default" : "outline"}
                                    onClick={() => setFormData({ ...formData, measurements: "standard" })}
                                >
                                    Standard Size
                                </Button>
                                <Button
                                    type="button"
                                    variant={formData.measurements === "custom" ? "default" : "outline"}
                                    onClick={() => setFormData({ ...formData, measurements: "custom" })}
                                >
                                    Custom Measurements
                                </Button>
                            </div>
                            {formData.measurements === "standard" && (
                                <Select>
                                    <SelectTrigger><SelectValue placeholder="Select Size" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="s">Small (S)</SelectItem>
                                        <SelectItem value="m">Medium (M)</SelectItem>
                                        <SelectItem value="l">Large (L)</SelectItem>
                                        <SelectItem value="xl">Extra Large (XL)</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Placing Order...
                                </>
                            ) : (
                                "Submit Order Request"
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
