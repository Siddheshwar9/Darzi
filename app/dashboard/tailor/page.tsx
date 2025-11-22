"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Scissors,
    TrendingUp,
    Users,
    Star,
    Calendar,
    CreditCard,
    Settings,
    Bell,
    Package,
    BarChart3,
    Crown,
    Loader2
} from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

export default function TailorDashboard() {
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
          customers (
            phone,
            address,
            profiles (
              full_name,
              avatar_url
            )
          )
        `)
                .eq('tailor_id', session.user.id)
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
                            <Button variant="outline" size="sm">
                                <Bell className="h-4 w-4 mr-2" />
                                Notifications
                            </Button>
                            <Button variant="outline" size="sm">
                                <Settings className="h-4 w-4 mr-2" />
                                Settings
                            </Button>
                            <Avatar>
                                <AvatarImage src="/professional-tailor-portrait.jpg" alt="Master Ahmed" />
                                <AvatarFallback>MA</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome back, Master</h1>
                        <p className="text-muted-foreground">Here's what's happening with your tailoring business</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Badge className="bg-accent">Premium Plan</Badge>
                        <Crown className="h-5 w-5 text-accent" />
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <Card className="border-0 shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{orders.length}</div>
                            <p className="text-xs text-muted-foreground">All time</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹45,230</div>
                            <p className="text-xs text-muted-foreground">+8% from last month</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">89</div>
                            <p className="text-xs text-muted-foreground">+5 new this week</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Rating</CardTitle>
                            <Star className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">4.9</div>
                            <p className="text-xs text-muted-foreground">Based on 127 reviews</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <Tabs defaultValue="orders" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="orders">Recent Orders</TabsTrigger>
                                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                                <TabsTrigger value="customers">Customers</TabsTrigger>
                            </TabsList>

                            <TabsContent value="orders" className="space-y-4">
                                <Card className="border-0 shadow-lg">
                                    <CardHeader>
                                        <CardTitle>Recent Orders</CardTitle>
                                        <CardDescription>Your latest customer orders and their status</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {loading ? (
                                            <div className="flex justify-center py-8">
                                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                                            </div>
                                        ) : orders.length === 0 ? (
                                            <div className="text-center py-8 text-muted-foreground">
                                                No orders yet.
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                {orders.map((order) => (
                                                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                                                        <div className="flex items-center space-x-4">
                                                            <Avatar>
                                                                <AvatarImage src={order.customers?.profiles?.avatar_url} />
                                                                <AvatarFallback>
                                                                    {order.customers?.profiles?.full_name?.[0] || 'C'}
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <div>
                                                                <p className="font-medium">{order.customers?.profiles?.full_name || 'Unknown Customer'}</p>
                                                                <p className="text-sm text-muted-foreground">
                                                                    {order.description.split(':')[0]} • {order.id.slice(0, 8)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="font-medium">{order.amount ? `₹${order.amount}` : 'Pending Quote'}</p>
                                                            <Badge variant={order.status === "completed" ? "default" : "secondary"}>
                                                                {order.status}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="analytics" className="space-y-4">
                                <Card className="border-0 shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="flex items-center space-x-2">
                                            <BarChart3 className="h-5 w-5" />
                                            <span>Business Analytics</span>
                                        </CardTitle>
                                        <CardDescription>Track your business performance and growth</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span>Monthly Goal Progress</span>
                                                <span>75%</span>
                                            </div>
                                            <Progress value={75} />
                                            <p className="text-xs text-muted-foreground">₹33,923 of ₹45,000 monthly target</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                                                <p className="text-2xl font-bold text-accent">18</p>
                                                <p className="text-sm text-muted-foreground">Orders this week</p>
                                            </div>
                                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                                                <p className="text-2xl font-bold text-green-600">₹12,450</p>
                                                <p className="text-sm text-muted-foreground">Weekly revenue</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="customers" className="space-y-4">
                                <Card className="border-0 shadow-lg">
                                    <CardHeader>
                                        <CardTitle>Customer Management</CardTitle>
                                        <CardDescription>Manage your customer relationships</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {[
                                                { name: "Rahul Sharma", orders: 5, spent: "₹18,500", lastOrder: "2 days ago" },
                                                { name: "Priya Patel", orders: 3, spent: "₹12,200", lastOrder: "1 week ago" },
                                                { name: "Amit Kumar", orders: 8, spent: "₹25,600", lastOrder: "3 days ago" },
                                            ].map((customer, index) => (
                                                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                                    <div className="flex items-center space-x-4">
                                                        <Avatar>
                                                            <AvatarFallback>
                                                                {customer.name
                                                                    .split(" ")
                                                                    .map((n) => n[0])
                                                                    .join("")}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <p className="font-medium">{customer.name}</p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {customer.orders} orders • Last: {customer.lastOrder}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-medium">{customer.spent}</p>
                                                        <p className="text-sm text-muted-foreground">Total spent</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Subscription Status */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <CreditCard className="h-5 w-5" />
                                    <span>Subscription</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span>Current Plan</span>
                                    <Badge className="bg-accent">Premium</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Monthly Cost</span>
                                    <span className="font-medium">₹1,999</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Next Billing</span>
                                    <span className="text-sm text-muted-foreground">Dec 15, 2024</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Orders Used</span>
                                        <span>127 / Unlimited</span>
                                    </div>
                                    <Progress value={100} />
                                </div>
                                <Button variant="outline" className="w-full bg-transparent">
                                    Manage Subscription
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button className="w-full justify-start bg-transparent" variant="outline">
                                    <Package className="h-4 w-4 mr-2" />
                                    Create New Order
                                </Button>
                                <Button className="w-full justify-start bg-transparent" variant="outline">
                                    <Users className="h-4 w-4 mr-2" />
                                    Add Customer
                                </Button>
                                <Button className="w-full justify-start bg-transparent" variant="outline">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Schedule Fitting
                                </Button>
                                <Button className="w-full justify-start bg-transparent" variant="outline">
                                    <BarChart3 className="h-4 w-4 mr-2" />
                                    View Reports
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                                        <div>
                                            <p className="text-sm">Order completed for Priya Patel</p>
                                            <p className="text-xs text-muted-foreground">2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                        <div>
                                            <p className="text-sm">New customer inquiry received</p>
                                            <p className="text-xs text-muted-foreground">4 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                                        <div>
                                            <p className="text-sm">Payment received from Amit Kumar</p>
                                            <p className="text-xs text-muted-foreground">1 day ago</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
