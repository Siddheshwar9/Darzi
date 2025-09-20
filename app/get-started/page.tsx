"use client"

import { useState, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Clock, Upload, Check, X, Eye, Search } from "lucide-react"
import Link from "next/link"
import { DarziLogo } from "@/components/darzi-logo"

const tailors = [
  {
    id: 1,
    name: "Master Ahmed",
    specialty: "Traditional & Modern Suits",
    rating: 4.9,
    reviews: 156,
    location: "Mumbai, Maharashtra",
    experience: "15+ years",
    pricing: "₹2,500 - ₹8,000",
    image: "/professional-tailor-portrait.jpg",
    portfolio: ["/elegant-suit.png", "/traditional-sherwani.jpg", "/modern-blazer.jpg"],
    description:
      "Specializing in premium suits and traditional wear with modern touches. Expert in both Indian and Western styles.",
    orderStatus: "accepting",
  },
  {
    id: 2,
    name: "Priya Sharma",
    specialty: "Women's Ethnic Wear",
    rating: 4.8,
    reviews: 203,
    location: "Delhi, NCR",
    experience: "12+ years",
    pricing: "₹1,800 - ₹6,500",
    image: "/female-tailor-working-on-ethnic-clothing.jpg",
    portfolio: ["/elegant-saree-blouse.jpg", "/designer-lehenga.jpg", "/kurti-design.jpg"],
    description:
      "Expert in creating beautiful ethnic wear for women. Specializes in intricate embroidery and traditional designs.",
    orderStatus: "accepting",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    specialty: "Formal & Casual Wear",
    rating: 4.9,
    reviews: 189,
    location: "Bangalore, Karnataka",
    experience: "18+ years",
    pricing: "₹2,000 - ₹7,500",
    image: "/experienced-tailor-with-formal-wear.jpg",
    portfolio: ["/classic-business-suit.png", "/casual-shirt.jpg", "/formal-trousers.png"],
    description: "Versatile tailor with expertise in both formal business wear and comfortable casual clothing.",
    orderStatus: "busy",
  },
  {
    id: 4,
    name: "Fatima Ali",
    specialty: "Designer Wear & Alterations",
    rating: 4.7,
    reviews: 134,
    location: "Hyderabad, Telangana",
    experience: "10+ years",
    pricing: "₹1,500 - ₹5,500",
    image: "/female-tailor-portrait.jpg",
    portfolio: ["/elegant-designer-dress.png", "/altered-garment.jpg", "/custom-design.jpg"],
    description: "Creative designer specializing in unique custom pieces and expert alterations for perfect fit.",
    orderStatus: "accepting",
  },
]

