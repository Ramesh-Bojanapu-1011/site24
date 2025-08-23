import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CustomerSupport() {
  return (
    <>
      <Head>
        <title>Customer Support Services - ShopHub</title>
        <meta name="description" content="Exceptional customer support services that enhance customer satisfaction and build lasting relationships. 24/7 support for your e-commerce business." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section - White Background */}
          <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                <span className="mr-2">🎧</span>
                Customer Support Service
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Exceptional Customer
                <span className="block text-indigo-600">Support</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Build lasting customer relationships with our comprehensive support solutions. 
                Provide 24/7 assistance across multiple channels to enhance customer satisfaction.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#get-started" 
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200 transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>

          {/* Support Channels Section - Indigo Background */}
          <section id="channels" className="py-20 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Multiple Support Channels
                </h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                  Meet your customers where they are with our multi-channel support solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <span className="text-3xl">💬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                  <p className="text-indigo-100">
                    Real-time chat support with instant responses and file sharing capabilities.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <span className="text-3xl">📧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
                  <p className="text-indigo-100">
                    Professional email support with ticket tracking and automated responses.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <span className="text-3xl">📞</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Phone Support</h3>
                  <p className="text-indigo-100">
                    Voice support with call recording and quality monitoring systems.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <span className="text-3xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Mobile App</h3>
                  <p className="text-indigo-100">
                    Mobile-first support experience with push notifications and in-app chat.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Advanced Support Features
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Powerful tools and features that make customer support efficient and effective.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI-Powered Chatbots</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Intelligent chatbots that handle common queries and route complex issues to human agents.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Analytics Dashboard</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Comprehensive insights into support performance, customer satisfaction, and response times.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Routing</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Intelligent ticket routing based on agent expertise and workload optimization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Knowledge Base</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Self-service knowledge base with searchable articles and video tutorials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section - Black Background */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Support That Delivers Results
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Our customer support services consistently achieve exceptional results for businesses.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">98%</div>
                  <div className="text-lg text-gray-300">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">2min</div>
                  <div className="text-lg text-gray-300">Average Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">24/7</div>
                  <div className="text-lg text-gray-300">Support Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">95%</div>
                  <div className="text-lg text-gray-300">Issue Resolution Rate</div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section - Indigo Background */}
          <section className="py-20 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Expert Support Team
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Our certified support professionals are trained to handle any customer inquiry with expertise and care.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Certified Agents</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Industry-certified support professionals with extensive training and experience.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Multi-Language</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Support in multiple languages to serve your global customer base effectively.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Fast Resolution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Quick problem identification and resolution with first-contact resolution focus.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the businesses that have elevated their customer experience with our support services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Started Today
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Explore All Services
                </Link>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
