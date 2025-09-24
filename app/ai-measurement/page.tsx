"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Scissors, Camera, Upload, Zap, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AIMeasurementPage() {
  const [analysisStep, setAnalysisStep] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setAnalysisStep(0)

    // Simulate AI analysis steps
    const steps = [
      { delay: 1000, step: 1, message: "Processing uploaded images..." },
      { delay: 2000, step: 2, message: "Detecting body landmarks..." },
      { delay: 3000, step: 3, message: "Calculating measurements..." },
      { delay: 4000, step: 4, message: "Validating results..." },
      { delay: 5000, step: 5, message: "Analysis complete!" },
    ]

    steps.forEach(({ delay, step, message }) => {
      setTimeout(() => {
        setAnalysisStep(step)
        if (step === 5) {
          setIsAnalyzing(false)
        }
      }, delay)
    })
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

      {/* Header */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
            AI-Powered Technology
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Smart Measurement Analysis</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get accurate body measurements using advanced AI image analysis technology. Simply upload photos and let our
            AI do the rest.
          </p>
        </div>
      </section>

      {/* AI Measurement Interface */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Interface */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="h-5 w-5 text-accent" />
                    <span>Upload Your Photos</span>
                  </CardTitle>
                  <CardDescription>
                    Upload front and side view photos for accurate AI measurement analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Front View</p>
                      <Button variant="outline" size="sm">
                        Upload Photo
                      </Button>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          Required
                        </Badge>
                      </div>
                    </div>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Side View</p>
                      <Button variant="outline" size="sm">
                        Upload Photo
                      </Button>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          Required
                        </Badge>
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
                      <li>• Take photos from chest level</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Label>Additional Information</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input id="height" placeholder="e.g., 175" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input id="weight" placeholder="e.g., 70" />
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-accent hover:bg-accent/90"
                    size="lg"
                    onClick={startAnalysis}
                    disabled={isAnalyzing}
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    {isAnalyzing ? "Analyzing..." : "Start AI Analysis"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Analysis Results */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-accent" />
                    <span>AI Analysis Results</span>
                  </CardTitle>
                  <CardDescription>Real-time analysis of your uploaded photos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!isAnalyzing && analysisStep === 0 && (
                    <div className="text-center p-8 bg-muted/50 rounded-lg">
                      <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Upload photos to start AI analysis</p>
                    </div>
                  )}

                  {(isAnalyzing || analysisStep > 0) && (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                          {analysisStep >= 5 ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Zap className="h-5 w-5 text-accent animate-pulse" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {analysisStep === 0 && "Initializing AI analysis..."}
                            {analysisStep === 1 && "Processing uploaded images..."}
                            {analysisStep === 2 && "Detecting body landmarks..."}
                            {analysisStep === 3 && "Calculating measurements..."}
                            {analysisStep === 4 && "Validating results..."}
                            {analysisStep === 5 && "Analysis complete!"}
                          </p>
                          <Progress value={analysisStep * 20} className="mt-2" />
                        </div>
                      </div>

                      {analysisStep >= 5 && (
                        <div className="space-y-4 mt-6">
                          <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              <h4 className="font-medium text-green-900 dark:text-green-100">
                                Measurements Calculated
                              </h4>
                            </div>
                            <p className="text-sm text-green-800 dark:text-green-200">
                              AI has successfully analyzed your photos and calculated precise measurements.
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-card border rounded-lg p-3">
                              <Label className="text-sm text-muted-foreground">Chest</Label>
                              <p className="text-lg font-medium">40.2 inches</p>
                            </div>
                            <div className="bg-card border rounded-lg p-3">
                              <Label className="text-sm text-muted-foreground">Waist</Label>
                              <p className="text-lg font-medium">34.8 inches</p>
                            </div>
                            <div className="bg-card border rounded-lg p-3">
                              <Label className="text-sm text-muted-foreground">Shoulder</Label>
                              <p className="text-lg font-medium">18.5 inches</p>
                            </div>
                            <div className="bg-card border rounded-lg p-3">
                              <Label className="text-sm text-muted-foreground">Sleeve</Label>
                              <p className="text-lg font-medium">25.3 inches</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 p-3 bg-accent/10 rounded-lg">
                            <AlertCircle className="h-4 w-4 text-accent" />
                            <p className="text-sm">Accuracy: 95% - You can adjust these measurements if needed</p>
                          </div>

                          <div className="flex gap-3">
                            <Button className="flex-1 bg-accent hover:bg-accent/90">Use These Measurements</Button>
                            <Button variant="outline" className="flex-1 bg-transparent">
                              Adjust Values
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Confidence Score */}
              {analysisStep >= 5 && (
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Analysis Confidence</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Overall Accuracy</span>
                        <span className="text-sm font-medium">96%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Photo Quality</span>
                        <span className="text-green-600">Excellent</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Body Detection</span>
                        <span className="text-green-600">High Confidence</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Measurement Precision</span>
                        <span className="text-green-600">±0.5 inches</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
