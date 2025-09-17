import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Scissors, Camera, Ruler, Palette, Clock, Shield, ArrowRight, Upload } from "lucide-react"
import Link from "next/link"

export default function OrderPage() {
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
              <Link href="/order" className="text-foreground font-medium">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Place Your Custom Order</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get perfectly fitted custom clothing made by skilled tailors. Follow our simple process to place your order.
          </p>
        </div>
      </section>

      {/* Order Process Steps */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="text-sm font-medium">Choose Style</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="text-sm text-muted-foreground">Measurements</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-sm text-muted-foreground">Select Tailor</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                4
              </div>
              <span className="text-sm text-muted-foreground">Confirm Order</span>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Garment Type Selection */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-5 w-5 text-accent" />
                    <span>Choose Your Garment</span>
                  </CardTitle>
                  <CardDescription>Select the type of clothing you want to get tailored</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="suit" className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="suit" id="suit" />
                      <Label htmlFor="suit" className="cursor-pointer">
                        <div>
                          <h4 className="font-medium">Suit</h4>
                          <p className="text-sm text-muted-foreground">Formal business suits</p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="shirt" id="shirt" />
                      <Label htmlFor="shirt" className="cursor-pointer">
                        <div>
                          <h4 className="font-medium">Shirt</h4>
                          <p className="text-sm text-muted-foreground">Dress & casual shirts</p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="ethnic" id="ethnic" />
                      <Label htmlFor="ethnic" className="cursor-pointer">
                        <div>
                          <h4 className="font-medium">Ethnic Wear</h4>
                          <p className="text-sm text-muted-foreground">Traditional clothing</p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="dress" id="dress" />
                      <Label htmlFor="dress" className="cursor-pointer">
                        <div>
                          <h4 className="font-medium">Dress</h4>
                          <p className="text-sm text-muted-foreground">Party & casual dresses</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Style Preferences */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Style Preferences</CardTitle>
                  <CardDescription>Tell us about your style preferences and requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="color">Preferred Color</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select color" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="black">Black</SelectItem>
                          <SelectItem value="navy">Navy Blue</SelectItem>
                          <SelectItem value="gray">Gray</SelectItem>
                          <SelectItem value="brown">Brown</SelectItem>
                          <SelectItem value="white">White</SelectItem>
                          <SelectItem value="custom">Custom Color</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fabric">Fabric Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select fabric" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cotton">Cotton</SelectItem>
                          <SelectItem value="wool">Wool</SelectItem>
                          <SelectItem value="silk">Silk</SelectItem>
                          <SelectItem value="linen">Linen</SelectItem>
                          <SelectItem value="polyester">Polyester Blend</SelectItem>
                          <SelectItem value="custom">Custom Fabric</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occasion">Occasion</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business/Office</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="party">Party/Event</SelectItem>
                        <SelectItem value="casual">Casual Wear</SelectItem>
                        <SelectItem value="formal">Formal Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="special">Special Requirements</Label>
                    <Textarea
                      id="special"
                      placeholder="Any specific requirements, style preferences, or details you'd like to mention..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Additional Options</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rush" />
                        <Label htmlFor="rush" className="text-sm">
                          Rush Order (+₹500) - Delivery in 7 days
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fitting" />
                        <Label htmlFor="fitting" className="text-sm">
                          Multiple Fittings (+₹200) - Up to 3 fitting sessions
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="premium" />
                        <Label htmlFor="premium" className="text-sm">
                          Premium Finishing (+₹300) - Enhanced detailing
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reference Images */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="h-5 w-5 text-accent" />
                    <span>Reference Images</span>
                  </CardTitle>
                  <CardDescription>
                    Upload images of styles you like or your current clothing for reference
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload reference images (up to 5 images, max 10MB each)
                    </p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Features Highlight */}
              <Card className="border-0 shadow-lg border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-accent">
                    <Ruler className="h-5 w-5" />
                    <span>AI-Powered Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">Smart Measurements</h4>
                      <p className="text-sm text-muted-foreground">AI analyzes your photos for accurate sizing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">Virtual Try-On</h4>
                      <p className="text-sm text-muted-foreground">See how your garment will look before ordering</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">Tailor Matching</h4>
                      <p className="text-sm text-muted-foreground">AI finds the perfect tailor for your needs</p>
                    </div>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90" size="sm">
                    Use AI Features
                  </Button>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base Price</span>
                    <span>₹3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rush Order</span>
                    <span>₹500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Premium Finishing</span>
                    <span>₹300</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹4,300</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Estimated delivery: 7-10 days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>100% satisfaction guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Continue Button */}
              <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                Continue to Measurements
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