export default function GetStartedPage() {
  const [selectedTailor, setSelectedTailor] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [locationFilter, setLocationFilter] = useState<string>("All Locations")
  const [specialtyFilter, setSpecialtyFilter] = useState<string>("All Specialties")
  const [designImages, setDesignImages] = useState<string[]>([])
  const [orderDetails, setOrderDetails] = useState({
    garmentType: "",
    description: "",
    measurements: "",
    deadline: "",
    budget: "",
  })

  const filteredTailors = tailors.filter((tailor) => {
    return (
      (tailor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tailor.specialty.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (locationFilter === "All Locations" || tailor.location.includes(locationFilter)) &&
      (specialtyFilter === "All Specialties" || tailor.specialty.includes(specialtyFilter))
    )
  })

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : []
    const imageUrls = files.map((file) => URL.createObjectURL(file))
    setDesignImages((prev: string[]) => [...prev, ...imageUrls])
  }
  // Type index parameter
  const removeImage = (index: number) => {
    setDesignImages((prev: string[]) => prev.filter((_, i) => i !== index))
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <DarziLogo />
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Tailor</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse skilled tailors, view their work, and place custom orders with design uploads
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tailors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Locations">All Locations</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
                <SelectItem value="Hyderabad">Hyderabad</SelectItem>
              </SelectContent>
            </Select>
            <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Specialties">All Specialties</SelectItem>
                <SelectItem value="Suits">Suits</SelectItem>
                <SelectItem value="Ethnic">Ethnic Wear</SelectItem>
                <SelectItem value="Formal">Formal Wear</SelectItem>
                <SelectItem value="Designer">Designer Wear</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tailors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTailors.map((tailor) => (
            <Card key={tailor.id} className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={tailor.image || "/placeholder.svg"}
                  alt={tailor.name}
                  className="w-full h-full object-cover"
                />
                <Badge
                  className={`absolute top-3 right-3 ${
                    tailor.orderStatus === "accepting"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {tailor.orderStatus === "accepting" ? "Available" : "Busy"}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{tailor.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{tailor.rating}</span>
                    <span className="text-xs text-muted-foreground">({tailor.reviews})</span>
                  </div>
                </div>
                <CardDescription className="mb-3">{tailor.specialty}</CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{tailor.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{tailor.experience}</span>
                  </div>
                  <div className="font-medium text-foreground">{tailor.pricing}</div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-1" />
                        View Work
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{tailor.name}'s Portfolio</DialogTitle>
                        <DialogDescription>{tailor.description}</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {tailor.portfolio.map((image, index) => (
                          <img
                            key={index}
                            src={image || "/placeholder.svg"}
                            alt={`Work sample ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="flex-1" disabled={tailor.orderStatus === "busy"}>
                        Place Order
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Place Order with {tailor.name}</DialogTitle>
                        <DialogDescription>Fill in your requirements and upload design images</DialogDescription>
                      </DialogHeader>

                      <Tabs defaultValue="details" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="details">Order Details</TabsTrigger>
                          <TabsTrigger value="design">Design Upload</TabsTrigger>
                        </TabsList>

                        <TabsContent value="details" className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="garmentType">Garment Type</Label>
                              <Select
                                value={orderDetails.garmentType}
                                onValueChange={(value) => setOrderDetails((prev) => ({ ...prev, garmentType: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="suit">Suit</SelectItem>
                                  <SelectItem value="shirt">Shirt</SelectItem>
                                  <SelectItem value="dress">Dress</SelectItem>
                                  <SelectItem value="ethnic">Ethnic Wear</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="budget">Budget Range</Label>
                              <Input
                                id="budget"
                                placeholder="e.g., ₹3000-5000"
                                value={orderDetails.budget}
                                onChange={(e) => setOrderDetails((prev) => ({ ...prev, budget: e.target.value }))}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="description">Description & Requirements</Label>
                            <Textarea
                              id="description"
                              placeholder="Describe your requirements, style preferences, colors, etc."
                              value={orderDetails.description}
                              onChange={(e) => setOrderDetails((prev) => ({ ...prev, description: e.target.value }))}
                              rows={4}
                            />
                          </div>

                          <div>
                            <Label htmlFor="measurements">Measurements (Optional)</Label>
                            <Textarea
                              id="measurements"
                              placeholder="Provide measurements if available, or we'll arrange for AI measurement"
                              value={orderDetails.measurements}
                              onChange={(e) => setOrderDetails((prev) => ({ ...prev, measurements: e.target.value }))}
                              rows={3}
                            />
                          </div>

                          <div>
                            <Label htmlFor="deadline">Preferred Deadline</Label>
                            <Input
                              id="deadline"
                              type="date"
                              value={orderDetails.deadline}
                              onChange={(e) => setOrderDetails((prev) => ({ ...prev, deadline: e.target.value }))}
                            />
                          </div>
                        </TabsContent>

                        <TabsContent value="design" className="space-y-4">
                          <div>
                            <Label>Upload Design Images</Label>
                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground mb-2">
                                Upload images of designs you want replicated
                              </p>
                              <Input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                id="design-upload"
                              />
                              <Label htmlFor="design-upload" className="cursor-pointer">
                                <Button variant="outline" size="sm" asChild>
                                  <span>Choose Images</span>
                                </Button>
                              </Label>
                            </div>
                          </div>

                          {designImages.length > 0 && (
                            <div>
                              <Label>Uploaded Designs</Label>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                                {designImages.map((image, index) => (
                                  <div key={index} className="relative">
                                    <img
                                      src={image || "/placeholder.svg"}
                                      alt={`Design ${index + 1}`}
                                      className="w-full h-32 object-cover rounded-lg"
                                    />
                                    <Button
                                      variant="destructive"
                                      size="sm"
                                      className="absolute top-1 right-1 h-6 w-6 p-0"
                                      onClick={() => removeImage(index)}
                                    >
                                      <X className="h-3 w-3" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </TabsContent>
                      </Tabs>

                      <div className="flex justify-end space-x-2 pt-4">
                        <Button variant="outline">Save Draft</Button>
                        <Button>Submit Order</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Order Status Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Recent Orders</CardTitle>
            <CardDescription>Track the status of your orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "ORD001", tailor: "Master Ahmed", item: "Custom Suit", status: "accepted", date: "2024-01-15" },
                {
                  id: "ORD002",
                  tailor: "Priya Sharma",
                  item: "Designer Lehenga",
                  status: "pending",
                  date: "2024-01-14",
                },
                { id: "ORD003", tailor: "Rajesh Kumar", item: "Formal Shirt", status: "rejected", date: "2024-01-13" },
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{order.item}</h4>
                    <p className="text-sm text-muted-foreground">
                      Order #{order.id} • {order.tailor}
                    </p>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                  <Badge
                    variant={
                      order.status === "accepted" ? "default" : order.status === "pending" ? "secondary" : "destructive"
                    }
                    className="flex items-center space-x-1"
                  >
                    {order.status === "accepted" && <Check className="h-3 w-3" />}
                    {order.status === "rejected" && <X className="h-3 w-3" />}
                    <span className="capitalize">{order.status}</span>
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
