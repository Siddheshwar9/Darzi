import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Camera, Eye, Zap, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { AIRecommendationEngine } from "@/components/ai-recommendation-engine"

export default function AIFeaturesPage() {
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
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
            Powered by Artificial Intelligence
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            AI-Powered Tailoring <span className="text-accent">Revolution</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Experience the future of custom tailoring with our advanced AI features that ensure perfect fit, style, and
            tailor matching for every customer.
          </p>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg group hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Camera className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Smart Measurements</CardTitle>
                <CardDescription>
                  Advanced computer vision analyzes your photos to calculate precise body measurements automatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>95%+ accuracy rate</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Instant analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Privacy protected</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/ai-measurement">
                    Try AI Measurement
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg group hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Virtual Try-On</CardTitle>
                <CardDescription>
                  Visualize how your custom garments will look with realistic 3D rendering and digital avatars.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Photorealistic preview</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Multiple angles</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Real-time adjustments</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/virtual-tryOn">
                    Try Virtual Fitting
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg group hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Smart Matching</CardTitle>
                <CardDescription>
                  AI recommendation engine matches you with the perfect tailors based on your preferences and
                  requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Personalized matching</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Quality assurance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Continuous learning</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/tailors">
                    Find Perfect Match
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* AI Recommendations Demo */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Intelligent Recommendations</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how our AI analyzes your preferences to provide personalized suggestions
              </p>
            </div>
            <AIRecommendationEngine
              userPreferences={{
                style: "business",
                budget: "premium",
                location: "mumbai",
                occasion: "office",
              }}
            />
          </div>

          {/* Technology Behind AI */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span>Advanced Technology</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">Computer Vision</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep learning models trained on thousands of body measurements for accurate analysis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Recommendation algorithms that learn from user preferences and feedback.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">3D Rendering</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time 3D visualization for accurate garment preview and fitting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span>Continuous Improvement</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">Learning from Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                      AI improves recommendations based on customer satisfaction and order outcomes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Data-Driven Insights</h4>
                    <p className="text-sm text-muted-foreground">
                      Analytics help tailors understand trends and customer preferences better.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">
                      AI monitors order quality and helps maintain high standards across the platform.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience AI-Powered Tailoring</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of customers who trust our AI technology for perfect custom clothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/order">Start Your Order</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              asChild
            >
              <Link href="/ai-measurement">Try AI Measurement</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
