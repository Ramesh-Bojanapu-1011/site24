import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dummy data for the about page
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    bio: "10+ years of experience in e-commerce and digital transformation",
    social: { linkedin: "#", twitter: "#", email: "sarah@shophub.com" }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "Expert in scalable architecture and emerging technologies",
    social: { linkedin: "#", twitter: "#", email: "michael@shophub.com" }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    bio: "Award-winning designer with focus on user experience",
    social: { linkedin: "#", twitter: "#", email: "emily@shophub.com" }
  },
  {
    id: 4,
    name: "David Kim",
    role: "VP of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    bio: "Operations specialist with global supply chain expertise",
    social: { linkedin: "#", twitter: "#", email: "david@shophub.com" }
  }
];

const milestones = [
  { year: "2018", title: "Company Founded", description: "Started with a vision to revolutionize online shopping" },
  { year: "2019", title: "First 1000 Customers", description: "Reached our first major milestone" },
  { year: "2020", title: "Series A Funding", description: "Secured $5M in funding for expansion" },
  { year: "2021", title: "International Launch", description: "Expanded to 5 new countries" },
  { year: "2022", title: "1M+ Products", description: "Catalog grew to over 1 million products" },
  { year: "2023", title: "Market Leader", description: "Became the #1 e-commerce platform in our region" }
];

const values = [
  {
    icon: "🎯",
    title: "Customer First",
    description: "Every decision we make is centered around our customers' needs and satisfaction."
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We constantly push boundaries to bring cutting-edge solutions to the market."
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "Honest, transparent, and ethical in all our business practices."
  },
  {
    icon: "🌍",
    title: "Sustainability",
    description: "Committed to environmental responsibility and sustainable business practices."
  }
];

const achievements = [
  { number: "50K+", label: "Happy Customers", icon: "😊" },
  { number: "100K+", label: "Products Sold", icon: "📦" },
  { number: "24/7", label: "Support Available", icon: "🔄" },
  { number: "99.9%", label: "Uptime", icon: "⚡" },
  { number: "15+", label: "Countries", icon: "🌍" },
  { number: "200+", label: "Team Members", icon: "👥" }
];

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Business Owner",
    content: "ShopHub transformed our business. The platform is intuitive and the support team is exceptional.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "Marketing Director",
    content: "The analytics and insights provided by ShopHub have been invaluable for our growth strategy.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "E-commerce Manager",
    content: "Best platform we've used. Reliable, fast, and constantly improving with new features.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - ShopHub | Our Story & Mission</title>
        <meta name="description" content="Learn about ShopHub's journey, mission, and the team behind the leading e-commerce platform" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        {/* Main content with top margin for fixed header */}
        <div className="pt-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  About
                  <span className="block text-indigo-200">ShopHub</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                  We're on a mission to revolutionize online shopping by creating seamless, 
                  innovative experiences that connect people with the products they love.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg">
                    Our Story
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300">
                    Meet Our Team
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </section>

          {/* Mission & Vision Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Our Mission & Vision
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Mission</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        To democratize e-commerce by providing businesses of all sizes with the tools, 
                        technology, and support they need to succeed in the digital marketplace.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Vision</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        To become the world's most trusted and innovative e-commerce platform, 
                        empowering millions of businesses and delighting billions of customers worldwide.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-600">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">🎯</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Values</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {values.map((value, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl mb-2">{value.icon}</div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{value.title}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Meet Our Leadership Team
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  The brilliant minds behind ShopHub's success story
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.id} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                      <div className="relative overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                        <div className="flex justify-center space-x-3">
                          <a href={member.social.linkedin} className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.885v1.233h.041c.402-.762 1.384-1.566 2.849-1.566 3.046 0 3.607 2.006 3.607 4.617v4.716z"/>
                            </svg>
                          </a>
                          <a href={member.social.twitter} className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.134a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/>
                            </svg>
                          </a>
                          <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Journey Timeline Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Journey
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  From startup to market leader - here's our story
                </p>
              </div>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                      
                      {/* Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 text-left'}`}>
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600">
                          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-20 bg-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Achievements
                </h2>
                <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                  Numbers that tell our success story
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold text-indigo-200 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-indigo-100 font-medium text-sm">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Customer Testimonials Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Join thousands of successful businesses that trust ShopHub for their e-commerce success
                </p>
              </div>
              
              {/* CTA Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Start Your Store */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 dark:bg-indigo-800 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Start Your Store</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Launch your online store in minutes with our intuitive platform and powerful tools.
                    </p>
                    <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300 group-hover:shadow-lg">
                      Get Started Free
                    </button>
                  </div>
                </div>

                {/* Scale Your Business */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scale Your Business</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Grow your business with advanced analytics, marketing tools, and global reach.
                    </p>
                    <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 group-hover:shadow-lg">
                      Explore Features
                    </button>
                  </div>
                </div>

                {/* Get Expert Support */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Expert Support</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Our dedicated team is here to help you succeed every step of the way.
                    </p>
                    <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-300 group-hover:shadow-lg">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Section */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-white relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Let's Build Something Amazing Together
                    </h3>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                      Ready to take your business to the next level? Join the ShopHub family today and discover what's possible.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Start Your Free Trial
                      </button>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
                        Schedule a Demo
                      </button>
                    </div>
                    <p className="text-sm text-indigo-200 mt-6">
                      No credit card required • 14-day free trial • Cancel anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
