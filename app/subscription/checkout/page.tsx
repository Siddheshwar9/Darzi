"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Scissors, CreditCard, Shield, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const planId = searchParams.get("plan") || "premium"

  const planDetails = {
    basic: {
      name: "Basic Plan",
      price: "₹999",
      period: "month",
      features: ["Up to 20 orders/month", "Basic profile", "Email support"],
    },
    premium: {
      name: "Premium Plan",
      price: "₹1,999",
      period: "month",
      features: ["Unlimited orders", "AI matching", "Priority support"],
    },
    enterprise: {
      name: "Enterprise Plan",
      price: "Custom",
      period: "month",
      features: ["Everything in Premium", "Dedicated manager", "Custom integrations"],
    },
  }

  const selectedPlan = planDetails[planId as keyof typeof planDetails] || planDetails.premium

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
            <div className="flex items-center space-x-4">
              <Badge variant="outline">Secure Checkout</Badge>
              <Shield className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* Checkout Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href="/subscription">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Plans
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Account Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Create your tailor account to get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" placeholder="Your tailoring business name" />
                  </div>
                </CardContent>
              </Card>

              {/* Business Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Business Details</CardTitle>
                  <CardDescription>Tell us about your tailoring business</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="4-7">4-7 years</SelectItem>
                          <SelectItem value="8-12">8-12 years</SelectItem>
                          <SelectItem value="13-20">13-20 years</SelectItem>
                          <SelectItem value="20+">20+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Specialization</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suits">Traditional & Modern Suits</SelectItem>
                        <SelectItem value="ethnic">Women's Ethnic Wear</SelectItem>
                        <SelectItem value="formal">Formal & Casual Wear</SelectItem>
                        <SelectItem value="bridal">Bridal & Party Wear</SelectItem>
                        <SelectItem value="casual">Men's Casual & Sportswear</SelectItem>
                        <SelectItem value="kids">Kids & Teen Fashion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Information</span>
                  </CardTitle>
                  <CardDescription>Secure payment processing with 256-bit SSL encryption</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-2">
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
                  <div className="space-y-2">
                    <Label htmlFor="billingAddress">Billing Address</Label>
                    <Input id="billingAddress" placeholder="Enter your billing address" />
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="#" className="text-accent hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-accent hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing" className="text-sm">
                        I agree to receive marketing communications and updates about new features
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="trial" defaultChecked />
                      <Label htmlFor="trial" className="text-sm">
                        Start with 14-day free trial (no charges until trial ends)
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{selectedPlan.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedPlan.price !== "Custom"
                          ? `${selectedPlan.price}/${selectedPlan.period}`
                          : "Custom pricing"}
                      </p>
                    </div>
                    <Badge variant="secondary">Selected</Badge>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Included features:</h5>
                    <ul className="space-y-1">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subscription</span>
                      <span>{selectedPlan.price !== "Custom" ? selectedPlan.price : "TBD"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Setup Fee</span>
                      <span className="line-through text-muted-foreground">₹500</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>14-Day Free Trial</span>
                      <span>-{selectedPlan.price !== "Custom" ? selectedPlan.price : "₹0"}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total Today</span>
                      <span>₹0</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      You'll be charged {selectedPlan.price !== "Custom" ? selectedPlan.price : "custom amount"} after
                      your 14-day trial ends
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-green-50 dark:bg-green-950/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-900 dark:text-green-100">Secure & Protected</h4>
                      <p className="text-sm text-green-800 dark:text-green-200">
                        Your payment information is encrypted and secure. Cancel anytime during your trial.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                {selectedPlan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By clicking "Start Free Trial", you agree to our terms and conditions. No charges for 14 days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
