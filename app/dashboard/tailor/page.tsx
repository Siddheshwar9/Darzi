"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Scissors, Loader2, Check, X, LogOut } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function TailorDashboard() {
    const router = useRouter()
    const [orders, setOrders] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [updatingOrderId, setUpdatingOrderId] = useState<string | null>(null)

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
            router.push("/auth")
            return
        }

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

    const handleOrderAction = async (orderId: string, newStatus: string) => {
        setUpdatingOrderId(orderId)

        const { error } = await supabase
            .from('orders')
            .update({ status: newStatus })
            .eq('id', orderId)

        if (error) {
            alert("Error updating order: " + error.message)
        } else {
            // Refresh orders
            await fetchOrders()
        }

        setUpdatingOrderId(null)
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/auth")
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-500'
            case 'accepted': return 'bg-blue-500'
            case 'in_progress': return 'bg-purple-500'
            case 'completed': return 'bg-green-500'
            case 'cancelled': return 'bg-red-500'
            default: return 'bg-gray-500'
        }
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Simple Header */}
            <nav className="border-b bg-card sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                            <Scissors className="h-6 w-6 text-accent" />
                            <span className="text-xl font-bold">Darzi Tailor</span>
                        </Link>
                        <Button variant="outline" size="sm" onClick={handleLogout}>
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Incoming Orders</h1>
                    <p className="text-muted-foreground">Review and manage your customer orders</p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                ) : orders.length === 0 ? (
                    <Card>
                        <CardContent className="py-12 text-center text-muted-foreground">
                            No orders yet. Orders from customers will appear here.
                        </CardContent>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <Card key={order.id} className="overflow-hidden">
                                <CardHeader className="bg-muted/50">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Avatar>
                                                <AvatarImage src={order.customers?.profiles?.avatar_url} />
                                                <AvatarFallback>
                                                    {order.customers?.profiles?.full_name?.[0] || 'C'}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-lg">
                                                    {order.customers?.profiles?.full_name || 'Unknown Customer'}
                                                </CardTitle>
                                                <p className="text-sm text-muted-foreground">
                                                    Order #{order.id.slice(0, 8)}
                                                </p>
                                            </div>
                                        </div>
                                        <Badge className={getStatusColor(order.status)}>
                                            {order.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        {/* Order Details */}
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-1">Description</p>
                                            <p className="text-base">{order.description}</p>
                                        </div>

                                        {order.design_url && (
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground mb-2">Design Reference</p>
                                                <img
                                                    src={order.design_url}
                                                    alt="Design"
                                                    className="rounded-lg max-h-48 object-cover"
                                                />
                                            </div>
                                        )}

                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="text-muted-foreground">Phone</p>
                                                <p className="font-medium">{order.customers?.phone || 'Not provided'}</p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Amount</p>
                                                <p className="font-medium">{order.amount ? `₹${order.amount}` : 'Not set'}</p>
                                            </div>
                                        </div>

                                        {order.customers?.address && (
                                            <div>
                                                <p className="text-sm text-muted-foreground">Address</p>
                                                <p className="text-sm">{order.customers.address}</p>
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        {order.status === 'pending' && (
                                            <div className="flex gap-3 pt-4 border-t">
                                                <Button
                                                    className="flex-1 bg-green-600 hover:bg-green-700"
                                                    onClick={() => handleOrderAction(order.id, 'accepted')}
                                                    disabled={updatingOrderId === order.id}
                                                >
                                                    {updatingOrderId === order.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                    ) : (
                                                        <Check className="h-4 w-4 mr-2" />
                                                    )}
                                                    Accept Order
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    className="flex-1"
                                                    onClick={() => handleOrderAction(order.id, 'cancelled')}
                                                    disabled={updatingOrderId === order.id}
                                                >
                                                    {updatingOrderId === order.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                    ) : (
                                                        <X className="h-4 w-4 mr-2" />
                                                    )}
                                                    Reject
                                                </Button>
                                            </div>
                                        )}

                                        {order.status === 'accepted' && (
                                            <div className="pt-4 border-t">
                                                <Button
                                                    className="w-full"
                                                    onClick={() => handleOrderAction(order.id, 'in_progress')}
                                                    disabled={updatingOrderId === order.id}
                                                >
                                                    {updatingOrderId === order.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                    ) : null}
                                                    Mark as In Progress
                                                </Button>
                                            </div>
                                        )}

                                        {order.status === 'in_progress' && (
                                            <div className="pt-4 border-t">
                                                <Button
                                                    className="w-full bg-green-600 hover:bg-green-700"
                                                    onClick={() => handleOrderAction(order.id, 'completed')}
                                                    disabled={updatingOrderId === order.id}
                                                >
                                                    {updatingOrderId === order.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                    ) : (
                                                        <Check className="h-4 w-4 mr-2" />
                                                    )}
                                                    Mark as Completed
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
