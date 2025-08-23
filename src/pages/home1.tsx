import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

//  data for the e-commerce website
const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$299.99",
    originalPrice: "$399.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 1247
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: "$199.99",
    originalPrice: "$249.99",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 892
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    price: "$599.99",
    originalPrice: "$699.99",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 2156
  },
  {
    id: 4,
    name: "Portable Speaker",
    price: "$89.99",
    originalPrice: "$129.99",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 634
  }
];

const additionalProducts = [
  {
    id: 5,
    name: "Gaming Laptop",
    price: "$1,299.99",
    originalPrice: "$1,499.99",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 2156
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: "$149.99",
    originalPrice: "$199.99",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 892
  },
  {
    id: 7,
    name: "Smart Home Hub",
    price: "$79.99",
    originalPrice: "$99.99",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 1247
  },
  {
    id: 8,
    name: "4K Monitor",
    price: "$399.99",
    originalPrice: "$499.99",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 2156
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: "$129.99",
    originalPrice: "$179.99",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 1567
  },
  {
    id: 10,
    name: "Smartphone",
    price: "$899.99",
    originalPrice: "$1,099.99",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 3245
  },
  {
    id: 11,
    name: "Tablet",
    price: "$499.99",
    originalPrice: "$649.99",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 1892
  },
  {
    id: 12,
    name: "Smart Watch",
    price: "$299.99",
    originalPrice: "$399.99",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 2341
  }
];

const categories = [
  { name: "Electronics", icon: "📱", count: "2.5k+" },
  { name: "Fashion", icon: "👕", count: "1.8k+" },
  { name: "Home & Garden", icon: "🏠", count: "3.2k+" },
  { name: "Sports", icon: "⚽", count: "1.1k+" },
  { name: "Books", icon: "📚", count: "4.7k+" },
  { name: "Beauty", icon: "💄", count: "2.9k+" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Buyer",
    content: "Amazing quality products and fast delivery. This is now my go-to online store!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
    rating: 5,
    purchase: "Premium Wireless Headphones",
    date: "2 weeks ago"
  },
  {
    name: "Michael Chen",
    role: "Premium Member",
    content: "The customer service is exceptional and the product range is incredible. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    purchase: "Smart Fitness Watch",
    date: "1 month ago"
  },
  {
    name: "Emily Rodriguez",
    role: "Loyal Customer",
    content: "I've been shopping here for years and never been disappointed. Great prices and quality!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    purchase: "Ultra HD Camera",
    date: "3 weeks ago"
  },
  {
    name: "David Kim",
    role: "Verified Buyer",
    content: "Fast shipping and excellent product quality. Will definitely shop here again!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    purchase: "Portable Speaker",
    date: "1 week ago"
  }
];

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "100K+", label: "Products Sold" },
  { number: "24/7", label: "Support" },
  { number: "99.9%", label: "Satisfaction Rate" }
];

export default function Home1() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const allProducts = [...featuredProducts, ...additionalProducts];

  const handleViewAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <>
      <Head>
        <title>ShopHub - Your Premium E-commerce Destination</title>
        <meta name="description" content="Discover amazing products at unbeatable prices" />
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
                  Discover Amazing
                  <span className="block text-indigo-200">Products</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                  Shop the latest trends with unbeatable prices and premium quality. 
                  Join thousands of satisfied customers worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg">
                    Shop Now
                  </button>
                  <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </section>

          {/* Categories Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Shop by Category
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Explore our wide range of categories and find exactly what you're looking for
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((category, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-600">
                      <div className="text-4xl mb-3">{category.icon}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{category.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Products
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Handpicked products that our customers love the most
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {(showAllProducts ? allProducts : featuredProducts).map((product) => (
                  <div key={product.id} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          -{Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center mb-3">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300 dark:fill-gray-600'}`} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{product.price}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">{product.originalPrice}</span>
                          </div>
                          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button 
                  onClick={handleViewAllProducts}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
                >
                  {showAllProducts ? 'Show Less' : 'View All Products'}
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose ShopHub?
                </h2>
                <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                  We're committed to providing the best shopping experience with quality products and exceptional service
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
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

          {/* Testimonials Section - Flip Cards */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  What Our Customers Say
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Don't just take our word for it - hear from our satisfied customers
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group perspective-1000">
                    <div className="relative w-full h-80 transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                      {/* Front of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-indigo-100 dark:border-indigo-900">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">{testimonial.name}</h4>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">{testimonial.role}</p>
                        <div className="flex text-yellow-400 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Click to see more</p>
                      </div>
                      
                      {/* Back of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden bg-indigo-600 dark:bg-indigo-700 rounded-xl p-6 shadow-lg rotate-y-180 flex flex-col items-center justify-center text-center text-white">
                        <div className="mb-4">
                          <svg className="w-12 h-12 text-indigo-200 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm mb-4 leading-relaxed">"{testimonial.content}"</p>
                        <div className="text-xs text-indigo-200 mb-2">
                          <strong>Purchased:</strong> {testimonial.purchase}
                        </div>
                        <div className="text-xs text-indigo-200">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* New Stay Updated Section - Modern Template */}
          <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay in the Loop
                </h2>
                <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                  Get exclusive access to early bird deals, new product launches, and insider tips delivered straight to your inbox
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Exclusive Deals</h3>
                      <p className="text-indigo-100">Be the first to know about flash sales and limited-time offers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">New Product Alerts</h3>
                      <p className="text-indigo-100">Get notified when we launch exciting new products</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Shopping Tips</h3>
                      <p className="text-indigo-100">Expert advice to help you make the best purchasing decisions</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Newsletter Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-indigo-100 mb-2">
                        Email Address
                      </label>
                      <input 
                        id="email"
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white/90 backdrop-blur-sm"
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Subscribe Now
                    </button>
                    
                    {isSubscribed && (
                      <div className="text-center p-3 bg-green-500/20 border border-green-400/30 rounded-lg">
                        <p className="text-green-100">🎉 Successfully subscribed! Welcome to the family!</p>
                      </div>
                    )}
                    
                    <p className="text-xs text-indigo-200 text-center">
                      We respect your privacy. Unsubscribe at any time. No spam, ever.
                    </p>
                  </form>
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
