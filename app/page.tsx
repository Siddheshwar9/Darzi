import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Zap, Star, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { DarziLogo } from "@/components/darzi-logo"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <DarziLogo />
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#tailors" className="text-muted-foreground hover:text-foreground transition-colors">
                Find Tailors
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/auth">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/get-started">
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-accent text-white border-accent/20">
            Next-Generation Digital Tailoring
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Connect with Skilled Tailors for <span className="text-accent">Custom Clothing</span>
          </h1>
          <p className="text-xl text-foreground text-balance mb-8 max-w-3xl mx-auto">
            Darzi seamlessly connects you with professional tailors through AI-powered measurements, virtual try-on
            technology, and intelligent matching for perfect custom garments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/get-started">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                Start Your Order
              </Button>
            </Link>
            <Link href="/auth">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Join as Tailor
              </Button>
            </Link>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <img
              src="/professional-tailor-working-on-custom-clothing-in-.jpg"
              alt="Professional tailor crafting custom clothing"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Powered by Intelligent Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of custom tailoring with AI-driven features that ensure perfect fit and style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>AI-Powered Measurements</CardTitle>
                <CardDescription>
                  Advanced image analysis technology provides accurate body measurements through smart photo capture.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Smart Tailor Matching</CardTitle>
                <CardDescription>
                  Intelligent recommendation engine matches you with ideal tailors based on location, ratings, and
                  expertise.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <DarziLogo size="sm" className="text-accent" />
                </div>
                <CardTitle>Virtual Try-On</CardTitle>
                <CardDescription>
                  Visualize completed garments on digital avatars to ensure perfect fit and style before ordering.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tailors Section */}
      <section id="tailors" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Featured Tailors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Skilled artisans with years of experience and exceptional customer ratings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Master Ahmed",
                specialty: "Traditional & Modern Suits",
                rating: 4.9,
                location: "Mumbai",
                experience: "15+ years",
                image: "/professional-tailor-portrait.jpg",
              },
              {
                name: "Priya Sharma",
                specialty: "Women's Ethnic Wear",
                rating: 4.8,
                location: "Delhi",
                experience: "12+ years",
                image: "/female-tailor-working-on-ethnic-clothing.jpg",
              },
              {
                name: "Rajesh Kumar",
                specialty: "Formal & Casual Wear",
                rating: 4.9,
                location: "Bangalore",
                experience: "18+ years",
                image: "/experienced-tailor-with-formal-wear.jpg",
              },
            ].map((tailor, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={tailor.image || "/placeholder.svg"}
                    alt={tailor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{tailor.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tailor.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="mb-3">{tailor.specialty}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{tailor.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{tailor.experience}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Perfect Fit?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Darzi for their custom clothing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Your Order
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <DarziLogo className="mb-4" />
              <p className="text-muted-foreground">
                Connecting skilled tailors with customers through intelligent technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-card-foreground">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Find Tailors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    AI Measurements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Virtual Try-On
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-card-foreground">For Tailors</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Join Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Subscription Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-card-foreground">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Darzi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
