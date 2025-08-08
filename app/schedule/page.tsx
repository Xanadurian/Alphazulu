"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, ChevronLeft, ChevronRight, Target, Info } from 'lucide-react'
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [step, setStep] = useState(1)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Target className="h-6 w-6" />
              <span className="text-xl font-bold">Precision Training</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="/courses" className="font-medium text-muted-foreground hover:text-foreground">
              Courses
            </Link>
            <Link href="/schedule" className="font-medium">
              Schedule
            </Link>
            <Link href="/about" className="font-medium text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link href="/contact" className="font-medium text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Book Your Training</h1>
              <p className="text-muted-foreground">
                Select a course, choose your preferred date, and complete your registration in a few simple steps.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Booking Process</h2>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`}></div>
                <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
                <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
              </div>
            </div>

            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Select a Course</CardTitle>
                  <CardDescription>Choose the training course you want to attend</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="beginner" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                      <TabsTrigger value="beginner">Beginner</TabsTrigger>
                      <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                      <TabsTrigger value="advanced">Advanced</TabsTrigger>
                    </TabsList>
                    <TabsContent value="beginner">
                      <div className="grid gap-4">
                        <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/firearms-safety.png"
                              alt="Firearms Safety"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">Firearms Safety Fundamentals</h3>
                            <p className="text-sm text-muted-foreground">4 hours | $99 per person</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Info className="h-4 w-4" />
                                    <span className="sr-only">Course details</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">
                                    Learn essential firearm safety rules, proper handling techniques, and basic marksmanship
                                    principles in a controlled environment.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <Button onClick={() => setStep(2)}>Select</Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/handgun-basics.png"
                              alt="Handgun Basics"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">Handgun Basics</h3>
                            <p className="text-sm text-muted-foreground">6 hours | $149 per person</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Info className="h-4 w-4" />
                                    <span className="sr-only">Course details</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">
                                    Master the fundamentals of handgun operation, proper grip, sight alignment, trigger control, and basic shooting techniques.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <Button onClick={() => setStep(2)}>Select</Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="Concealed Carry Permit"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">Concealed Carry Permit</h3>
                            <p className="text-sm text-muted-foreground">8 hours | $199 per person</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Info className="h-4 w-4" />
                                    <span className="sr-only">Course details</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">
                                    Complete the required training for your state's concealed carry permit application. Covers legal aspects, safety, and practical skills.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <Button onClick={() => setStep(2)}>Select</Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="intermediate">
                      <div className="grid gap-4">
                        <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="Defensive Pistol"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">Defensive Pistol</h3>
                            <p className="text-sm text-muted-foreground">8 hours | $249 per person</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Info className="h-4 w-4" />
                                    <span className="sr-only">Course details</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">
                                    Develop the skills needed for defensive handgun use including drawing from concealment, shooting from various positions, and tactical reloads.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <Button onClick={() => setStep(2)}>Select</Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="Tactical Shotgun"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">Tactical Shotgun</h3>
                            <p className="text-sm text-muted-foreground">6 hours | $199 per person</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Info className="h-4 w-4" />
                                    <span className="sr-only">Course details</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">
                                    Learn to effectively use a shotgun for home defense including loading techniques, patterning, and tactical movement with a shotgun.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <Button onClick={() => setStep(2)}>Select</Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="advanced">
                      <div className="grid gap-4">
                        <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="Advanced Tactical Training"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">Advanced Tactical Training</h3>
                            <p className="text-sm text-muted-foreground">16 hours (2 days) | $499 per person</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Info className="h-4 w-4" />
                                    <span className="sr-only">Course details</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">
                                    Experience high-stress shooting scenarios, force-on-force training, and advanced tactical movement. For experienced shooters only.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <Button onClick={() => setStep(2)}>Select</Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="Long Range Precision"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">Long Range Precision</h3>
                            <p className="text-sm text-muted-foreground">16 hours (2 days) | $599 per person</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Info className="h-4 w-4" />
                                    <span className="sr-only">Course details</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">
                                    Master the art of long-range shooting with instruction on ballistics, wind reading, range estimation, and precision rifle marksmanship.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <Button onClick={() => setStep(2)}>Select</Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Select Date & Time</CardTitle>
                  <CardDescription>Choose when you would like to attend the training</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="flex flex-col">
                      <Label htmlFor="date" className="mb-2">
                        Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className="w-full justify-start text-left font-normal"
                            id="date"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="time" className="mb-2">
                        Time Slot
                      </Label>
                      <Select>
                        <SelectTrigger id="time">
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9:00 AM - 1:00 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (2:00 PM - 6:00 PM)</SelectItem>
                          <SelectItem value="full-day">Full Day (9:00 AM - 5:00 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="participants" className="mb-2">
                        Number of Participants
                      </Label>
                      <Select defaultValue="1">
                        <SelectTrigger id="participants">
                          <SelectValue placeholder="Select number of participants" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3">3 People</SelectItem>
                          <SelectItem value="4">4 People</SelectItem>
                          <SelectItem value="5">5+ People (Group Rate)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Your Information</CardTitle>
                  <CardDescription>Complete your booking by providing your details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <Label htmlFor="first-name" className="mb-2">
                          First Name
                        </Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="flex flex-col">
                        <Label htmlFor="last-name" className="mb-2">
                          Last Name
                        </Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="email" className="mb-2">
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="phone" className="mb-2">
                        Phone Number
                      </Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="experience" className="mb-2">
                        Firearms Experience Level
                      </Label>
                      <Select>
                        <SelectTrigger id="experience">
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None (First Time)</SelectItem>
                          <SelectItem value="beginner">Beginner (Some Experience)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (Regular Shooter)</SelectItem>
                          <SelectItem value="advanced">Advanced (Experienced Shooter)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="font-medium">Booking Summary</h3>
                      <div className="bg-muted rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Course:</span>
                          <span className="font-medium">Firearms Safety Fundamentals</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span className="font-medium">{date ? format(date, "PPP") : "Not selected"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="font-medium">Morning (9:00 AM - 1:00 PM)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Participants:</span>
                          <span className="font-medium">1 Person</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-medium">
                          <span>Total:</span>
                          <span>$99.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button>Complete Booking</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </section>
      </main>
      <footer className="bg-background border-t">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6" />
                <span className="text-xl font-bold">Precision Training</span>
              </div>
              <p className="text-muted-foreground">
                Professional firearms training for civilians, law enforcement, and military personnel.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-muted-foreground hover:text-foreground">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-muted-foreground hover:text-foreground">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Range Road</p>
                <p>Anytown, USA 12345</p>
                <p className="mt-2">info@precisiontraining.com</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
            <div>
              <h3 className="font-medium mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">Subscribe to receive updates on new courses and special events.</p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Email address" className="max-w-[220px]" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Precision Training. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
