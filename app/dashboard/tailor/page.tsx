"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Scissors, Loader2, Check, X, LogOut, Settings } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TailorDashboard() {
    const router = useRouter()
    const [orders, setOrders] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [updatingOrderId, setUpdatingOrderId] = useState<string | null>(null)
    const [profileDialogOpen, setProfileDialogOpen] = useState(false)
    const [profileData, setProfileData] = useState({
        shop_name: "",
        bio: "",
        specialty: "",
        location: "",
        experience_years: 0,
    })
    const [savingProfile, setSavingProfile] = useState(false)
    const [isProfileComplete, setIsProfileComplete] = useState(true)

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
            router.push("/auth")
            return
        }

        const { data, error } = await supabase
            .from('orders')
            .select(`
                *,
                customers (
                    phone,
                    address,
                    profiles (
                        full_name,
                        avatar_url
                    )
                )
            `)
            .eq('tailor_id', session.user.id)
            .order('created_at', { ascending: false })

        if (error) {
            console.error("Error fetching orders:", error)
        } else {
            setOrders(data || [])
        }
        setLoading(false)
    }

    const handleOrderAction = async (orderId: string, newStatus: string) => {
        setUpdatingOrderId(orderId)

        const { error } = await supabase
            .from('orders')
            .update({ status: newStatus })
            .eq('id', orderId)

        if (error) {
            alert("Error updating order: " + error.message)
        } else {
            // Refresh orders
            await fetchOrders()
        }

        setUpdatingOrderId(null)
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/auth")
    }

    const fetchProfile = async () => {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) return

        const { data, error } = await supabase
            .from('tailors')
            .select('*')
            .eq('user_id', session.user.id)
            .single()

        if (data) {
            setProfileData({
                shop_name: data.shop_name || "",
                bio: data.bio || "",
                specialty: data.specialty || "",
                location: data.location || "",
                experience_years: data.experience_years || 0,
            })

            // Check if profile is complete
            const isComplete = !!(
                data.shop_name &&
                data.bio &&
                data.specialty &&
                data.location &&
                data.experience_years > 0
            )
            setIsProfileComplete(isComplete)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    const saveProfile = async () => {
        setSavingProfile(true)
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) return

        const { error } = await supabase
            .from('tailors')
            .update(profileData)
            .eq('user_id', session.user.id)

        if (error) {
            alert("Error saving profile: " + error.message)
        } else {
            alert("Profile updated successfully!")
            setProfileDialogOpen(false)
            await fetchProfile() // Refresh to check if profile is now complete
        }
        setSavingProfile(false)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-500'
            case 'accepted': return 'bg-blue-500'
            case 'in_progress': return 'bg-purple-500'
            case 'completed': return 'bg-green-500'
            case 'cancelled': return 'bg-red-500'
            default: return 'bg-gray-500'
        }
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Simple Header */}
            <nav className="border-b bg-card sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                            <Scissors className="h-6 w-6 text-accent" />
                            <span className="text-xl font-bold">Darzi Tailor</span>
                        </Link>
                        <div className="flex items-center gap-2">
                            {!isProfileComplete && (
                                <Dialog open={profileDialogOpen} onOpenChange={setProfileDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button variant="default" size="sm" onClick={fetchProfile} className="bg-accent hover:bg-accent/90">
                                            <Settings className="h-4 w-4 mr-2" />
                                            Complete Your Profile
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle>Edit Tailor Profile</DialogTitle>
                                            <DialogDescription>
                                                Update your profile information. This will be visible to customers.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                            <div>
                                                <Label htmlFor="shop_name">Shop Name</Label>
                                                <Input
                                                    id="shop_name"
                                                    value={profileData.shop_name}
                                                    onChange={(e) => setProfileData({ ...profileData, shop_name: e.target.value })}
                                                    placeholder="e.g., Master Ahmed Tailoring"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="specialty">Specialty</Label>
                                                <Input
                                                    id="specialty"
                                                    value={profileData.specialty}
                                                    onChange={(e) => setProfileData({ ...profileData, specialty: e.target.value })}
                                                    placeholder="e.g., Traditional & Modern Suits"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="location">Location</Label>
                                                <Input
                                                    id="location"
                                                    value={profileData.location}
                                                    onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                                                    placeholder="e.g., Mumbai, Maharashtra"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="experience_years">Years of Experience</Label>
                                                <Input
                                                    id="experience_years"
                                                    type="number"
                                                    value={profileData.experience_years}
                                                    onChange={(e) => setProfileData({ ...profileData, experience_years: parseInt(e.target.value) || 0 })}
                                                    placeholder="e.g., 15"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="bio">Bio / Description</Label>
                                                <Textarea
                                                    id="bio"
                                                    value={profileData.bio}
                                                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                                                    placeholder="Tell customers about your expertise and services..."
                                                    rows={4}
                                                />
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" onClick={() => setProfileDialogOpen(false)}>
                                                    Cancel
                                                </Button>
                                                <Button onClick={saveProfile} disabled={savingProfile}>
                                                    {savingProfile ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                                                    Save Profile
                                                </Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            )}
                            <Button variant="outline" size="sm" onClick={handleLogout}>
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Incoming Orders</h1>
                    <p className="text-muted-foreground">Review and manage your customer orders</p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                ) : orders.length === 0 ? (
                    <Card>
                        <CardContent className="py-12 text-center text-muted-foreground">
                            No orders yet. Orders from customers will appear here.
                        </CardContent>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <Card key={order.id} className="overflow-hidden">
                                <CardHeader className="bg-muted/50">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Avatar>
                                                <AvatarImage src={order.customers?.profiles?.avatar_url} />
                                                <AvatarFallback>
                                                    {order.customers?.profiles?.full_name?.[0] || 'C'}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-lg">
                                                    {order.customers?.profiles?.full_name || 'Unknown Customer'}
                                                </CardTitle>
                                                <p className="text-sm text-muted-foreground">
                                                    Order #{order.id.slice(0, 8)}
                                                </p>
                                            </div>
                                        </div>
                                        <Badge className={getStatusColor(order.status)}>
                                            {order.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        {/* Order Details */}
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-1">Description</p>
                                            <p className="text-base">{order.description}</p>
                                        </div>

                                        {order.design_url && (
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground mb-2">Design Reference</p>
                                                <img
                                                    src={order.design_url}
                                                    alt="Design"
                                                    className="rounded-lg max-h-48 object-cover"
                                                />
                                            </div>
                                        )}

                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="text-muted-foreground">Phone</p>
                                                <p className="font-medium">{order.customers?.phone || 'Not provided'}</p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Amount</p>
                                                <p className="font-medium">{order.amount ? `₹${order.amount}` : 'Not set'}</p>
                                            </div>
                                        </div>

                                        {order.customers?.address && (
                                            <div>
                                                <p className="text-sm text-muted-foreground">Address</p>
                                                <p className="text-sm">{order.customers.address}</p>
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        {order.status === 'pending' && (
                                            <div className="flex gap-3 pt-4 border-t">
                                                <Button
                                                    className="flex-1 bg-green-600 hover:bg-green-700"
                                                    onClick={() => handleOrderAction(order.id, 'accepted')}
                                                    disabled={updatingOrderId === order.id}
                                                >
                                                    {updatingOrderId === order.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                    ) : (
                                                        <Check className="h-4 w-4 mr-2" />
                                                    )}
                                                    Accept Order
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    className="flex-1"
                                                    onClick={() => handleOrderAction(order.id, 'cancelled')}
                                                    disabled={updatingOrderId === order.id}
                                                >
                                                    {updatingOrderId === order.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                    ) : (
                                                        <X className="h-4 w-4 mr-2" />
                                                    )}
                                                    Reject
                                                </Button>
                                            </div>
                                        )}

                                        {order.status === 'accepted' && (
                                            <div className="pt-4 border-t">
                                                <Button
                                                    className="w-full"
                                                    onClick={() => handleOrderAction(order.id, 'in_progress')}
                                                    disabled={updatingOrderId === order.id}
                                                >
                                                    {updatingOrderId === order.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                    ) : null}
                                                    Mark as In Progress
                                                </Button>
                                            </div>
                                        )}

                                        {order.status === 'in_progress' && (
                                            <div className="pt-4 border-t">
                                                <Button
                                                    className="w-full bg-green-600 hover:bg-green-700"
                                                    onClick={() => handleOrderAction(order.id, 'completed')}
                                                    disabled={updatingOrderId === order.id}
                                                >
                                                    {updatingOrderId === order.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                    ) : (
                                                        <Check className="h-4 w-4 mr-2" />
                                                    )}
                                                    Mark as Completed
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
