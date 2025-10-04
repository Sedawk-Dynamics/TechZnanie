"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  Users,
  Play,
  BookOpen,
  Award,
  MessageSquare,
  ChevronRight,
  Search,
  Filter,
  Linkedin,
  Download,
  Eye,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function WebinarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const upcomingWebinars = [
    {
      id: 1,
      title: "Roadmap to Full Stack Developer",
      date: "5th Nov 2025",
      time: "7:00 PM IST",
      speaker: {
        name: "Ankit Verma",
        designation: "Ex-Amazon, Full Stack Architect",
        image: "/placeholder.svg?height=80&width=80&text=AV",
        linkedin: "#",
      },
      description:
        "Learn the essential roadmap to become a full stack developer in 2025, from basics to advanced projects.",
      category: "Web Development",
      attendees: 245,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Generative AI for Beginners",
      date: "12th Nov 2025",
      time: "6:30 PM IST",
      speaker: {
        name: "Dr. Nisha Reddy",
        designation: "AI Researcher, Microsoft",
        image: "/placeholder.svg?height=80&width=80&text=NR",
        linkedin: "#",
      },
      description: "A hands-on workshop on how to use Generative AI tools for coding, design & automation.",
      category: "AI & ML",
      attendees: 312,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Mastering React.js in 2025",
      date: "18th Nov 2025",
      time: "7:30 PM IST",
      speaker: {
        name: "Rajesh Kumar",
        designation: "Senior Frontend Developer, Google",
        image: "/placeholder.svg?height=80&width=80&text=RK",
        linkedin: "#",
      },
      description: "Deep dive into React 19 features, best practices, and building production-ready applications.",
      category: "Web Development",
      attendees: 189,
      status: "upcoming",
    },
    {
      id: 4,
      title: "Career Success in Tech Industry",
      date: "25th Nov 2025",
      time: "6:00 PM IST",
      speaker: {
        name: "Priya Sharma",
        designation: "HR Director, TCS",
        image: "/placeholder.svg?height=80&width=80&text=PS",
        linkedin: "#",
      },
      description: "Learn how to crack your first interview and build a successful career in technology.",
      category: "Career Skills",
      attendees: 421,
      status: "upcoming",
    },
  ]

  const pastWebinars = [
    {
      id: 1,
      title: "Introduction to Generative AI",
      category: "AI & ML",
      speaker: "Dr. Nisha Reddy",
      duration: "50 min",
      views: 1240,
      thumbnail: "/placeholder.svg?height=200&width=350&text=Gen+AI",
      isPremium: false,
      date: "Oct 15, 2025",
    },
    {
      id: 2,
      title: "Machine Learning for Beginners",
      category: "AI & ML",
      speaker: "Arun Patel",
      duration: "1h 20min",
      views: 890,
      thumbnail: "/placeholder.svg?height=200&width=350&text=ML+Basics",
      isPremium: true,
      date: "Oct 8, 2025",
    },
    {
      id: 3,
      title: "React.js Crash Course",
      category: "Web Development",
      speaker: "Rajesh Kumar",
      duration: "45 min",
      views: 2150,
      thumbnail: "/placeholder.svg?height=200&width=350&text=React",
      isPremium: false,
      date: "Oct 1, 2025",
    },
    {
      id: 4,
      title: "Building Scalable Web Apps",
      category: "Web Development",
      speaker: "Ankit Verma",
      duration: "1h 15min",
      views: 1560,
      thumbnail: "/placeholder.svg?height=200&width=350&text=Scalable+Apps",
      isPremium: true,
      date: "Sep 24, 2025",
    },
    {
      id: 5,
      title: "How to Crack Your First Interview",
      category: "Career Skills",
      speaker: "Priya Sharma",
      duration: "40 min",
      views: 3420,
      thumbnail: "/placeholder.svg?height=200&width=350&text=Interview+Tips",
      isPremium: false,
      date: "Sep 17, 2025",
    },
    {
      id: 6,
      title: "Resume & LinkedIn Masterclass",
      category: "Career Skills",
      speaker: "Vikram Singh",
      duration: "55 min",
      views: 2780,
      thumbnail: "/placeholder.svg?height=200&width=350&text=Resume+Guide",
      isPremium: true,
      date: "Sep 10, 2025",
    },
    {
      id: 7,
      title: "IoT & Embedded Systems Fundamentals",
      category: "Embedded Systems",
      speaker: "Dr. Suresh Reddy",
      duration: "1h 10min",
      views: 670,
      thumbnail: "/placeholder.svg?height=200&width=350&text=IoT+Basics",
      isPremium: false,
      date: "Sep 3, 2025",
    },
    {
      id: 8,
      title: "Industry 4.0 and Smart Manufacturing",
      category: "Industry Insights",
      speaker: "Meera Gupta",
      duration: "50 min",
      views: 890,
      thumbnail: "/placeholder.svg?height=200&width=350&text=Industry+4.0",
      isPremium: true,
      date: "Aug 27, 2025",
    },
  ]

  const categories = ["all", "AI & ML", "Web Development", "Embedded Systems", "Career Skills", "Industry Insights"]

  const filteredPastWebinars = pastWebinars.filter((webinar) => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || webinar.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const benefits = [
    {
      icon: Users,
      title: "Insider Tips from Top Professionals",
      description: "Learn directly from industry experts and experienced mentors",
    },
    {
      icon: BookOpen,
      title: "Hands-on Demonstrations",
      description: "Practical sessions on latest tools & frameworks",
    },
    {
      icon: Play,
      title: "Access to Past Recordings",
      description: "Watch recorded webinars anytime at your convenience",
    },
    {
      icon: MessageSquare,
      title: "Interactive Q&A Sessions",
      description: "Get your questions answered by experts in real-time",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1920&text=Webinar+Background"
            alt="Webinars Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tz-dark-navy/95 via-tz-medium-blue/90 to-tz-dark-navy/95"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tz-bright-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-tz-light-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Badge className="mb-6 bg-tz-bright-orange/20 text-tz-bright-orange border-tz-bright-orange/30 px-6 py-2 text-sm">
              Learn from Industry Experts
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-tz-cream to-white bg-clip-text text-transparent">
              Free Webinars & Expert Workshops
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              At TechZnanie Innoversity, learning doesn't stop in the classroom. Our free webinars and hands-on
              workshops bring industry experts, real-world case studies, and trending topics directly to you — live and
              interactive.
            </p>

            <Button className="btn-primary text-lg px-8 py-6 group">
              Register for Upcoming Webinar
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of learners who are upgrading their skills with our expert-led sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-tz-bright-orange/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-tz-bright-orange to-tz-dark-orange rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Webinars</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Register now and secure your spot in our upcoming expert-led sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-tz-bright-orange/10 text-tz-bright-orange border-tz-bright-orange/20">
                      {webinar.category}
                    </Badge>
                    <Badge className="bg-green-50 text-green-600 border-green-200">Upcoming</Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-tz-bright-orange transition-colors">
                    {webinar.title}
                  </h3>

                  <div className="flex items-center space-x-6 mb-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{webinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{webinar.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{webinar.attendees} registered</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{webinar.description}</p>

                  <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
                    <img
                      src={webinar.speaker.image || "/placeholder.svg"}
                      alt={webinar.speaker.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-lg">{webinar.speaker.name}</p>
                      <p className="text-sm text-gray-600">{webinar.speaker.designation}</p>
                    </div>
                    <a
                      href={webinar.speaker.linkedin}
                      className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                  </div>

                  <Button className="w-full btn-primary group/btn">
                    Register Now
                    <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Webinars Library</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Catch up anytime! Access our recorded webinars across various categories
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg border-gray-300 focus:border-tz-bright-orange"
              />
            </div>
            <div className="relative md:w-64">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-6 text-lg border border-gray-300 rounded-xl focus:outline-none focus:border-tz-bright-orange appearance-none bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Past Webinars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={webinar.thumbnail || "/placeholder.svg"}
                    alt={webinar.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-tz-bright-orange rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      {webinar.isPremium ? (
                        <Lock className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge
                      className={
                        webinar.isPremium ? "bg-yellow-500 text-white border-0" : "bg-green-500 text-white border-0"
                      }
                    >
                      {webinar.isPremium ? "Premium" : "Free"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-black/70 text-white border-0">{webinar.duration}</Badge>
                  </div>
                </div>

                <div className="p-4">
                  <Badge className="mb-2 bg-tz-bright-orange/10 text-tz-bright-orange border-tz-bright-orange/20 text-xs">
                    {webinar.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-tz-bright-orange transition-colors line-clamp-2">
                    {webinar.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{webinar.speaker}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{webinar.views.toLocaleString()} views</span>
                    </div>
                    <span>{webinar.date}</span>
                  </div>

                  <Button
                    className={
                      webinar.isPremium ? "w-full bg-yellow-500 hover:bg-yellow-600 text-white" : "w-full btn-primary"
                    }
                  >
                    {webinar.isPremium ? (
                      <>
                        <Lock className="mr-2 w-4 h-4" />
                        Access Premium
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 w-4 h-4" />
                        Watch Free
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPastWebinars.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-gray-500 text-lg">No webinars found. Try adjusting your search or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section with Certificates */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1920&text=Certificate+Background"
            alt="Certificate Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tz-dark-navy/95 to-tz-medium-blue/90"></div>
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="inline-block p-4 bg-tz-bright-orange/20 rounded-2xl mb-6">
              <Award className="w-16 h-16 text-tz-bright-orange" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Certified for Your Participation</h2>

            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Attend our webinars and receive an official Certificate of Participation. Showcase your commitment to
              continuous learning and add it to your resume or LinkedIn profile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-6">
                <Download className="mr-2 w-5 h-5" />
                Download Sample Certificate
              </Button>
              <Button className="bg-white text-tz-dark-navy hover:bg-gray-100 text-lg px-8 py-6">
                View All Benefits
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of professionals who are advancing their careers with TechZnanie Innoversity
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-6">
                Register for Next Webinar
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button asChild variant="outline" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
