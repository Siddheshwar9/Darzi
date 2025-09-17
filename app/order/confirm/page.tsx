import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Scissors, Star, MapPin, Clock, ArrowLeft, CreditCard, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ConfirmOrderPage() {
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

      {/* Progress Steps */}
      <section className="py-8 px-4 border-b bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-sm font-medium">Choose Style</span>
            </div>
            <div className="h-px bg-green-500 w-8" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-sm font-medium">Measurements</span>
            </div>
            <div className="h-px bg-green-500 w-8" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-sm font-medium">Select Tailor</span>
            </div>
            <div className="h-px bg-accent w-8" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                4
              </div>
              <span className="text-sm font-medium">Confirm Order</span>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Confirm Your Order</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Review your order details and complete your purchase to get started.
          </p>
        </div>
      </section>

      {/* Order Confirmation */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Selected Tailor */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Selected Tailor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/professional-tailor-portrait.jpg" alt="Master Ahmed" />
                      <AvatarFallback className="text-lg">MA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">Master Ahmed</h3>
                          <p className="text-muted-foreground">Traditional & Modern Suits</p>
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          98% Match
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>4.9 (127 reviews)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>Mumbai, Maharashtra</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>15+ years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Garment Type</Label>
                      <p>Custom Suit</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Fabric</Label>
                      <p>Wool</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Color</Label>
                      <p>Navy Blue</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Occasion</Label>
                      <p>Business/Office</p>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Special Requirements</Label>
                    <p className="text-sm">Slim fit with modern lapels, extra pocket inside jacket</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Rush Order</Badge>
                    <Badge variant="outline">Premium Finishing</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Delivery Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Textarea id="address" placeholder="Enter your complete address" className="min-h-[80px]" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="State" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" placeholder="400001" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Notes */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Additional Notes</CardTitle>
                  <CardDescription>Any additional instructions for the tailor</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Any specific instructions, preferences, or notes for the tailor..."
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary & Payment */}
            <div className="space-y-6">
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
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span>₹200</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>₹4,500</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
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

              {/* Payment Method */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Method</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>
                </CardContent>
              </Card>

              {/* Terms & Conditions */}
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="#" className="text-accent hover:underline">
                          Terms of Service
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" />
                      <Label htmlFor="privacy" className="text-sm">
                        I agree to the{" "}
                        <Link href="#" className="text-accent hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="updates" />
                      <Label htmlFor="updates" className="text-sm">
                        Send me order updates via SMS and email
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Place Order Button */}
              <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                <CheckCircle className="h-5 w-5 mr-2" />
                Place Order - ₹4,500
              </Button>

              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/order/tailors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Tailor Selection
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
