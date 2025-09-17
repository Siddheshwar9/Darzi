"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Scissors, Shirt, RotateCcw, Download, Share, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function VirtualTryOnPage() {
  const [selectedGarment, setSelectedGarment] = useState("suit")
  const [selectedColor, setSelectedColor] = useState("navy")
  const [selectedFabric, setSelectedFabric] = useState("wool")

  const garmentTypes = [
    { id: "suit", name: "Business Suit", image: "/placeholder.svg?key=suit-preview" },
    { id: "shirt", name: "Dress Shirt", image: "/placeholder.svg?key=shirt-preview" },
    { id: "blazer", name: "Blazer", image: "/placeholder.svg?key=blazer-preview" },
    { id: "tuxedo", name: "Tuxedo", image: "/placeholder.svg?key=tuxedo-preview" },
  ]

  const colors = [
    { id: "navy", name: "Navy Blue", hex: "#1e3a8a" },
    { id: "black", name: "Black", hex: "#000000" },
    { id: "gray", name: "Charcoal Gray", hex: "#374151" },
    { id: "brown", name: "Brown", hex: "#92400e" },
  ]

  const fabrics = [
    { id: "wool", name: "Premium Wool", texture: "Smooth, professional finish" },
    { id: "cotton", name: "Cotton Blend", texture: "Breathable, casual feel" },
    { id: "silk", name: "Silk Blend", texture: "Luxurious, elegant drape" },
    { id: "linen", name: "Linen", texture: "Light, summer-friendly" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-foreground">Darzi</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/tailors" className="text-muted-foreground hover:text-foreground transition-colors">
                Find Tailors
              </Link>
              <Link href="/order" className="text-muted-foreground hover:text-foreground transition-colors">
                Place Order
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
            Virtual Try-On Technology
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Virtual Try-On Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how your custom garments will look before ordering. Visualize different styles, colors, and fabrics on
            your digital avatar.
          </p>
        </div>
      </section>

      {/* Virtual Try-On Interface */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Customization Panel */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shirt className="h-5 w-5 text-accent" />
                    <span>Customize Your Garment</span>
                  </CardTitle>
                  <CardDescription>Select style, color, and fabric to see real-time preview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Garment Type</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {garmentTypes.map((garment) => (
                        <button
                          key={garment.id}
                          onClick={() => setSelectedGarment(garment.id)}
                          className={`p-3 border rounded-lg text-sm transition-colors ${
                            selectedGarment === garment.id
                              ? "border-accent bg-accent/10 text-accent"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          {garment.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Color</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {colors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => setSelectedColor(color.id)}
                          className={`aspect-square rounded-lg border-2 transition-all ${
                            selectedColor === color.id
                              ? "border-accent scale-110"
                              : "border-border hover:border-accent/50"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Selected: {colors.find((c) => c.id === selectedColor)?.name}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label>Fabric</Label>
                    <Select value={selectedFabric} onValueChange={setSelectedFabric}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fabrics.map((fabric) => (
                          <SelectItem key={fabric.id} value={fabric.id}>
                            <div>
                              <div className="font-medium">{fabric.name}</div>
                              <div className="text-xs text-muted-foreground">{fabric.texture}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Fit Adjustment</Label>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Chest</span>
                        <span>Regular</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Length</span>
                        <span>Regular</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full bg-transparent">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset to Default
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Save Preview
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Share className="h-4 w-4 mr-2" />
                    Share Design
                  </Button>
                  <Button className="w-full bg-accent hover:bg-accent/90">Order This Design</Button>
                </CardContent>
              </Card>
            </div>

            {/* Virtual Try-On Display */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-accent" />
                    <span>Virtual Try-On Preview</span>
                  </CardTitle>
                  <CardDescription>Real-time visualization of your custom garment</CardDescription>
                </CardHeader>
                <CardContent className="h-full">
                  <Tabs defaultValue="front" className="h-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="front">Front View</TabsTrigger>
                      <TabsTrigger value="side">Side View</TabsTrigger>
                      <TabsTrigger value="back">Back View</TabsTrigger>
                    </TabsList>

                    <TabsContent value="front" className="h-full">
                      <div className="relative aspect-[3/4] bg-muted/30 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-64 h-80 bg-gradient-to-b from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center">
                              <div className="text-center">
                                <Shirt className="h-16 w-16 text-accent mx-auto mb-4" />
                                <p className="text-lg font-medium">Virtual Avatar</p>
                                <p className="text-sm text-muted-foreground">
                                  {garmentTypes.find((g) => g.id === selectedGarment)?.name} in{" "}
                                  {colors.find((c) => c.id === selectedColor)?.name}
                                </p>
                              </div>
                            </div>
                            <Badge variant="secondary" className="bg-accent/10 text-accent">
                              AI-Generated Preview
                            </Badge>
                          </div>
                        </div>

                        {/* Overlay with garment details */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium">
                                  {garmentTypes.find((g) => g.id === selectedGarment)?.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {colors.find((c) => c.id === selectedColor)?.name} •{" "}
                                  {fabrics.find((f) => f.id === selectedFabric)?.name}
                                </p>
                              </div>
                              <Badge variant="outline">Preview</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="side" className="h-full">
                      <div className="relative aspect-[3/4] bg-muted/30 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-64 h-80 bg-gradient-to-b from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center">
                              <div className="text-center">
                                <Shirt className="h-16 w-16 text-accent mx-auto mb-4" />
                                <p className="text-lg font-medium">Side View</p>
                                <p className="text-sm text-muted-foreground">Profile perspective</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="back" className="h-full">
                      <div className="relative aspect-[3/4] bg-muted/30 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-64 h-80 bg-gradient-to-b from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center">
                              <div className="text-center">
                                <Shirt className="h-16 w-16 text-accent mx-auto mb-4" />
                                <p className="text-lg font-medium">Back View</p>
                                <p className="text-sm text-muted-foreground">Rear perspective</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Realistic Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced 3D rendering technology creates photorealistic previews of your custom garments.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Real-time Adjustments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  See instant changes as you modify colors, fabrics, and fit parameters.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Accurate Fit Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Based on your AI-analyzed measurements for precise fit visualization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
