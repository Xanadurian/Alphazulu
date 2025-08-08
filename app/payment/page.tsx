"use client"

import { useState } from "react"
import Link from "next/link"
import { Target, CreditCard, Lock, ArrowLeft, Check } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setPaymentComplete(true)
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Payment Successful!</CardTitle>
            <CardDescription>
              Your booking has been confirmed. You will receive a confirmation email shortly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span>Booking ID:</span>
                <span className="font-medium">BK001234</span>
              </div>
              <div className="flex justify-between">
                <span>Course:</span>
                <span className="font-medium">Firearms Safety Fundamentals</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-medium">January 15, 2024</span>
              </div>
              <div className="flex justify-between">
                <span>Amount Paid:</span>
                <span className="font-medium">$99.00</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
              <Link href="/dashboard" className="flex-1">
                <Button className="w-full">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/50">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center">
          <Link href="/schedule" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Booking
          </Link>
          <div className="flex items-center gap-2 ml-8">
            <Target className="h-6 w-6" />
            <span className="text-xl font-bold">Precision Training</span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Secure Payment
                </CardTitle>
                <CardDescription>
                  Your payment information is encrypted and secure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Payment Method</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="h-12 border-2 border-primary"
                      >
                        <CreditCard className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="h-12"
                      >
                        PayPal
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="h-12"
                      >
                        Apple Pay
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Card Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Billing Address</h3>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="Anytown"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="tx">Texas</SelectItem>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="fl">Florida</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input
                        id="zip"
                        placeholder="12345"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing Payment..." : "Complete Payment"}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <Lock className="inline h-4 w-4 mr-1" />
                    Your payment is secured with 256-bit SSL encryption
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Course:</span>
                    <span className="font-medium">Firearms Safety Fundamentals</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">January 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Participants:</span>
                    <span className="font-medium">1 Person</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Course Fee:</span>
                    <span>$99.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span>$2.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>$8.16</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>$110.15</span>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-medium mb-2">What's Included:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Professional instruction</li>
                    <li>• Safety equipment provided</li>
                    <li>• Course materials</li>
                    <li>• Certificate of completion</li>
                    <li>• Range fees included</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Cancellation Policy</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Free cancellation up to 48 hours before the course. 
                    50% refund for cancellations within 24-48 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
