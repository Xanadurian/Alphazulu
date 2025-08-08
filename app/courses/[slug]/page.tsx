import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Users, Target, Shield, Award, Star, ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database or API
const courseData = {
  "firearms-safety-fundamentals": {
    id: "firearms-safety-fundamentals",
    title: "Firearms Safety Fundamentals",
    description: "Perfect for first-time firearm owners",
    longDescription: "This comprehensive course is designed for individuals who are new to firearms or want to refresh their knowledge of fundamental safety principles. You'll learn the essential rules of firearm safety, proper handling techniques, and basic marksmanship skills in a controlled, supportive environment.",
    level: "Beginner",
    duration: "4 hours",
    price: 99,
    capacity: 12,
    enrolled: 8,
    rating: 4.9,
    reviews: 127,
    image: "/placeholder-04yhc.png",
    instructor: "John Smith",
    instructorBio: "Certified NRA instructor with 15 years of experience in firearms training and safety education.",
    schedule: [
      { date: "2024-01-15", time: "9:00 AM - 1:00 PM", available: true },
      { date: "2024-01-22", time: "9:00 AM - 1:00 PM", available: true },
      { date: "2024-01-29", time: "2:00 PM - 6:00 PM", available: false }
    ],
    curriculum: [
      "Fundamental firearm safety rules",
      "Proper handling and storage",
      "Basic anatomy of firearms",
      "Loading and unloading procedures",
      "Range safety protocols",
      "Basic marksmanship principles",
      "Legal responsibilities",
      "Hands-on practice session"
    ],
    requirements: [
      "Must be 18 years or older",
      "Valid government-issued ID required",
      "No prior experience necessary",
      "Comfortable clothing recommended"
    ],
    included: [
      "Professional instruction",
      "Safety equipment provided",
      "Course materials and handbook",
      "Certificate of completion",
      "Range fees included",
      "Light refreshments"
    ]
  },
  "handgun-basics": {
    id: "handgun-basics",
    title: "Handgun Basics",
    description: "Introduction to handgun operation and marksmanship",
    longDescription: "Build upon your foundational knowledge with this comprehensive handgun course. Learn proper grip, stance, sight alignment, and trigger control while developing accuracy and confidence with handgun operation.",
    level: "Beginner",
    duration: "6 hours",
    price: 149,
    capacity: 10,
    enrolled: 7,
    rating: 4.8,
    reviews: 89,
    image: "/handgun-training.png",
    instructor: "Sarah Johnson",
    instructorBio: "Former law enforcement officer with specialized training in handgun instruction and defensive tactics.",
    schedule: [
      { date: "2024-01-16", time: "9:00 AM - 3:00 PM", available: true },
      { date: "2024-01-23", time: "9:00 AM - 3:00 PM", available: true },
      { date: "2024-01-30", time: "1:00 PM - 7:00 PM", available: true }
    ],
    curriculum: [
      "Handgun types and operation",
      "Proper grip and stance",
      "Sight alignment and picture",
      "Trigger control techniques",
      "Loading and reloading",
      "Malfunction clearing",
      "Accuracy drills",
      "Live fire exercises"
    ],
    requirements: [
      "Must be 21 years or older",
      "Valid government-issued ID required",
      "Basic firearms safety knowledge recommended",
      "Eye and ear protection provided"
    ],
    included: [
      "Expert instruction",
      "Handgun rental included",
      "Ammunition provided",
      "Safety equipment",
      "Course certificate",
      "Range fees"
    ]
  }
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courseData[params.slug as keyof typeof courseData]

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

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
            <Link href="/courses" className="font-medium">
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
        <section className="container py-8">
          <div className="mb-6">
            <Link href="/courses" className="inline-flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge>{course.level}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviews} reviews)</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">{course.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
                
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Max {course.capacity} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Certificate included</span>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">{course.longDescription}</p>
              </div>

              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curriculum" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Learn</CardTitle>
                      <CardDescription>
                        Comprehensive curriculum designed to build your skills progressively
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {course.curriculum.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="bg-primary/10 rounded-full p-1 mt-1">
                              <Target className="h-3 w-3 text-primary" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="instructor" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meet Your Instructor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">
                            {course.instructor.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{course.instructor}</h3>
                          <p className="text-muted-foreground">{course.instructorBio}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="requirements" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Requirements
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {course.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span className="text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          What's Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {course.included.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-green-600">✓</span>
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Student Reviews</CardTitle>
                      <CardDescription>
                        See what our students have to say about this course
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="border-b pb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="font-medium">Mike R.</span>
                            <span className="text-sm text-muted-foreground">2 weeks ago</span>
                          </div>
                          <p className="text-sm">
                            "Excellent course for beginners. The instructor was patient and knowledgeable. 
                            I feel much more confident handling firearms safely now."
                          </p>
                        </div>
                        <div className="border-b pb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="font-medium">Jennifer L.</span>
                            <span className="text-sm text-muted-foreground">1 month ago</span>
                          </div>
                          <p className="text-sm">
                            "Great introduction to firearms safety. The hands-on practice was invaluable. 
                            Highly recommend for anyone new to firearms."
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[1, 2, 3, 4].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                            <span className="font-medium">David K.</span>
                            <span className="text-sm text-muted-foreground">1 month ago</span>
                          </div>
                          <p className="text-sm">
                            "Good course overall. Could use a bit more range time, but the safety instruction was thorough."
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">${course.price}</CardTitle>
                  <CardDescription>Per person</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Enrollment</span>
                      <span>{course.enrolled}/{course.capacity} students</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Available Sessions</h4>
                    {course.schedule.map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{session.date}</div>
                          <div className="text-sm text-muted-foreground">{session.time}</div>
                        </div>
                        <Badge variant={session.available ? "default" : "secondary"}>
                          {session.available ? "Available" : "Full"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={`/schedule?course=${course.id}`} className="w-full">
                    <Button className="w-full" size="lg">
                      Book This Course
                    </Button>
                  </Link>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    Free cancellation up to 48 hours before class
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Have questions about this course? Our team is here to help.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <span>📞</span>
                      <span className="ml-2">(555) 123-4567</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <span>✉️</span>
                      <span className="ml-2">info@precisiontraining.com</span>
                    </Button>
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
