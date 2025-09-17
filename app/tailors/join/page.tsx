import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Scissors, Upload, Star, Users, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function JoinTailorsPage() {
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
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
            Join Our Network
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Grow Your Tailoring Business with <span className="text-accent">Darzi</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Connect with customers seeking quality custom clothing. Showcase your skills, build your reputation, and
            grow your business with our intelligent platform.
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">More Customers</h3>
              <p className="text-sm text-muted-foreground">
                Access thousands of customers looking for quality tailoring
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Smart Matching</h3>
              <p className="text-sm text-muted-foreground">AI-powered system matches you with ideal customers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Grow Revenue</h3>
              <p className="text-sm text-muted-foreground">Increase your income with consistent order flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Join as a Tailor</CardTitle>
                  <CardDescription>Fill out the form below to start your journey with Darzi</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
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

                  <div className="space-y-2">
                    <Label htmlFor="bio">About You</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about your experience, specialties, and what makes you unique..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Portfolio Images</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-2">Upload images of your work (up to 10 images)</p>
                      <Button variant="outline" size="sm">
                        Choose Files
                      </Button>
                    </div>
                  </div>

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

                  <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                    Submit Application
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-accent" />
                    <span>Why Choose Darzi?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">Verified Customers</h4>
                      <p className="text-sm text-muted-foreground">
                        All customers are verified for secure transactions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">Secure Payments</h4>
                      <p className="text-sm text-muted-foreground">Guaranteed payments with escrow protection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">Marketing Support</h4>
                      <p className="text-sm text-muted-foreground">
                        We help promote your services to relevant customers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium mb-1">24/7 Support</h4>
                      <p className="text-sm text-muted-foreground">Dedicated support team to help you succeed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Subscription Plans</CardTitle>
                  <CardDescription>Choose a plan that works for your business</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Basic Plan</h4>
                      <Badge variant="outline">₹999/month</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Perfect for individual tailors starting out</p>
                  </div>
                  <div className="border rounded-lg p-4 border-accent">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Premium Plan</h4>
                      <Badge className="bg-accent">₹1,999/month</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Best for established tailors with regular orders</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Enterprise</h4>
                      <Badge variant="outline">Custom</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">For large tailoring businesses and shops</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
