"use client"

import { useState } from "react"
import Link from "next/link"
import { Target, Calendar, BookOpen, User, Settings, CreditCard, Download, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarInitials } from "@/components/ui/avatar"

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const upcomingBookings = [
    {
      id: "BK001",
      course: "Firearms Safety Fundamentals",
      date: "2024-01-15",
      time: "9:00 AM - 1:00 PM",
      instructor: "John Smith",
      status: "confirmed"
    },
    {
      id: "BK002",
      course: "Handgun Basics",
      date: "2024-01-22",
      time: "9:00 AM - 3:00 PM",
      instructor: "Sarah Johnson",
      status: "confirmed"
    }
  ]

  const completedCourses = [
    {
      id: "C001",
      course: "Basic Firearm Safety",
      completedDate: "2023-12-10",
      instructor: "Mike Wilson",
      rating: 5,
      certificate: "CERT-001-2023"
    },
    {
      id: "C002",
      course: "Concealed Carry Permit",
      completedDate: "2023-11-15",
      instructor: "Lisa Davis",
      rating: 4,
      certificate: "CERT-002-2023"
    }
  ]

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
            <Link href="/schedule" className="font-medium text-muted-foreground hover:text-foreground">
              Schedule
            </Link>
            <Link href="/dashboard" className="font-medium">
              Dashboard
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
            <p className="text-muted-foreground">
              Manage your bookings and track your training progress
            </p>
          </div>
          <Link href="/schedule">
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Book New Course
            </Button>
          </Link>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Courses
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{upcomingBookings.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Next: Jan 15, 2024
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Courses
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{completedCourses.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Certificates earned
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Training Hours
                  </CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    Total hours completed
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Average Rating
                  </CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.5</div>
                  <p className="text-xs text-muted-foreground">
                    Course satisfaction
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Bookings</CardTitle>
                  <CardDescription>
                    Your scheduled training sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{booking.course}</p>
                          <p className="text-sm text-muted-foreground">
                            {booking.date} • {booking.time}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Instructor: {booking.instructor}
                          </p>
                        </div>
                        <Badge>{booking.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>
                    Your latest course completions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {completedCourses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{course.course}</p>
                          <p className="text-sm text-muted-foreground">
                            Completed: {course.completedDate}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < course.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Certificate
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Bookings</CardTitle>
                <CardDescription>
                  View and manage your course bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{booking.course}</h3>
                          <p className="text-muted-foreground">Booking ID: {booking.id}</p>
                        </div>
                        <Badge variant="default">{booking.status}</Badge>
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <p className="text-sm font-medium">Date & Time</p>
                          <p className="text-sm text-muted-foreground">
                            {booking.date}<br />
                            {booking.time}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Instructor</p>
                          <p className="text-sm text-muted-foreground">{booking.instructor}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Certificates</CardTitle>
                <CardDescription>
                  Download and view your course completion certificates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {completedCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">{course.course}</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed: {course.completedDate}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Certificate: {course.certificate}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < course.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Certificate
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your account information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-muted-foreground">john.doe@example.com</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Change Photo
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <input
                        type="tel"
                        defaultValue="(555) 123-4567"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                  
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
                <input type="email" placeholder="Email address" className="flex-1 px-3 py-2 border rounded-md text-sm" />
                <Button type="submit" size="sm">Subscribe</Button>
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
