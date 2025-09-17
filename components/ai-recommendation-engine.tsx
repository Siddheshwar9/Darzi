import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Zap, TrendingUp, Users, Award } from "lucide-react"

interface RecommendationProps {
  userPreferences?: {
    style: string
    budget: string
    location: string
    occasion: string
  }
}

export function AIRecommendationEngine({ userPreferences }: RecommendationProps) {
  const recommendations = [
    {
      type: "tailor",
      title: "Perfect Tailor Match",
      description: "Based on your style preferences and location",
      confidence: 98,
      data: {
        name: "Master Ahmed",
        specialty: "Traditional & Modern Suits",
        rating: 4.9,
        location: "Mumbai",
        image: "/professional-tailor-portrait.jpg",
        matchReasons: ["Specializes in business suits", "Located nearby", "Excellent ratings", "Fast delivery"],
      },
    },
    {
      type: "style",
      title: "Recommended Style",
      description: "AI suggests this style based on your occasion and preferences",
      confidence: 95,
      data: {
        name: "Modern Slim Fit Suit",
        image: "/placeholder.svg?key=suit-style",
        features: ["Contemporary cut", "Professional appearance", "Versatile for business"],
        price: "₹3,500 - ₹5,000",
      },
    },
    {
      type: "fabric",
      title: "Ideal Fabric Choice",
      description: "Perfect for your climate and occasion",
      confidence: 92,
      data: {
        name: "Premium Wool Blend",
        properties: ["Breathable", "Wrinkle-resistant", "Professional finish"],
        suitability: "Perfect for office wear and formal events",
      },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Zap className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-bold">AI Recommendations</h2>
        </div>
        <p className="text-muted-foreground">Personalized suggestions based on your preferences and AI analysis</p>
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        {recommendations.map((rec, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    {rec.type === "tailor" && <Users className="h-5 w-5 text-accent" />}
                    {rec.type === "style" && <TrendingUp className="h-5 w-5 text-accent" />}
                    {rec.type === "fabric" && <Award className="h-5 w-5 text-accent" />}
                    <span>{rec.title}</span>
                  </CardTitle>
                  <CardDescription>{rec.description}</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  {rec.confidence}% Match
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {rec.type === "tailor" && (
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={rec.data.image || "/placeholder.svg"} alt={rec.data.name} />
                    <AvatarFallback>MA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">{rec.data.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{rec.data.specialty}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{rec.data.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{rec.data.location}</span>
                      </div>
                    </div>
                    <div className="space-y-1 mb-4">
                      <p className="text-sm font-medium">Why this tailor?</p>
                      <div className="flex flex-wrap gap-1">
                        {rec.data.matchReasons.map((reason, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {reason}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      View Profile
                    </Button>
                  </div>
                </div>
              )}

              {rec.type === "style" && (
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-20 bg-muted rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{rec.data.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{rec.data.price}</p>
                      <div className="space-y-1">
                        {rec.data.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Try Virtual Preview
                  </Button>
                </div>
              )}

              {rec.type === "fabric" && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">{rec.data.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{rec.data.suitability}</p>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Properties:</p>
                      <div className="flex flex-wrap gap-1">
                        {rec.data.properties.map((prop, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {prop}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Select This Fabric
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-lg bg-accent/5">
        <CardContent className="pt-6">
          <div className="text-center">
            <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold mb-2">AI Learning</h3>
            <p className="text-sm text-muted-foreground">
              Our AI continuously learns from your preferences and feedback to provide better recommendations over time.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
