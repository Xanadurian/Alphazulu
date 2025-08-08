import Link from "next/link"
import Image from "next/image"
import { Clock, Calendar, Filter, ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
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
        <section className="bg-muted py-12">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Training Courses</h1>
              <p className="text-muted-foreground">
                Browse our comprehensive selection of firearms training courses designed for all skill levels.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full md:w-auto">
              <Input type="search" placeholder="Search courses..." className="max-w-sm" />
            </div>
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-1">
                    <Filter className="h-4 w-4" />
                    Skill Level
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuCheckboxItem checked>All Levels</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Beginner</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Intermediate</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Advanced</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-1">
                    <Filter className="h-4 w-4" />
                    Course Type
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuCheckboxItem checked>All Types</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Handgun</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Rifle</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Shotgun</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Tactical</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Certification</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-1">
                    <Filter className="h-4 w-4" />
                    Duration
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuCheckboxItem checked>Any Duration</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Half Day (1-4 hours)</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Full Day (5-8 hours)</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Multi-Day</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Beginner Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Firearms Safety Fundamentals</CardTitle>
                  <Badge>Beginner</Badge>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Learn essential firearm safety rules, proper handling techniques, and basic marksmanship principles in a
                  controlled environment.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>4 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Available weekly</span>
                </div>
                <div className="text-sm font-medium mt-2">$99 per person</div>
              </CardContent>
              <CardFooter>
                <Link href="/schedule?course=firearms-safety-fundamentals" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Handgun Basics</CardTitle>
                  <Badge>Beginner</Badge>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Master the fundamentals of handgun operation, proper grip, sight alignment, trigger control, and basic shooting
                  techniques.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>6 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Weekends</span>
                </div>
                <div className="text-sm font-medium mt-2">$149 per person</div>
              </CardContent>
              <CardFooter>
                <Link href="/schedule?course=handgun-basics" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Concealed Carry Permit</CardTitle>
                  <Badge>Beginner</Badge>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Complete the required training for your state's concealed carry permit application. Covers legal aspects,
                  safety, and practical skills.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>8 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Monthly sessions</span>
                </div>
                <div className="text-sm font-medium mt-2">$199 per person</div>
              </CardContent>
              <CardFooter>
                <Link href="/schedule?course=concealed-carry-permit" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-6">Intermediate Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Defensive Pistol</CardTitle>
                  <Badge variant="secondary">Intermediate</Badge>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Develop the skills needed for defensive handgun use including drawing from concealment, shooting from various
                  positions, and tactical reloads.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>8 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Bi-weekly</span>
                </div>
                <div className="text-sm font-medium mt-2">$249 per person</div>
              </CardContent>
              <CardFooter>
                <Link href="/schedule?course=defensive-pistol" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Tactical Shotgun</CardTitle>
                  <Badge variant="secondary">Intermediate</Badge>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Learn to effectively use a shotgun for home defense including loading techniques, patterning, and tactical
                  movement with a shotgun.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>6 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Monthly</span>
                </div>
                <div className="text-sm font-medium mt-2">$199 per person</div>
              </CardContent>
              <CardFooter>
                <Link href="/schedule?course=tactical-shotgun" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Rifle Fundamentals</CardTitle>
                  <Badge variant="secondary">Intermediate</Badge>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Develop proficiency with modern sporting rifles including proper stance, sight picture, breathing control, and
                  effective engagement at various distances.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>8 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Twice monthly</span>
                </div>
                <div className="text-sm font-medium mt-2">$249 per person</div>
              </CardContent>
              <CardFooter>
                <Link href="/schedule?course=rifle-fundamentals" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-6">Advanced Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Advanced Tactical Training</CardTitle>
                  <Badge variant="destructive">Advanced</Badge>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Experience high-stress shooting scenarios, force-on-force training, and advanced tactical movement. For
                  experienced shooters only.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>16 hours (2 days)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Quarterly</span>
                </div>
                <div className="text-sm font-medium mt-2">$499 per person</div>
              </CardContent>
              <CardFooter>
                <Link href="/schedule?course=advanced-tactical-training" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Long Range Precision</CardTitle>
                  <Badge variant="destructive">Advanced</Badge>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Master the art of long-range shooting with instruction on ballistics, wind reading, range estimation, and
                  precision rifle marksmanship.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>16 hours (2 days)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Quarterly</span>
                </div>
                <div className="text-sm font-medium mt-2">$599 per person</div>
              </CardContent>
              <CardFooter>
                <Link href="/schedule?course=long-range-precision" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Instructor Certification</CardTitle>
                  <Badge variant="destructive">Advanced</Badge>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive training program for those who wish to become certified firearms instructors. Includes teaching
                  methodologies and advanced skills.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>40 hours (5 days)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Twice yearly</span>
                </div>
                <div className="text-sm font-medium mt-2">$999 per person</div>
              </CardContent>
              <CardFooter>
                <Link href="/schedule?course=instructor-certification" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
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
