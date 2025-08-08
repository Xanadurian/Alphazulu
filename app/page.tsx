import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Shield, Target, Users, Award, ChevronRight, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="h-6 w-6" />
            <span className="text-xl font-bold">Precision Training</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/courses" className="font-medium text-muted-foreground hover:text-foreground">
              Courses
            </Link>
            <Link href="/schedule" className="font-medium text-muted-foreground hover:text-foreground">
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
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/indoor-shooting-range.png"
              alt="Firearms Training Facility"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-36 lg:py-48">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Professional Firearms Training for All Skill Levels
              </h1>
              <p className="text-lg text-gray-200">
                Learn proper handling, safety, and marksmanship from certified instructors in a controlled environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Courses
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm">
                    Book Training
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose Our Training Facility</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive firearms training with a focus on safety, proper technique, and confidence building.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="space-y-1">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Safety First</CardTitle>
                <CardDescription>
                  Our instructors emphasize proper safety protocols and responsible firearm handling at all times.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Certified Instructors</CardTitle>
                <CardDescription>
                  Learn from professionals with extensive experience in law enforcement, military, and competitive shooting.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Small Class Sizes</CardTitle>
                <CardDescription>
                  We maintain low student-to-instructor ratios to ensure personalized attention and feedback.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Featured Courses</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Browse our most popular training programs designed for various skill levels and interests.
              </p>
            </div>
            <Tabs defaultValue="beginner" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
              <TabsContent value="beginner">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Firearms Safety Fundamentals</CardTitle>
                      <CardDescription>Perfect for first-time firearm owners</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/placeholder-04yhc.png"
                        alt="Firearms Safety Class"
                        width={400}
                        height={200}
                        className="rounded-md object-cover mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>4 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Available weekly</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/firearms-safety-fundamentals" className="w-full">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Handgun Basics</CardTitle>
                      <CardDescription>Introduction to handgun operation and marksmanship</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/handgun-training.png"
                        alt="Handgun Training"
                        width={400}
                        height={200}
                        className="rounded-md object-cover mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>6 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Weekends</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/handgun-basics" className="w-full">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Concealed Carry Permit</CardTitle>
                      <CardDescription>State-approved certification course</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/concealed-carry-class.png"
                        alt="Concealed Carry Class"
                        width={400}
                        height={200}
                        className="rounded-md object-cover mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>8 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Monthly sessions</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/concealed-carry-permit" className="w-full">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="intermediate">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Defensive Pistol</CardTitle>
                      <CardDescription>Practical self-defense techniques</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/defensive-pistol-training.png"
                        alt="Defensive Pistol Training"
                        width={400}
                        height={200}
                        className="rounded-md object-cover mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>8 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Bi-weekly</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/defensive-pistol" className="w-full">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Tactical Shotgun</CardTitle>
                      <CardDescription>Home defense and tactical applications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/placeholder-hk9w4.png"
                        alt="Tactical Shotgun Training"
                        width={400}
                        height={200}
                        className="rounded-md object-cover mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>6 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Monthly</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/tactical-shotgun" className="w-full">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Rifle Fundamentals</CardTitle>
                      <CardDescription>Precision shooting with modern sporting rifles</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/rifle-training.png"
                        alt="Rifle Training"
                        width={400}
                        height={200}
                        className="rounded-md object-cover mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>8 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Twice monthly</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/rifle-fundamentals" className="w-full">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="advanced">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced Tactical Training</CardTitle>
                      <CardDescription>Dynamic shooting scenarios and stress training</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/advanced-tactical-shooting.png"
                        alt="Advanced Tactical Training"
                        width={400}
                        height={200}
                        className="rounded-md object-cover mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>16 hours (2 days)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Quarterly</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/advanced-tactical-training" className="w-full">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Long Range Precision</CardTitle>
                      <CardDescription>Precision shooting at extended distances</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/placeholder-o7106.png"
                        alt="Long Range Precision Shooting"
                        width={400}
                        height={200}
                        className="rounded-md object-cover mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>16 hours (2 days)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Quarterly</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/long-range-precision" className="w-full">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Instructor Certification</CardTitle>
                      <CardDescription>Become a certified firearms instructor</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/firearms-instructor-certification.png"
                        alt="Instructor Certification"
                        width={400}
                        height={200}
                        className="rounded-md object-cover mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>40 hours (5 days)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Twice yearly</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/instructor-certification" className="w-full">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            <div className="text-center mt-10">
              <Link href="/courses">
                <Button variant="outline" size="lg" className="gap-2">
                  View All Courses
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Book Your Training Session</h2>
              <p className="text-muted-foreground mb-6">
                Our online booking system makes it easy to schedule your training sessions. Choose from available dates, select
                your preferred course, and secure your spot with a deposit.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Flexible scheduling</span> - Choose from multiple dates and times
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Easy registration</span> - Complete your booking in minutes
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Secure payment</span> - Pay deposits or full amounts online
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/schedule">
                  <Button size="lg">Schedule Now</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/firearms-training-calendar.png"
                alt="Booking Calendar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Testimonials</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Hear what our clients have to say about their training experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mb-4">
                    "As a first-time gun owner, I was nervous about handling firearms. The instructors were patient,
                    knowledgeable, and made safety the top priority. I now feel confident in my abilities."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                      <span className="font-medium text-primary">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">John D.</p>
                      <p className="text-sm text-muted-foreground">Firearms Safety Fundamentals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mb-4">
                    "The defensive pistol course was excellent. The instructors created realistic scenarios that helped me
                    understand how to respond in high-stress situations. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                      <span className="font-medium text-primary">SM</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Defensive Pistol Course</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mb-4">
                    "I've taken courses at several facilities, and this one stands out. The instructors are true professionals
                    with real-world experience. The facility is top-notch with modern equipment."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                      <span className="font-medium text-primary">RB</span>
                    </div>
                    <div>
                      <p className="font-medium">Robert B.</p>
                      <p className="text-sm text-muted-foreground">Advanced Tactical Training</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
