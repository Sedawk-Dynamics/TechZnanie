"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Star, Users, BookOpen, Award, TrendingUp, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  const stats = [
    { icon: Users, label: "Active Learners", value: "500+" },
    { icon: BookOpen, label: "Courses", value: "60+" },
    { icon: Award, label: "Success Rate", value: "95%" },
    { icon: TrendingUp, label: "Avg Salary Hike", value: "90%" },
  ]

  const features = [
    "Industry-Certified Programs",
    "Live Interactive Classes", 
    "1:1 Mentorship",
    "Job Placement Support"
  ]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-backdrop.jpg"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Deep Navy Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/95 via-[#0D1B2A]/90 to-tz-medium-blue/85"></div>
      
      {/* Additional Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-tz-dark-navy/80 via-transparent to-tz-dark-navy/60"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container-modern relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-400/30 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold drop-shadow-sm">Trusted by 500+ Students</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white drop-shadow-lg">Master</span>
                <br />
                <span className="text-yellow-300 drop-shadow-lg">Future-Ready</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">Skills</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed max-w-2xl drop-shadow-sm">
                Transform your career with industry-relevant programs designed by experts. 
                Join thousands of successful professionals who started their journey with us.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
                  <span className="text-white/95 font-medium drop-shadow-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-tz-dark-navy font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Learning Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-tz-dark-navy text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/20 transition-all duration-300 border border-white/20 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white group-hover:text-yellow-300 transition-colors duration-300" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-300 drop-shadow-sm">{stat.value}</div>
                  <div className="text-sm text-white/90 font-medium drop-shadow-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Hero Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Students learning together"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tz-dark-navy/60 via-transparent to-tz-dark-navy/20" />
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-yellow-400/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 text-tz-dark-navy" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-tz-dark-navy">60+</div>
                    <div className="text-sm text-gray-600 font-medium">Live Courses</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-yellow-400/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-tz-dark-navy to-tz-medium-blue rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-tz-dark-navy">95%</div>
                    <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                  </div>
                </div>
              </motion.div>

              {/* Glowing Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-tz-bright-orange/20 rounded-3xl blur-xl opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
