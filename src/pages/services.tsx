import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

// Dummy data for the services page
const services = [
  {
    id: 1,
    title: "Product Listing",
    description: "Comprehensive product catalog management with advanced categorization and search capabilities",
    icon: "📦",
    features: ["Unlimited products", "Bulk import/export", "SEO optimization", "Multi-language support"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Order Management",
    description: "Streamlined order processing from cart to delivery with real-time tracking",
    icon: "🛒",
    features: ["Order automation", "Inventory sync", "Shipping integration", "Customer notifications"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Payment Gateway",
    description: "Secure payment processing with multiple payment methods and fraud protection",
    icon: "💳",
    features: ["Multiple gateways", "Fraud detection", "Recurring billing", "PCI compliance"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Customer Support",
    description: "24/7 customer support with multiple channels and AI-powered assistance",
    icon: "🎧",
    features: ["Live chat", "Ticket system", "Knowledge base", "AI chatbot"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Shipping & Delivery",
    description: "End-to-end logistics management with real-time tracking and optimization",
    icon: "🚚",
    features: ["Carrier integration", "Route optimization", "Delivery tracking", "Returns management"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Analytics & Reports",
    description: "Data-driven insights with comprehensive reporting and business intelligence",
    icon: "📊",
    features: ["Sales analytics", "Customer insights", "Performance metrics", "Custom dashboards"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  }
];

const testimonials = [
  {
    name: "David Chen",
    role: "Operations Director",
    company: "TechCorp",
    content: "The order management system has reduced our processing time by 60% and eliminated errors completely.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Maria Garcia",
    role: "E-commerce Manager",
    company: "FashionHub",
    content: "The analytics dashboard gives us insights we never had before. Our conversion rates improved by 40%.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
  },
  {
    name: "James Wilson",
    role: "CEO",
    company: "EcoStore",
    content: "Customer support integration has transformed our customer satisfaction scores from 3.2 to 4.8.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];

const pricing = [
  {
    plan: "Basic",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses starting their e-commerce journey",
    features: ["2 services included", "Basic support", "Standard features", "Email support"]
  },
  {
    plan: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses with multiple service needs",
    features: ["4 services included", "Priority support", "Advanced features", "Phone support", "Custom integrations"]
  },
  {
    plan: "Enterprise",
    price: "$799",
    period: "/month",
    description: "Complete solution for large-scale operations",
    features: ["All 6 services", "24/7 support", "Custom development", "Dedicated manager", "White-label options"]
  }
];

const stats = [
  { number: "500+", label: "Businesses Served", icon: "🏢" },
  { number: "99.9%", label: "Uptime", icon: "⚡" },
  { number: "24/7", label: "Support Available", icon: "🔄" },
  { number: "50M+", label: "Orders Processed", icon: "📦" }
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - ShopHub | Complete E-commerce Solutions</title>
        <meta name="description" content="Discover ShopHub's comprehensive e-commerce services including product listing, order management, payment processing, customer support, shipping, and analytics." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Our Complete
                  <span className="block text-indigo-200">Service Suite</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                  From product listing to customer support, we provide every service you need 
                  to build and scale your e-commerce business successfully.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="#services" className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg">
                    Explore Services
                  </Link>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </section>

          {/* Services Overview Section */}
          <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Six Core Services
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Each service is designed to work seamlessly with the others, creating a unified e-commerce ecosystem
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={service.id} id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-')} className="group">
                    <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-600">
                      <div className="relative overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="text-4xl mb-2">{service.icon}</div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300 group-hover:shadow-lg">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  How Our Services Work Together
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  A seamless integration that creates a powerful e-commerce ecosystem
                </p>
              </div>
              
              <div className="relative">
                {/* Connection Lines */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-200 dark:bg-indigo-800 transform -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                  {services.map((service, index) => (
                    <div key={service.id} className="relative">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700 relative z-10">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">{service.icon}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                          {service.title}
                        </h3>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Step {index + 1}
                        </div>
                      </div>
                      
                      {/* Connection Arrow */}
                      {index < services.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                          <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Real feedback from businesses using our comprehensive service suite
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-600 h-full">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-sm text-indigo-600 dark:text-indigo-400">{testimonial.role}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
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
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Service Package Pricing
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Choose the package that fits your business needs and scale as you grow
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div key={index} className={`relative ${index === 1 ? 'transform scale-105' : ''}`}>
                    {index === 1 && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className={`bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border-2 ${index === 1 ? 'border-indigo-600' : 'border-gray-100 dark:border-gray-600'} h-full`}>
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.plan}</h3>
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
                        index === 1 
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500'
                      }`}>
                        {index === 1 ? 'Get Started' : 'Choose Plan'}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Service Excellence by Numbers
                </h2>
                <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                  Proven results that speak for themselves
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold text-indigo-200 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-indigo-100 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your E-commerce Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Let our team of experts help you choose the right services and get started today
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Schedule a Consultation
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get a Custom Quote
                </button>
              </div>
              
              <p className="text-indigo-200 mt-6 text-sm">
                Questions? Contact our services team at services@shophub.com
              </p>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
