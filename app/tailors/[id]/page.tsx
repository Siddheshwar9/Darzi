import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Clock, Phone, Mail, Award, Scissors, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

// This would typically come from a database or API
const getTailorData = (id: string) => {
  const tailors = {
    "1": {
      id: 1,
      name: "Master Ahmed",
      specialty: "Traditional & Modern Suits",
      rating: 4.9,
      reviews: 127,
      location: "Mumbai, Maharashtra",
      experience: "15+ years",
      price: "₹2,500 - ₹8,000",
      image: "/professional-tailor-portrait.jpg",
      badges: ["Premium", "Fast Delivery"],
      completedOrders: 450,
      bio: "Master Ahmed is a renowned tailor with over 15 years of experience in crafting both traditional and modern suits. He specializes in creating bespoke garments that perfectly blend classic tailoring techniques with contemporary style.",
      phone: "+91 98765 43210",
      email: "ahmed@darzi.com",
      portfolio: [
        { id: 1, image: "/placeholder.svg?key=suit1", title: "Classic Navy Suit", category: "Formal" },
        { id: 2, image: "/placeholder.svg?key=suit2", title: "Wedding Sherwani", category: "Traditional" },
        { id: 3, image: "/placeholder.svg?key=suit3", title: "Business Casual", category: "Formal" },
        { id: 4, image: "/placeholder.svg?key=suit4", title: "Tuxedo", category: "Formal" },
        { id: 5, image: "/placeholder.svg?key=suit5", title: "Kurta Set", category: "Traditional" },
        { id: 6, image: "/placeholder.svg?key=suit6", title: "Blazer", category: "Casual" },
      ],
      reviews: [
        {
          id: 1,
          name: "Rahul Sharma",
          rating: 5,
          comment:
            "Exceptional work! The suit fits perfectly and the quality is outstanding. Master Ahmed's attention to detail is remarkable.",
          date: "2 weeks ago",
          avatar: "/placeholder.svg?key=user1",
        },
        {
          id: 2,
          name: "Priya Patel",
          rating: 5,
          comment:
            "Got a beautiful sherwani made for my brother's wedding. The craftsmanship is top-notch and delivery was on time.",
          date: "1 month ago",
          avatar: "/placeholder.svg?key=user2",
        },
        {
          id: 3,
          name: "Amit Kumar",
          rating: 4,
          comment: "Great experience overall. The suit looks amazing and the fitting process was very professional.",
          date: "2 months ago",
          avatar: "/placeholder.svg?key=user3",
        },
      ],
      services: ["Custom Suits", "Wedding Attire", "Formal Wear", "Alterations", "Rush Orders", "Bulk Orders"],
      achievements: [
        "Best Tailor Award 2023",
        "500+ Happy Customers",
        "Featured in Fashion Week",
        "15+ Years Experience",
      ],
    },
  }

  return tailors[id as keyof typeof tailors] || null
}

export default function TailorProfilePage({ params }: { params: { id: string } }) {
  const tailor = getTailorData(params.id)

  if (!tailor) {
    return <div>Tailor not found</div>
  }

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

      {/* Profile Header */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src={tailor.image || "/placeholder.svg"} alt={tailor.name} />
                      <AvatarFallback className="text-2xl">
                        {tailor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl font-bold mb-2">{tailor.name}</h1>
                    <p className="text-muted-foreground mb-4">{tailor.specialty}</p>
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tailor.rating}</span>
                      <span className="text-muted-foreground">({tailor.reviews.length} reviews)</span>
                    </div>
                    <div className="flex gap-2 justify-center mb-6">
                      {tailor.badges.map((badge, index) => (
                        <Badge key={index} variant="secondary" className="bg-accent/10 text-accent">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{tailor.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{tailor.experience}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{tailor.completedOrders} orders completed</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Start Order
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Heart className="h-4 w-4 mr-2" />
                      Save Tailor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:w-2/3">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>About {tailor.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{tailor.bio}</p>

                      <div>
                        <h3 className="font-semibold mb-3">Price Range</h3>
                        <p className="text-lg font-medium text-accent">{tailor.price}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Achievements</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {tailor.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Award className="h-4 w-4 text-accent" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Contact Information</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{tailor.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{tailor.email}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="portfolio" className="mt-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Portfolio</CardTitle>
                      <CardDescription>Browse through {tailor.name}'s previous work and craftsmanship</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {tailor.portfolio.map((item) => (
                          <div key={item.id} className="group relative aspect-square overflow-hidden rounded-lg">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                              <div className="p-4 text-white">
                                <h4 className="font-medium">{item.title}</h4>
                                <p className="text-sm opacity-90">{item.category}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Customer Reviews</CardTitle>
                      <CardDescription>What customers are saying about {tailor.name}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {tailor.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                              <AvatarFallback>
                                {review.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{review.name}</h4>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <div className="flex items-center space-x-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="services" className="mt-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Services Offered</CardTitle>
                      <CardDescription>Complete list of services provided by {tailor.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {tailor.services.map((service, index) => (
                          <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                            <Scissors className="h-4 w-4 text-accent" />
                            <span className="text-sm font-medium">{service}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
