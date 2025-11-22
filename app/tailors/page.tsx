"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Star, Filter, Scissors } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

// Type definition for Tailor
type Tailor = {
  user_id: string
  shop_name: string
  specialty: string
  rating: number
  location: string
  experience_years: number
  profiles: {
    full_name: string
    avatar_url: string
  }
}

export default function TailorsPage() {
  const [tailors, setTailors] = useState<Tailor[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchTailors = async () => {
      // In a real app, we would join with profiles
      // For now, we'll fetch tailors and mock the profile data if needed or assume the join works
      // Since we just created the schema, let's try to fetch.
      // If no data, we'll show placeholders.

      const { data, error } = await supabase
        .from('tailors')
        .select(`
          *,
          profiles (
            full_name,
            avatar_url
          )
        `)

      if (error) {
        console.error("Error fetching tailors:", error)
      } else {
        setTailors(data as any) // Type casting for simplicity in this demo
      }
      setLoading(false)
    }

    fetchTailors()
  }, [])

  // Mock data if DB is empty
  const displayTailors = tailors.length > 0 ? tailors : [
    {
      user_id: "1",
      shop_name: "Masterji Cuts",
      specialty: "Suits & Blazers",
      rating: 4.8,
      location: "Bandra West, Mumbai",
      experience_years: 15,
      profiles: { full_name: "Rajesh Kumar", avatar_url: "" }
    },
    {
      user_id: "2",
      shop_name: "Elegant Stitches",
      specialty: "Lehengas & Sarees",
      rating: 4.9,
      location: "Andheri East, Mumbai",
      experience_years: 10,
      profiles: { full_name: "Sunita Devi", avatar_url: "" }
    },
    {
      user_id: "3",
      shop_name: "Modern Fit",
      specialty: "Shirts & Trousers",
      rating: 4.5,
      location: "Colaba, Mumbai",
      experience_years: 8,
      profiles: { full_name: "Amit Singh", avatar_url: "" }
    }
  ]

  const filteredTailors = displayTailors.filter(tailor =>
    tailor.shop_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tailor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tailor.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Find Your Tailor</h1>
          <p className="text-muted-foreground">Connect with the best local talent for your custom needs</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, specialty, or location..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTailors.map((tailor) => (
          <Card key={tailor.user_id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-32 bg-muted flex items-center justify-center relative">
              {/* Placeholder cover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
            <CardHeader className="relative -mt-12 pb-2">
              <div className="flex justify-between items-end">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage src={tailor.profiles.avatar_url} />
                  <AvatarFallback>{tailor.profiles.full_name[0]}</AvatarFallback>
                </Avatar>
                <Badge className="mb-2 bg-yellow-500 hover:bg-yellow-600">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  {tailor.rating}
                </Badge>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-xl">{tailor.shop_name}</h3>
                <p className="text-sm text-muted-foreground">{tailor.profiles.full_name}</p>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {tailor.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Scissors className="h-4 w-4 mr-2" />
                  {tailor.specialty} • {tailor.experience_years} Years Exp.
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Link href={`/order/new?tailor=${tailor.user_id}`} className="w-full">
                <Button className="w-full">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
