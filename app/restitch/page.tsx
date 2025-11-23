"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, Recycle, Award, Upload, Scissors, ArrowRight } from "lucide-react"
import Link from "next/link"
import { DarziLogo } from "@/components/darzi-logo"

export default function RestitchPage() {
    const [oldClothingImages, setOldClothingImages] = useState<string[]>([])
    const [newDesignImages, setNewDesignImages] = useState<string[]>([])

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'old' | 'new') => {
        const files = event.target.files ? Array.from(event.target.files) : []
        const imageUrls = files.map((file) => URL.createObjectURL(file))

        if (type === 'old') {
            setOldClothingImages((prev) => [...prev, ...imageUrls])
        } else {
            setNewDesignImages((prev) => [...prev, ...imageUrls])
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50/30 to-background">
            {/* Navigation */}
            <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <DarziLogo />
                        </Link>
                        <div className="flex items-center space-x-6">
                            <Link href="/" className="text-muted-foreground hover:text-foreground transition font-medium">
                                Home
                            </Link>
                            <Link href="/auth">
                                <Button variant="outline" size="sm">Sign In</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full mb-8 shadow-sm">
                        <Leaf className="h-5 w-5" />
                        <span className="text-sm font-semibold tracking-wide uppercase">Restitched Dashboard</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                            Choosing Sustainability
                        </span>
                        <br />
                        <span className="text-foreground">Over Buying New</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                        In India, over <span className="font-bold text-green-700 text-2xl">1 million tons</span> of textile fabric goes to waste annually.
                    </p>
                    <p className="text-lg text-muted-foreground mb-12">
                        Let's change that together by restitching and repurposing your old clothes.
                    </p>

                    {/* Textile Waste Image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&h=600&fit=crop"
                            alt="Textile waste and sustainability"
                            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                            <p className="text-2xl md:text-3xl font-bold mb-2">Every piece of fabric has a story</p>
                            <p className="text-lg opacity-90">Give yours a second chapter</p>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-4">How Restitch Works</h2>
                    <p className="text-center text-muted-foreground mb-12 text-lg">Transform your old clothes in 4 simple steps</p>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Upload, title: "1. Upload Photos", desc: "Upload photos of your old clothing and the new design you want", color: "from-green-100 to-emerald-100" },
                            { icon: Scissors, title: "2. Choose Tailor", desc: "Select from our verified eco-conscious tailors", color: "from-emerald-100 to-green-100" },
                            { icon: Recycle, title: "3. Get Restitched", desc: "Your tailor transforms your old clothes into new designs", color: "from-green-100 to-emerald-100" },
                            { icon: Award, title: "4. Earn Green Points", desc: "Get rewards for choosing sustainability", color: "from-emerald-100 to-green-100" }
                        ].map((step, i) => (
                            <Card key={i} className="border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 group">
                                <CardHeader>
                                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <step.icon className="h-8 w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Green Points Info */}
                <Card className="mb-20 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-3xl">
                            <Award className="h-8 w-8 text-green-600" />
                            Green Points Rewards
                        </CardTitle>
                        <CardDescription className="text-base">
                            Earn points for every restitch order and use them for amazing benefits
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                                <div className="text-4xl font-bold text-green-600 mb-3">100</div>
                                <p className="text-muted-foreground font-medium">Points per restitch order</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                                <div className="text-4xl mb-3">💚</div>
                                <p className="text-muted-foreground font-medium">Redeem for discounts on future orders</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                                <div className="text-4xl mb-3">🚚</div>
                                <p className="text-muted-foreground font-medium">Free delivery sponsored by eco-friendly brands</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Upload Section */}
                <Card className="max-w-4xl mx-auto shadow-xl border-2">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                        <CardTitle className="text-3xl">Start Your Restitch Journey</CardTitle>
                        <CardDescription className="text-base">
                            Upload photos of your old clothing and the design you want
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-8">
                        {/* Old Clothing Upload */}
                        <div>
                            <Label className="text-lg mb-3 block font-semibold">Old Clothing Photos</Label>
                            <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center bg-green-50/50 hover:bg-green-50 transition">
                                <Upload className="h-10 w-10 mx-auto mb-3 text-green-600" />
                                <p className="text-muted-foreground mb-3">
                                    Upload clear photos of the clothing you want to restitch
                                </p>
                                <Input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'old')}
                                    className="hidden"
                                    id="old-clothing-upload"
                                />
                                <Label htmlFor="old-clothing-upload" className="cursor-pointer">
                                    <Button variant="outline" size="lg" asChild className="border-green-600 text-green-600 hover:bg-green-50">
                                        <span>Choose Images</span>
                                    </Button>
                                </Label>
                            </div>
                            {oldClothingImages.length > 0 && (
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    {oldClothingImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Old clothing ${index + 1}`}
                                            className="w-full h-32 object-cover rounded-lg shadow"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* New Design Upload */}
                        <div>
                            <Label className="text-lg mb-3 block font-semibold">New Design Inspiration</Label>
                            <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center bg-green-50/50 hover:bg-green-50 transition">
                                <Upload className="h-10 w-10 mx-auto mb-3 text-green-600" />
                                <p className="text-muted-foreground mb-3">
                                    Upload photos of the design you want your clothes transformed into
                                </p>
                                <Input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'new')}
                                    className="hidden"
                                    id="new-design-upload"
                                />
                                <Label htmlFor="new-design-upload" className="cursor-pointer">
                                    <Button variant="outline" size="lg" asChild className="border-green-600 text-green-600 hover:bg-green-50">
                                        <span>Choose Images</span>
                                    </Button>
                                </Label>
                            </div>
                            {newDesignImages.length > 0 && (
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    {newDesignImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`New design ${index + 1}`}
                                            className="w-full h-32 object-cover rounded-lg shadow"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Additional Details */}
                        <div>
                            <Label htmlFor="details" className="text-lg mb-3 block font-semibold">Additional Details</Label>
                            <Textarea
                                id="details"
                                placeholder="Describe what changes you'd like, any specific requirements, preferred colors, etc."
                                rows={4}
                                className="resize-none"
                            />
                        </div>

                        {/* CTA Button */}
                        <Link href="/dashboard/customer">
                            <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg py-7 shadow-lg hover:shadow-xl transition-all">
                                Choose Tailor & Start Restitching
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                {/* Environmental Impact */}
                <div className="mt-20 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12">
                    <h3 className="text-3xl font-bold mb-4">Your Impact Matters</h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Every restitch order saves approximately <span className="font-bold text-green-700 text-xl">2.5 kg of textile waste</span> from landfills
                        and reduces <span className="font-bold text-green-700 text-xl">carbon emissions by 15 kg CO₂</span>.
                        <br /><br />
                        Together, we can make fashion sustainable.
                    </p>
                </div>
            </div>
        </div>
    )
}
