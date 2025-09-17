import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Check, Star, Users, Zap, TrendingUp, Crown, Shield } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "₹999",
    period: "month",
    description: "Perfect for individual tailors starting their journey",
    features: [
      "Up to 20 orders per month",
      "Basic profile listing",
      "Customer messaging",
      "Order management",
      "Payment processing",
      "Basic analytics",
      "Email support",
    ],
    limitations: ["Limited portfolio images (5)", "No priority listing", "Standard customer support"],
    popular: false,
    color: "border-border",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹1,999",
    period: "month",
    description: "Best for established tailors with regular customers",
    features: [
      "Unlimited orders",
      "Premium profile with priority listing",
      "Advanced customer messaging",
      "AI-powered order matching",
      "Bulk order management",
      "Detailed analytics & insights",
      "Virtual try-on integration",
      "Priority customer support",
      "Marketing tools",
      "Custom portfolio showcase",
    ],
    limitations: [],
    popular: true,
    color: "border-accent",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "month",
    description: "For large tailoring businesses and shops",
    features: [
      "Everything in Premium",
      "Multi-location management",
      "Team collaboration tools",
      "Advanced API access",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "Custom reporting",
      "24/7 phone support",
      "Training & onboarding",
    ],
    limitations: [],
    popular: false,
    color: "border-yellow-500",
  },
]

export default function SubscriptionPage() {
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
              <Link href="/tailors/join" className="text-muted-foreground hover:text-foreground transition-colors">
                Join as Tailor
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
            Subscription Plans
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Choose Your <span className="text-accent">Growth Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Select the perfect subscription plan to grow your tailoring business. All plans include secure payments,
            customer management, and our AI-powered features.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`border-2 ${plan.color} ${
                  plan.popular ? "shadow-xl scale-105" : "shadow-lg"
                } relative overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={plan.popular ? "pt-12" : ""}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {plan.id === "basic" && <Users className="h-6 w-6 text-blue-500" />}
                      {plan.id === "premium" && <Star className="h-6 w-6 text-accent" />}
                      {plan.id === "enterprise" && <Crown className="h-6 w-6 text-yellow-500" />}
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    </div>
                    {plan.popular && <Badge className="bg-accent">Recommended</Badge>}
                  </div>
                  <div className="mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/{plan.period}</span>}
                    </div>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>What's included:</span>
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-muted-foreground">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                            </div>
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-accent hover:bg-accent/90"
                        : plan.id === "enterprise"
                          ? "bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
                          : ""
                    }`}
                    size="lg"
                    asChild
                  >
                    <Link href={`/subscription/checkout?plan=${plan.id}`}>
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-center p-4 font-semibold">Basic</th>
                      <th className="text-center p-4 font-semibold">Premium</th>
                      <th className="text-center p-4 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 font-medium">Monthly Orders</td>
                      <td className="p-4 text-center">Up to 20</td>
                      <td className="p-4 text-center">Unlimited</td>
                      <td className="p-4 text-center">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">AI-Powered Matching</td>
                      <td className="p-4 text-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Virtual Try-On Integration</td>
                      <td className="p-4 text-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Priority Listing</td>
                      <td className="p-4 text-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Advanced Analytics</td>
                      <td className="p-4 text-center">Basic</td>
                      <td className="p-4 text-center">Advanced</td>
                      <td className="p-4 text-center">Custom</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Customer Support</td>
                      <td className="p-4 text-center">Email</td>
                      <td className="p-4 text-center">Priority</td>
                      <td className="p-4 text-center">24/7 Phone</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Secure & Reliable</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All plans include secure payment processing, data protection, and 99.9% uptime guarantee.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span>AI-Powered Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leverage our AI technology to get matched with ideal customers and grow your business faster.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <span>Flexible Scaling</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start with any plan and upgrade as your business grows. No long-term commitments required.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Can I change my plan anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                    prorate the billing accordingly.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Is there a free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer a 14-day free trial for all new tailors. No credit card required to start your trial.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, debit cards, UPI, and bank transfers. All payments are processed
                    securely.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your subscription
                    fee.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
