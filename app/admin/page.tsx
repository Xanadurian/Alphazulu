"use client"

import { useState } from "react"
import Link from "next/link"
import { Target, Users, Calendar, DollarSign, BookOpen, Settings, Plus, Search, Filter, MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const bookings = [
    {
      id: "BK001",
      student: "John Doe",
      course: "Firearms Safety Fundamentals",
      date: "2024-01-15",
      time: "9:00 AM",
      status: "confirmed",
      amount: "$99.00"
    },
    {
      id: "BK002",
      student: "Sarah Smith",
      course: "Defensive Pistol",
      date: "2024-01-16",
      time: "2:00 PM",
      status: "pending",
      amount: "$249.00"
    },
    {
      id: "BK003",
      student: "Mike Johnson",
      course: "Concealed Carry Permit",
      date: "2024-01-18",
      time: "9:00 AM",
      status: "confirmed",
      amount: "$199.00"
    }
  ]

  const courses = [
    {
      id: "C001",
      name: "Firearms Safety Fundamentals",
      level: "Beginner",
      duration: "4 hours",
      price: "$99",
      enrolled: 24,
      capacity: 30
    },
    {
      id: "C002",
      name: "Defensive Pistol",
      level: "Intermediate",
      duration: "8 hours",
      price: "$249",
      enrolled: 18,
      capacity: 20
    },
    {
      id: "C003",
      name: "Advanced Tactical Training",
      level: "Advanced",
      duration: "16 hours",
      price: "$499",
      enrolled: 12,
      capacity: 15
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Target className="h-6 w-6" />
              <span className="text-xl font-bold">Precision Training</span>
            </Link>
            <Badge variant="secondary" className="ml-2">Admin</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/admin" className="font-medium">
              Dashboard
            </Link>
            <Link href="/admin/bookings" className="font-medium text-muted-foreground hover:text-foreground">
              Bookings
            </Link>
            <Link href="/admin/courses" className="font-medium text-muted-foreground hover:text-foreground">
              Courses
            </Link>
            <Link href="/admin/users" className="font-medium text-muted-foreground hover:text-foreground">
              Users
            </Link>
            <Link href="/admin/settings" className="font-medium text-muted-foreground hover:text-foreground">
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                View Site
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your training facility operations
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Quick Actions
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,547</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Bookings
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">54</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Students
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-xs text-muted-foreground">
                    +8.2% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Courses
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    +2 new this month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>
                    Latest course bookings from students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{booking.student}</p>
                          <p className="text-sm text-muted-foreground">
                            {booking.course}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{booking.amount}</p>
                          <Badge 
                            variant={booking.status === "confirmed" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Performance</CardTitle>
                  <CardDescription>
                    Enrollment status for active courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.slice(0, 3).map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{course.name}</p>
                          <span className="text-sm text-muted-foreground">
                            {course.enrolled}/{course.capacity}
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Bookings Management</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Booking
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search bookings..." className="pl-8" />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>{booking.student}</TableCell>
                      <TableCell>{booking.course}</TableCell>
                      <TableCell>
                        {booking.date} at {booking.time}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={booking.status === "confirmed" ? "default" : "secondary"}
                        >
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{booking.amount}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Booking
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Cancel Booking
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Course Management</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Course
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardDescription>
                      {course.duration} • {course.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Enrollment</span>
                          <span className="text-sm text-muted-foreground">
                            {course.enrolled}/{course.capacity}
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">User Management</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Registered Users</CardTitle>
                <CardDescription>
                  Manage student accounts and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  User management interface would be implemented here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
