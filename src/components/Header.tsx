import React, { useState } from "react";
import { ModeToggle } from "./theme/ModeToggle";
import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Product Listing", href: "/services#product-listing", icon: "📦" },
  { name: "Order Management", href: "/services#order-management", icon: "🛒" },
  { name: "Payment Gateway", href: "/services#payment-gateway", icon: "💳" },
  { name: "Customer Support", href: "/services#customer-support", icon: "🎧" },
  { name: "Shipping & Delivery", href: "/services#shipping-delivery", icon: "🚚" },
  { name: "Analytics & Reports", href: "/services#analytics-reports", icon: "📊" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className={``}>
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-20 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-stackly.png"
                  alt="E-Commerce Logo"
                  className="w-8 h-8"
                  height={32}
                  width={32}
                />
                <span className="ml-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">ShopHub</span>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center space-x-4">
              {/* Home Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setHomeDropdown(true)}
                onMouseLeave={() => setHomeDropdown(false)}
              >
                <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                  Home
                </button>
                {homeDropdown && (
                  <div className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg z-30">
                    <Link
                      href="/home1"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Home1
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Home2
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                About Us
              </Link>
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                  Services
                </button>
                {servicesDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-30">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {service.icon} {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/blog"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Contact Us
              </Link>
              {/* Dark Mode Toggle */}
              <ModeToggle />
            </div>
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                aria-label="Main menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              {/* Dark Mode Toggle */}
              <ModeToggle />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1">
            {/* Home Dropdown */}
            <div>
              <button
                onClick={() => setHomeDropdown(!homeDropdown)}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              >
                Home
              </button>
              {homeDropdown && (
                <div className="pl-4">
                  <Link
                    href="/home1"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home1
                  </Link>
                  <Link
                    href="/"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home2
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              About Us
            </Link>
            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              >
                Services
              </button>
              {servicesDropdown && (
                <div className="pl-4">
                  <Link
                    href="/services"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {service.icon} {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
