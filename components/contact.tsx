"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: "Plot no 117, Gowtaminagar, Vanastalipuram, Hyderabad, 500070",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-8919440316",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@techznanieinnoversity.com",
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
      action: "Schedule Visit"
    }
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: "Book Free Demo",
      description: "Experience our teaching methodology",
      color: "bg-tz-bright-orange"
    },
    {
      icon: MessageCircle,
      title: "Career Counseling",
      description: "Get personalized career guidance",
      color: "bg-tz-medium-blue"
    },
    {
      icon: Phone,
      title: "Instant Callback",
      description: "We'll call you within 30 minutes",
      color: "bg-tz-light-blue"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-modern">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-tz-dark-orange text-white mb-6 px-6 py-2 text-sm font-semibold">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-tz-dark-navy mb-6">
            Ready to Start Your
            <span className="text-gradient block">Learning Journey?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs? Want to speak with our career counselors? 
            We're here to help you make the right choice for your future.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer"
            >
              <Card className="card-modern text-center group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-tz-dark-navy mb-2">{action.title}</h3>
                  <p className="text-gray-600">{action.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-tz-dark-navy mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="card-modern p-6 hover:shadow-hover transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-tz-bright-orange rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-tz-dark-navy mb-2">{info.title}</h4>
                          <p className="text-gray-600 mb-3 whitespace-pre-line">{info.details}</p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-tz-bright-orange text-tz-bright-orange hover:bg-tz-bright-orange hover:text-white"
                          >
                            {info.action}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Campus Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-modern"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="TechZnanie Campus"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tz-dark-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold">Our Innovation Campus</span>
                </div>
                <p className="text-sm opacity-90">State-of-the-art facilities in Hyderabad</p>
                <p className="text-xs opacity-75">Modern classrooms • Tech labs • Student lounge</p>
              </div>
            </motion.div>
          </motion.div>


          

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-modern">
              <CardHeader className="gradient-secondary text-white rounded-t-2xl">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-white/90">We'll respond within 2 hours during business hours</p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-tz-dark-navy font-semibold">
                      First Name *
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      className="form-input" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-tz-dark-navy font-semibold">
                      Last Name *
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      className="form-input" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-tz-dark-navy font-semibold">
                    Email Address *
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="form-input" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-tz-dark-navy font-semibold">
                    Phone Number *
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="form-input" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="program" className="text-tz-dark-navy font-semibold">
                    Interested Program
                  </Label>
                  <select className="form-input">
                    <option value="">Select a program</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="datascience">Data Science & Analytics</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="cloud">Cloud Computing & DevOps</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-tz-dark-navy font-semibold">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your career goals and any questions you have..."
                    rows={5}
                    className="form-textarea"
                  />
                </div>
                
                <Button className="w-full btn-primary text-lg py-4">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
