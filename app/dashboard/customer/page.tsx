"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Scissors,
    Search,
    ShoppingBag,
    User,
    MapPin,
    Star,
    PlusCircle,
    Loader2
} from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

export default function CustomerDashboard() {
    const [orders, setOrders] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrders = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) return

            const { data, error } = await supabase
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

            if (error) {
                console.error("Error fetching orders:", error)
            } else {
                setOrders(data || [])
            }
            setLoading(false)
        }

        fetchOrders()
    }, [])

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
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm">
                                <ShoppingBag className="h-5 w-5" />
                            </Button>
                            <Avatar>
                                <AvatarImage src="/customer-avatar.jpg" alt="Customer" />
                                <AvatarFallback>CS</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Hello, Customer</h1>
                        <p className="text-muted-foreground">Find tailors and track your orders</p>
                    </div>
                    <Link href="/order/new">
                        <Button className="bg-primary text-primary-foreground">
                            <PlusCircle className="h-4 w-4 mr-2" />
                            New Order
                        </Button>
                    </Link>
                </div>

                <Tabs defaultValue="active-orders" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                        <TabsTrigger value="active-orders">Active Orders</TabsTrigger>
                        <TabsTrigger value="past-orders">Past Orders</TabsTrigger>
                    </TabsList>

                    <TabsContent value="active-orders" className="mt-6">
                        {loading ? (
                            <div className="flex justify-center py-8">
                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                            </div>
                        ) : orders.length === 0 ? (
                            <div className="text-center py-12 border rounded-lg bg-muted/10">
                                <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-medium">No active orders</h3>
                                <p className="text-muted-foreground mb-4">Start by finding a tailor and placing an order.</p>
                                <Link href="/tailors">
                                    <Button>Find a Tailor</Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {orders.map((order) => (
                                    <Card key={order.id}>
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="capitalize">{order.description.split(':')[0] || 'Order'}</CardTitle>
                                                    <CardDescription>Order #{order.id.slice(0, 8)}</CardDescription>
                                                </div>
                                                <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
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
                                                    <span>Status</span>
                                                    <span className="font-medium capitalize">{order.status}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Placed On</span>
                                                    <span className="font-medium">{new Date(order.created_at).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="past-orders" className="mt-6">
                        <div className="text-center text-muted-foreground py-10">
                            No past orders found.
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Featured Tailors Near You</h2>
                    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                        {/* Placeholder Tailor Cards */}
                        {[1, 2, 3, 4].map((i) => (
                            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-32 bg-muted flex items-center justify-center">
                                    <Scissors className="h-10 w-10 text-muted-foreground" />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-bold text-lg">Tailor Shop {i}</h3>
                                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                                        <MapPin className="h-3 w-3 mr-1" /> Mumbai, India
                                    </div>
                                    <div className="flex items-center text-sm font-medium mb-3">
                                        <Star className="h-3 w-3 text-yellow-500 mr-1" /> 4.8 (120 reviews)
                                    </div>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        <Badge variant="secondary" className="text-xs">Suits</Badge>
                                        <Badge variant="secondary" className="text-xs">Dresses</Badge>
                                    </div>
                                    <Button className="w-full" variant="outline">View Profile</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
