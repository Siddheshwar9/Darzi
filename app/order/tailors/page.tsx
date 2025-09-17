import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Scissors, Star, MapPin, Clock, ArrowLeft, ArrowRight, Award } from "lucide-react"
import Link from "next/link"

const recommendedTailors = [
  {
    id: 1,
    name: "Master Ahmed",
    specialty: "Traditional & Modern Suits",
    rating: 4.9,
    reviews: 127,
    location: "Mumbai, Maharashtra",
    experience: "15+ years",
    price: "₹3,500",
    image: "/professional-tailor-portrait.jpg",
    badges: ["Premium", "Fast Delivery"],
    completedOrders: 450,
    matchScore: 98,
    estimatedDays: 7,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    specialty: "Formal & Casual Wear",
    rating: 4.9,
    reviews: 156,
    location: "Bangalore, Karnataka",
    experience: "18+ years",
    price: "₹3,200",
    image: "/experienced-tailor-with-formal-wear.jpg",
    badges: ["Bulk Orders", "Premium"],
    completedOrders: 580,
    matchScore: 95,
    estimatedDays: 8,
  },
  {
    id: 3,
    name: "Suresh Reddy",
    specialty: "Men's Casual & Sportswear",
    rating: 4.6,
    reviews: 94,
    location: "Hyderabad, Telangana",
    experience: "8+ years",
    price: "₹2,800",
    image: "/placeholder.svg?key=casual",
    badges: ["Fast Delivery", "Affordable"],
    completedOrders: 380,
    matchScore: 87,
    estimatedDays: 6,
  },
]

export default function TailorSelectionPage() {
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
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-sm font-medium">Measurements</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-sm font-medium">Select Tailor</span>
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

      {/* Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Tailor</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI has matched you with the best tailors for your requirements. Select your preferred tailor.
          </p>
        </div>
      </section>

      {/* Tailor Selection */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="bg-accent/10 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-accent mb-2">AI Recommendation</h3>
              <p className="text-sm text-muted-foreground">
                Based on your style preferences, location, and requirements, we've found the perfect tailors for you.
              </p>
            </div>

            <RadioGroup defaultValue="1" className="space-y-6">
              {recommendedTailors.map((tailor) => (
                <div key={tailor.id} className="relative">
                  <RadioGroupItem value={tailor.id.toString()} id={tailor.id.toString()} className="sr-only" />
                  <Label htmlFor={tailor.id.toString()} className="cursor-pointer">
                    <Card className="border-2 hover:border-accent/50 transition-colors peer-checked:border-accent">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={tailor.image || "/placeholder.svg"} alt={tailor.name} />
                            <AvatarFallback className="text-lg">
                              {tailor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-lg font-semibold">{tailor.name}</h3>
                                <p className="text-muted-foreground">{tailor.specialty}</p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-1 mb-1">
                                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                                    {tailor.matchScore}% Match
                                  </Badge>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm font-medium">{tailor.rating}</span>
                                  <span className="text-sm text-muted-foreground">({tailor.reviews})</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2 mb-3">
                              {tailor.badges.map((badge, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {badge}
                                </Badge>
                              ))}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>{tailor.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{tailor.experience}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Award className="h-4 w-4 text-muted-foreground" />
                                <span>{tailor.completedOrders} orders</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-accent">{tailor.price}</span>
                                <span className="text-muted-foreground">• {tailor.estimatedDays} days</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Label>
                  {tailor.matchScore >= 95 && (
                    <Badge className="absolute -top-2 -right-2 bg-green-500">Recommended</Badge>
                  )}
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Order Summary */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Garment Type</span>
                <span>Custom Suit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Selected Tailor</span>
                <span>Master Ahmed</span>
              </div>
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
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>₹4,300</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Estimated delivery: 7-10 days</p>
                <p>Includes 1 fitting session</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/order/measurements">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Measurements
              </Link>
            </Button>
            <Button className="bg-accent hover:bg-accent/90" asChild>
              <Link href="/order/confirm">
                Continue to Confirmation
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
