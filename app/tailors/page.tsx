import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Clock, Search, Filter, Scissors } from "lucide-react"
import Link from "next/link"

const tailors = [
  {
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
  },
  {
    id: 2,
    name: "Priya Sharma",
    specialty: "Women's Ethnic Wear",
    rating: 4.8,
    reviews: 89,
    location: "Delhi, NCR",
    experience: "12+ years",
    price: "₹1,800 - ₹6,500",
    image: "/female-tailor-working-on-ethnic-clothing.jpg",
    badges: ["Eco-Friendly", "Custom Design"],
    completedOrders: 320,
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    specialty: "Formal & Casual Wear",
    rating: 4.9,
    reviews: 156,
    location: "Bangalore, Karnataka",
    experience: "18+ years",
    price: "₹2,000 - ₹7,500",
    image: "/experienced-tailor-with-formal-wear.jpg",
    badges: ["Bulk Orders", "Premium"],
    completedOrders: 580,
  },
  {
    id: 4,
    name: "Meera Patel",
    specialty: "Bridal & Party Wear",
    rating: 4.7,
    reviews: 73,
    location: "Ahmedabad, Gujarat",
    experience: "10+ years",
    price: "₹3,000 - ₹12,000",
    image: "/placeholder.svg?key=bridal",
    badges: ["Luxury", "Custom Design"],
    completedOrders: 210,
  },
  {
    id: 5,
    name: "Suresh Reddy",
    specialty: "Men's Casual & Sportswear",
    rating: 4.6,
    reviews: 94,
    location: "Hyderabad, Telangana",
    experience: "8+ years",
    price: "₹1,500 - ₹5,000",
    image: "/placeholder.svg?key=casual",
    badges: ["Fast Delivery", "Affordable"],
    completedOrders: 380,
  },
  {
    id: 6,
    name: "Kavita Singh",
    specialty: "Kids & Teen Fashion",
    rating: 4.8,
    reviews: 112,
    location: "Pune, Maharashtra",
    experience: "14+ years",
    price: "₹1,200 - ₹4,500",
    image: "/placeholder.svg?key=kids",
    badges: ["Family Friendly", "Quick Turnaround"],
    completedOrders: 290,
  },
]

export default function TailorsPage() {
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
              <Link href="/tailors" className="text-foreground font-medium">
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
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Tailor</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through our network of skilled tailors and find the perfect match for your custom clothing needs.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, specialty, or location..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Location" />
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
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="suits">Suits</SelectItem>
                  <SelectItem value="ethnic">Ethnic Wear</SelectItem>
                  <SelectItem value="formal">Formal Wear</SelectItem>
                  <SelectItem value="bridal">Bridal Wear</SelectItem>
                  <SelectItem value="casual">Casual Wear</SelectItem>
                  <SelectItem value="kids">Kids Fashion</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full md:w-auto bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tailors Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tailors.map((tailor) => (
              <Card key={tailor.id} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src={tailor.image || "/placeholder.svg"}
                    alt={tailor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {tailor.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="bg-accent/90 text-accent-foreground">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{tailor.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tailor.rating}</span>
                      <span className="text-sm text-muted-foreground">({tailor.reviews})</span>
                    </div>
                  </div>
                  <CardDescription className="mb-3">{tailor.specialty}</CardDescription>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{tailor.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{tailor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{tailor.price}</span>
                      <span className="text-xs">{tailor.completedOrders} orders completed</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href={`/tailors/${tailor.id}`}>View Profile</Link>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Tailors
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
