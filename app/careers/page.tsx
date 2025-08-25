"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Users, DollarSign, Heart, Zap, ArrowRight, Star, Building, Award, Coffee, Wifi } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const jobOpenings = [
  {
    id: 1,
    title: "Operations Manager",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹12-18 LPA",
    description: "Join our engineering team to build cutting-edge educational technology platforms that impact thousands of students.",
    requirements: ["React.js, Node.js", "Cloud platforms (AWS/Azure)", "Database design", "Agile methodology"],
    posted: "2 days ago",
    urgent: true,
    remote: false
  },
  {
    id: 2,
    title: "Educational Content Designer",
    department: "Education",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹8-12 LPA",
    description: "Create engaging educational content and curriculum for our diverse range of technical courses.",
    requirements: ["Instructional design", "Technical writing", "Video production", "Learning management systems"],
    posted: "1 week ago",
    urgent: false,
    remote: true
  },
  {
    id: 3,
    title: "Business Development Associate",
    department: "Design",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "2-3 years",
    salary: "₹6-10 LPA",
    description: "Design intuitive and beautiful user experiences for our educational platforms and mobile applications.",
    requirements: ["Figma/Sketch", "User research", "Prototyping", "Design systems"],
    posted: "3 days ago",
    urgent: false,
    remote: false
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹5-8 LPA",
    description: "Drive our digital marketing initiatives to reach and engage students across various online channels.",
    requirements: ["SEO/SEM", "Social media marketing", "Content marketing", "Analytics tools"],
    posted: "5 days ago",
    urgent: true,
    remote: false
  },
  {
    id: 5,
    title: "Student Success Manager",
    department: "Student Services",
    location: "Delhi, India",
    type: "Full-time",
    experience: "1-2 years",
    salary: "₹4-6 LPA",
    description: "Support student journey from enrollment to placement, ensuring high satisfaction and success rates.",
    requirements: ["Communication skills", "CRM systems", "Data analysis", "Student counseling"],
    posted: "1 week ago",
    urgent: false,
    remote: false
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Pune, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹10-15 LPA",
    description: "Manage and optimize our cloud infrastructure to ensure scalable and reliable educational services.",
    requirements: ["Docker/Kubernetes", "CI/CD pipelines", "AWS/Azure", "Monitoring tools"],
    posted: "4 days ago",
    urgent: false,
    remote: false
  }
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Zap,
    title: "Learning & Development",
    description: "Continuous learning opportunities and skill development",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    icon: Users,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-competitive salary with performance bonuses",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Coffee,
    title: "Great Workplace",
    description: "Modern office spaces with free meals and snacks",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Wifi,
    title: "Tech & Tools",
    description: "Latest technology and tools to help you succeed",
    color: "bg-purple-50 text-purple-600"
  }
]

const companyStats = [
  { number: "50+", label: "Team Members", icon: Users },
  { number: "5+", label: "Office Locations", icon: Building },
  { number: "4.8★", label: "Employee Rating", icon: Star },
  { number: "95%", label: "Retention Rate", icon: Award }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Enhanced Hero Section with Backdrop Blur */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcmVlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Modern office workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-black/90 backdrop-blur-[2px]"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-32 h-32 bg-tz-bright-orange/5 rounded-full blur-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block mb-6"
            >
              <Badge className="bg-tz-bright-orange text-white px-6 py-2 text-lg font-bold rounded-full">
                🚀 We're Hiring!
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Join Our
              <motion.span 
                className="text-tz-bright-orange block"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255, 165, 0, 0.5)",
                    "0 0 40px rgba(255, 165, 0, 0.8)",
                    "0 0 20px rgba(255, 165, 0, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Mission
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-tz-cream mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Help us shape the future of education technology and empower the next generation of innovators
            </motion.p>

            {/* Company Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                    <stat.icon className="w-8 h-8 text-tz-bright-orange" />
                  </div>
                  <div className="text-3xl font-bold text-tz-bright-orange mb-1">{stat.number}</div>
                  <div className="text-tz-cream font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-tz-bright-orange hover:bg-tz-bright-orange/90 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-tz-bright-orange/25 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tz-dark-navy mb-6">
              Why Choose TechZnanie?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive and make a meaningful impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-16 h-16 ${benefit.color.split(' ')[0]} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className={`w-8 h-8 ${benefit.color.split(' ')[1]}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-tz-dark-navy mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Job Openings */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tz-dark-navy mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career with TechZnanie
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange"></div>
                  
                  <CardHeader className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl text-tz-dark-navy group-hover:text-tz-bright-orange transition-colors">
                            {job.title}
                          </CardTitle>
                          {job.urgent && (
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Badge className="bg-red-500 text-white text-xs">
                                🔥 Urgent
                              </Badge>
                            </motion.div>
                          )}
                          {job.remote && (
                            <Badge className="bg-green-500 text-white text-xs">
                              🌍 Remote
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-tz-bright-orange font-semibold text-lg">
                          {job.department}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {job.posted}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2 bg-tz-bright-orange/10 px-3 py-1 rounded-full text-tz-bright-orange font-semibold">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-tz-dark-navy mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-tz-bright-orange" />
                        Key Requirements:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, reqIndex) => (
                          <Badge 
                            key={reqIndex} 
                            variant="outline" 
                            className="text-xs hover:bg-tz-bright-orange hover:text-white transition-colors cursor-default"
                          >
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange hover:from-tz-dark-orange hover:to-tz-bright-orange text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
