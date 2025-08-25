"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "#" },
  ]

  const programs = [
    { name: "Computer Science Engineering", href: "/course/computer-science" },
    { name: "Electronics & Communication", href: "/course/electronics-communication" },
    { name: "Electrical & Electronics", href: "/course/electrical-electronics" },
    { name: "Mechanical Engineering", href: "/course/mechanical" },
    { name: "Civil Engineering", href: "/course/civil" },
    { name: "Management & Business", href: "/course/management" },
  ]

  const resources = [
    "Free Webinars",
    "Career Guide",
    "Salary Reports",
    "Interview Prep",
    "Coding Challenges",
    "Tech News",
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ]

  return (
    <footer className="bg-gradient-to-t from-[#0D1B2A]/95 to-tz-dark-navy/90 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tz-bright-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-tz-medium-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-modern relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 border-b border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Stay Updated with Tech Trends</h3>
              <p className="text-white/80 text-lg">
                Get the latest industry insights, career tips, and exclusive offers delivered to your inbox every week.
              </p>
              <div className="flex items-center space-x-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-white/80 ml-2">Trusted by 500+ professionals</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-tz-bright-orange"
                />
                <Button className="btn-primary px-8">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-white/60">No spam, unsubscribe at any time. We respect your privacy.</p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/techznanie%20png2-oOaToBOGCyM98fyvfygvFFEwoCVv5C.png"
                  alt="TechZnanie Innoversity"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                Empowering the next generation of tech professionals through innovative, industry-relevant education and
                comprehensive career support.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-tz-bright-orange flex-shrink-0" />
                  <span className="text-white/80 text-sm">
                    Plot no 117, Gowtaminagar, Vanastalipuram, Hyderabad, 500070
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-tz-bright-orange" />
                  <span className="text-white/80">+91-8919440316</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-tz-bright-orange" />
                  <span className="text-white/80">info@techznanieinnoversity.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-tz-cream">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-tz-bright-orange transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-tz-cream">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <Link
                      href={program.href}
                      className="text-white/80 hover:text-tz-bright-orange transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-tz-cream">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-tz-bright-orange transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">© 2025 TechZnanie Innoversity. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-white/60 hover:text-tz-bright-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-tz-bright-orange text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-tz-bright-orange text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-tz-bright-orange text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
