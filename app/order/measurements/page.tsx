import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Scissors, Camera, Ruler, Upload, ArrowLeft, ArrowRight, Smartphone, User } from "lucide-react"
import Link from "next/link"

export default function MeasurementsPage() {
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
              <Link href="/order" className="text-foreground font-medium">
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

      {/* Progress Steps */}
      <section className="py-8 px-4 border-b bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-sm font-medium">Choose Style</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="text-sm font-medium">Measurements</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-sm text-muted-foreground">Select Tailor</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                4
              </div>
              <span className="text-sm text-muted-foreground">Confirm Order</span>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Your Measurements</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you'd like to provide your measurements for the perfect fit.
          </p>
        </div>
      </section>

      {/* Measurement Options */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="ai" className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>AI Measurement</span>
              </TabsTrigger>
              <TabsTrigger value="manual" className="flex items-center space-x-2">
                <Ruler className="h-4 w-4" />
                <span>Manual Entry</span>
              </TabsTrigger>
              <TabsTrigger value="existing" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Existing Garment</span>
              </TabsTrigger>
            </TabsList>

            {/* AI Measurement Tab */}
            <TabsContent value="ai" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Camera className="h-5 w-5 text-accent" />
                      <span>AI-Powered Measurement</span>
                    </CardTitle>
                    <CardDescription>
                      Take photos and let our AI technology calculate your measurements automatically
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-accent/10 rounded-lg p-6 text-center">
                      <Smartphone className="h-12 w-12 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">How it works</h3>
                      <ol className="text-sm text-muted-foreground space-y-2 text-left max-w-sm mx-auto">
                        <li>1. Take front and side photos in fitted clothing</li>
                        <li>2. Our AI analyzes your body measurements</li>
                        <li>3. Review and adjust measurements if needed</li>
                        <li>4. Get perfectly fitted garments</li>
                      </ol>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-base font-medium mb-3 block">Upload Your Photos</Label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                            <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground mb-2">Front View</p>
                            <Button variant="outline" size="sm">
                              Upload Photo
                            </Button>
                          </div>
                          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                            <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground mb-2">Side View</p>
                            <Button variant="outline" size="sm">
                              Upload Photo
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Photo Guidelines</h4>
                        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                          <li>• Wear fitted clothing (not loose)</li>
                          <li>• Stand straight against a plain background</li>
                          <li>• Ensure good lighting</li>
                          <li>• Keep arms slightly away from body</li>
                        </ul>
                      </div>
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90">Analyze Photos with AI</Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>AI Measurement Results</CardTitle>
                    <CardDescription>Review and adjust the AI-generated measurements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-muted/50 rounded-lg">
                        <p className="text-muted-foreground">Upload photos to see AI measurement results</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Manual Entry Tab */}
            <TabsContent value="manual" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Ruler className="h-5 w-5 text-accent" />
                      <span>Enter Measurements Manually</span>
                    </CardTitle>
                    <CardDescription>Input your measurements manually using a measuring tape</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="chest">Chest (inches)</Label>
                        <Input id="chest" placeholder="e.g., 40" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="waist">Waist (inches)</Label>
                        <Input id="waist" placeholder="e.g., 34" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shoulder">Shoulder (inches)</Label>
                        <Input id="shoulder" placeholder="e.g., 18" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sleeve">Sleeve Length (inches)</Label>
                        <Input id="sleeve" placeholder="e.g., 25" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="neck">Neck (inches)</Label>
                        <Input id="neck" placeholder="e.g., 16" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="length">Length (inches)</Label>
                        <Input id="length" placeholder="e.g., 30" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="height">Height (feet & inches)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Feet" />
                        <Input placeholder="Inches" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight" placeholder="e.g., 70" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Measurement Guide</CardTitle>
                    <CardDescription>How to take accurate measurements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Ruler className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Measurement Guide Video</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                          <div>
                            <h4 className="font-medium">Chest</h4>
                            <p className="text-sm text-muted-foreground">
                              Measure around the fullest part of your chest
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                          <div>
                            <h4 className="font-medium">Waist</h4>
                            <p className="text-sm text-muted-foreground">Measure around your natural waistline</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                          <div>
                            <h4 className="font-medium">Shoulder</h4>
                            <p className="text-sm text-muted-foreground">
                              Measure from shoulder point to shoulder point
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Existing Garment Tab */}
            <TabsContent value="existing" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-accent" />
                      <span>Use Existing Garment</span>
                    </CardTitle>
                    <CardDescription>Upload photos of a well-fitting garment you already own</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-base font-medium mb-3 block">Upload Garment Photos</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Upload photos of your well-fitting garment (front, back, and laid flat)
                          </p>
                          <Button variant="outline" size="sm">
                            Choose Files
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label>Fit Preference</Label>
                        <RadioGroup defaultValue="same">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="same" id="same" />
                            <Label htmlFor="same">Same fit as this garment</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="looser" id="looser" />
                            <Label htmlFor="looser">Slightly looser fit</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="tighter" id="tighter" />
                            <Label htmlFor="tighter">Slightly tighter fit</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                      <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Best Results</h4>
                      <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                        <li>• Use a garment that fits you perfectly</li>
                        <li>• Lay the garment flat on a plain surface</li>
                        <li>• Take clear, well-lit photos</li>
                        <li>• Include front, back, and detail shots</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Garment Analysis</CardTitle>
                    <CardDescription>AI analysis of your reference garment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-muted/50 rounded-lg">
                        <p className="text-muted-foreground">Upload garment photos to see analysis results</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <Button variant="outline" asChild>
              <Link href="/order">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Style Selection
              </Link>
            </Button>
            <Button className="bg-accent hover:bg-accent/90" asChild>
              <Link href="/order/tailors">
                Continue to Tailor Selection
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
