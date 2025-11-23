"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Scissors,
    Search,
    ShoppingBag,
    MapPin,
    Star,
    Loader2,
    LogOut,
    Clock,
    Eye
} from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function CustomerDashboard() {
    const router = useRouter()
    const [orders, setOrders] = useState<any[]>([])
    const [tailors, setTailors] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [locationFilter, setLocationFilter] = useState("All Locations")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
            router.push("/auth")
            return
        }

        // Fetch orders
        const { data: ordersData } = await supabase
            .from('orders')
            .select(`
                *,
                tailors (
                    shop_name,
                    profiles (
                        full_name,
                        avatar_url
                    )
                )
            `)
            .eq('customer_id', session.user.id)
            .order('created_at', { ascending: false })

        // Fetch tailors
        const { data: tailorsData } = await supabase
            .from('tailors')
            .select(`
                *,
                profiles (
                    id,
                    full_name,
                    avatar_url
                )
            `)
            .limit(12)

        setOrders(ordersData || [])
        setTailors(tailorsData || [])
        setLoading(false)
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/auth")
    }

    const filteredTailors = tailors.filter((tailor) => {
        const matchesSearch = tailor.shop_name?.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesSearch
    })

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="border-b bg-card sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                            <Scissors className="h-6 w-6 text-accent" />
                            <span className="text-xl font-bold">Darzi</span>
                        </Link>
                        <Button variant="outline" size="sm" onClick={handleLogout}>
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Customer Dashboard</h1>
                    <p className="text-muted-foreground">Browse tailors and manage your orders</p>
                </div>

                <Tabs defaultValue="browse" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                        <TabsTrigger value="browse">Browse Tailors</TabsTrigger>
                        <TabsTrigger value="orders">My Orders</TabsTrigger>
                    </TabsList>

                    {/* Browse Tailors Tab */}
                    <TabsContent value="browse" className="mt-6">
                        {/* Search */}
                        <div className="mb-6">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search tailors by name..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-12">
                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                            </div>
                        ) : filteredTailors.length === 0 ? (
                            <div className="text-center py-12 border rounded-lg bg-muted/10">
                                <Scissors className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-medium">No tailors found</h3>
                                <p className="text-muted-foreground">Try adjusting your search</p>
                            </div>
                        ) : (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {filteredTailors.map((tailor) => (
                                    <Card key={tailor.user_id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="h-32 bg-muted flex items-center justify-center">
                                            <Avatar className="h-20 w-20">
                                                <AvatarImage src={tailor.profiles?.avatar_url} />
                                                <AvatarFallback className="text-2xl">
                                                    {tailor.shop_name?.[0] || 'T'}
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-lg">{tailor.shop_name || 'Tailor Shop'}</CardTitle>
                                            <CardDescription>{tailor.profiles?.full_name}</CardDescription>
                                            <div className="space-y-2 text-sm text-muted-foreground mt-2">
                                                {tailor.location && (
                                                    <div className="flex items-center space-x-1">
                                                        <MapPin className="h-3 w-3" />
                                                        <span>{tailor.location}</span>
                                                    </div>
                                                )}
                                                {tailor.experience && (
                                                    <div className="flex items-center space-x-1">
                                                        <Clock className="h-3 w-3" />
                                                        <span>{tailor.experience}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <Link href={`/order/new?tailorId=${tailor.user_id}`}>
                                                <Button className="w-full">Place Order</Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </TabsContent>

                    {/* My Orders Tab */}
                    <TabsContent value="orders" className="mt-6">
                        {loading ? (
                            <div className="flex justify-center py-12">
                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                            </div>
                        ) : orders.length === 0 ? (
                            <div className="text-center py-12 border rounded-lg bg-muted/10">
                                <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-medium">No orders yet</h3>
                                <p className="text-muted-foreground mb-4">Start by browsing tailors and placing an order</p>
                            </div>
                        ) : (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {orders.map((order) => (
                                    <Card key={order.id}>
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="capitalize text-lg">
                                                        {order.description?.split(':')[0] || 'Order'}
                                                    </CardTitle>
                                                    <CardDescription>Order #{order.id.slice(0, 8)}</CardDescription>
                                                </div>
                                                <Badge
                                                    className={
                                                        order.status === 'completed' ? 'bg-green-500' :
                                                            order.status === 'in_progress' ? 'bg-blue-500' :
                                                                order.status === 'accepted' ? 'bg-purple-500' :
                                                                    order.status === 'cancelled' ? 'bg-red-500' :
                                                                        'bg-yellow-500'
                                                    }
                                                >
                                                    {order.status}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center space-x-4 mb-4">
                                                <Avatar>
                                                    <AvatarImage src={order.tailors?.profiles?.avatar_url} />
                                                    <AvatarFallback>{order.tailors?.shop_name?.[0] || 'T'}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium">{order.tailors?.shop_name || 'Unknown Tailor'}</p>
                                                    <p className="text-sm text-muted-foreground">Tailor</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span>Placed On</span>
                                                    <span className="font-medium">
                                                        {new Date(order.created_at).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                {order.amount && (
                                                    <div className="flex justify-between">
                                                        <span>Amount</span>
                                                        <span className="font-medium">₹{order.amount}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
