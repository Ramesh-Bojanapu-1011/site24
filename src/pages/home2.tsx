import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

// Dummy data for the home2 page
const heroFeatures = [
  { icon: "🚀", title: "Lightning Fast", description: "Built for speed and performance" },
  { icon: "🔒", title: "Secure & Reliable", description: "Enterprise-grade security" },
  { icon: "📱", title: "Mobile First", description: "Optimized for all devices" }
];

const services = [
  {
    icon: "🛍️", title: "E-commerce Solutions", description: "Complete online store management",
    features: ["Product Catalog", "Order Processing", "Payment Gateway"]
  },
  {
    icon: "📊", title: "Analytics & Insights", description: "Data-driven business decisions",
    features: ["Sales Reports", "Customer Analytics", "Performance Metrics"]
  },
  {
    icon: "🚚", title: "Logistics & Shipping", description: "Streamlined delivery operations",
    features: ["Inventory Management", "Shipping Integration", "Tracking Systems"]
  },
  {
    icon: "💳", title: "Payment Solutions", description: "Secure payment processing",
    features: ["Multiple Gateways", "Fraud Protection", "Recurring Billing"]
  }
];

const testimonials = [
  {
    name: "Alexandra Chen", role: "CEO, TechStart",
    content: "ShopHub transformed our business. We've seen a 300% increase in sales since switching.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop", rating: 5
  },
  {
    name: "Marcus Rodriguez", role: "Founder, FashionHub",
    content: "The platform is incredibly intuitive. Our team was up and running in just one day.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", rating: 5
  },
  {
    name: "Sarah Kim", role: "Operations Manager, EcoStore",
    content: "Customer support is exceptional. They've helped us scale from 100 to 10,000 orders monthly.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", rating: 5
  }
];

const pricingPlans = [
  {
    name: "Starter", price: "$29", period: "/month", description: "Perfect for small businesses",
    features: ["Up to 100 products", "Basic analytics", "Email support", "Mobile app"], popular: false
  },
  {
    name: "Professional", price: "$79", period: "/month", description: "Ideal for growing businesses",
    features: ["Up to 1000 products", "Advanced analytics", "Priority support", "API access", "Custom domain"], popular: true
  },
  {
    name: "Enterprise", price: "$199", period: "/month", description: "For large-scale operations",
    features: ["Unlimited products", "Custom analytics", "24/7 support", "White-label solution", "Advanced integrations"], popular: false
  }
];

const stats = [
  { number: "10M+", label: "Products Sold", icon: "📦" },
  { number: "500K+", label: "Happy Customers", icon: "😊" },
  { number: "150+", label: "Countries Served", icon: "🌍" },
  { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" }
];

const faqs = [
  {
    question: "How quickly can I set up my store?",
    answer: "Most merchants have their store up and running within 24 hours. Our intuitive setup wizard guides you through every step."
  },
  {
    question: "What payment methods do you support?",
    answer: "We support all major payment gateways including Stripe, PayPal, Square, and regional payment methods worldwide."
  },
  {
    question: "Can I migrate from another platform?",
    answer: "Yes! We offer free migration services from popular platforms like Shopify, WooCommerce, and Magento."
  },
  {
    question: "Do you provide customer support?",
    answer: "Absolutely! We offer 24/7 customer support via chat, email, and phone for all our plans."
  }
];

export default function Home2() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>ShopHub - Modern E-commerce Platform | Home 2</title>
        <meta name="description" content="Transform your business with ShopHub's modern e-commerce platform. Fast, secure, and scalable solutions for businesses of all sizes." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Modern E-commerce
                    <span className="block text-indigo-200">Platform</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
                    Transform your business with our cutting-edge e-commerce solution. 
                    Built for speed, security, and scalability.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Link href="/about" className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg text-center">
                      Get Started Free
                    </Link>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300">
                      Watch Demo
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {heroFeatures.map((feature, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl mb-2">{feature.icon}</div>
                        <h3 className="font-semibold text-indigo-200 mb-1">{feature.title}</h3>
                        <p className="text-sm text-indigo-100">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">🛒</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
                      <p className="text-indigo-100 mb-6">Join thousands of successful businesses using ShopHub</p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-300 rounded-full mr-3"></div>
                          <span className="text-sm">No setup fees</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-300 rounded-full mr-3"></div>
                          <span className="text-sm">14-day free trial</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-300 rounded-full mr-3"></div>
                          <span className="text-sm">Cancel anytime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Everything You Need to Succeed
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Comprehensive e-commerce solutions designed to grow your business
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See what our customers say about their experience with ShopHub
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 h-full">
                      <div className="flex items-center mb-6">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-sm text-indigo-600 dark:text-indigo-400">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">"{testimonial.content}"</p>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Choose the plan that fits your business needs. All plans include our core features.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className={`bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border-2 ${plan.popular ? 'border-indigo-600' : 'border-gray-100 dark:border-gray-600'} h-full`}>
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{plan.price}</span>
                          <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors duration-300 ${
                        plan.popular 
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500'
                      }`}>
                        {plan.popular ? 'Get Started' : 'Choose Plan'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">ShopHub by the Numbers</h2>
                <p className="text-xl text-indigo-200 max-w-3xl mx-auto">Trusted by businesses worldwide with proven results</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold text-indigo-200 mb-2">{stat.number}</div>
                    <div className="text-indigo-100 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
                  Join thousands of successful businesses that trust ShopHub for their e-commerce success. 
                  Start your journey today and discover what's possible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Instant Setup</h3>
                      <p className="text-indigo-100">Get your store up and running in minutes, not days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">24/7 Support</h3>
                      <p className="text-indigo-100">Our expert team is here to help you succeed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Scale with Confidence</h3>
                      <p className="text-indigo-100">Built to handle growth from startup to enterprise</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - CTA Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Start Your Free Trial</h3>
                    <p className="text-indigo-100">No credit card required • 14-day free trial</p>
                  </div>
                  
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your business name"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white/90 backdrop-blur-sm"
                    />
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white/90 backdrop-blur-sm"
                    />
                    <select className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white/90 backdrop-blur-sm">
                      <option>Select your business size</option>
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>200+ employees</option>
                    </select>
                    
                    <button className="w-full bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Start Free Trial
                    </button>
                    
                    <p className="text-xs text-indigo-200 text-center">
                      By starting your trial, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Buttons */}
              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/about" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Learn More About Us
                  </Link>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
                    Schedule a Demo
                  </button>
                </div>
                <p className="text-indigo-200 mt-6 text-sm">
                  Questions? Contact our sales team at sales@shophub.com
                </p>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
