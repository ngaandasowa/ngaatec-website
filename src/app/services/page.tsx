"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Package and Service types
type Package = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  orderLink?: string; // Add this line
};

type Service = {
  id: number;
  title: string;
  description: string;
  packages: Package[];
};

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Web Hosting",
      description: "Cloud Website Hosting made easy and affordable!",
      packages: [
        {
          name: "Bronze",
          price: "$3.95 /Month",
          features: [
            "1 Domain",
            "1GB RAM",
            "5GB SSD Storage",
            "Unlimited Traffic",
            "10 MySQL Databases",
            "10 Secure Email Accounts",
            "Unlimited Subdomains",
            "Premium Email Delivery",
            "Free SSL Certificate",
          ],
          orderLink: "https://clientzone.ngaatec.co.zw/order?product=3", // Add this line
        },
        {
          name: "Silver",
          price: "$7.95 /Month",
          features: [
            "5 Domains",
            "3GB RAM",
            "20GB SSD Storage",
            "Unlimited Traffic",
            "Unlimited MySQL Databases",
            "Unlimited Secure Email Accounts",
            "Unlimited Subdomains",
            "Premium Email Delivery",
            "Free SSL Certificate",
          ],
          popular: true,
        },
        {
          name: "Gold",
          price: "$11.95 /Month",
          features: [
            "Unlimited Domains",
            "4GB RAM",
            "100GB SSD Storage",
            "Unlimited Traffic",
            "Unlimited MySQL Databases",
            "Unlimited Secure Email Accounts",
            "Unlimited Subdomains",
            "Premium Email Delivery",
            "Free SSL Certificate",
          ],
        },
        {
          name: "Platinum",
          price: "$15.95 /Month",
          features: [
            "Unlimited Domains",
            "6GB RAM",
            "300GB SSD Storage",
            "Unlimited Traffic",
            "Unlimited MySQL Databases",
            "Unlimited Secure Email Accounts",
            "Unlimited Subdomains",
            "Premium Email Delivery",
            "Free SSL Certificate",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Domain Registration",
      description: "Secure your perfect domain name for your brand.",
      packages: [
        { name: ".co.zw", price: "$5/year", features: ["Domain Registration for .co.zw"], popular: true },
        { name: ".com", price: "$25/year", features: ["Domain Registration for .com"] },
        { name: ".org", price: "$30/year", features: ["Domain Registration for .org"] },
        { name: "Other Domains", price: "Custom Pricing", features: ["Tell us your domain, and we'll provide a quote"] },
      ],
    },
    {
      id: 3,
      title: "Website Designing",
      description: "Custom, responsive websites that showcase your brand online.",
      packages: [
        {
          name: "Basic",
          price: "$60 – $100+",
          features: [
            "Pre-made template, lightly customized",
            "Up to 5 pages",
            "Contact form & social media links",
            "Basic SEO setup",
            "2 round of revisions",
          ],
        },
        {
          name: "Standard",
          price: "$150 – $250+",
          features: [
            "Everything in Basic",
            "Custom homepage design",
            "Up to 15 pages",
            "Blog & social media integration",
            "Basic online store",
            "Email marketing setup",
            "3 rounds of revisions",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: "$300 – $500+",
          features: [
            "Everything in Standard",
            "Fully custom design & branding",
            "20+ pages",
            "Advanced online store features",
            "Custom animations & interactive elements",
            "Content creation (text, images, blogs)",
            "Ongoing maintenance & support",
            "Unlimited revisions",
          ],
        },
        {
          name: "E-commerce",
          price: "$600 – $1000+",
          features: [
            "Product catalog & shopping cart",
            "Secure payment & shipping management",
            "Customer accounts & order tracking",
            "Inventory management system",
            "Basic SEO & marketing tools",
            "3 rounds of revisions",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Branding & Graphic Design",
      description: "Creative visuals that make your brand unforgettable.",
      packages: [
    {
      name: "Business Card",
      price: "$10–$30",
      features: [
        "1 Concept",
        "2 Revisions",
        "Source Files",
        "Print-Ready Files",
        "Optional at higher end: Printing for 50 or 100 cards"
      ]
    },
    {
      name: "Logo Design",
      price: "$25–$80",
      features: [
        "2 Concepts",
        "2 Revisions",
        "Vector & PNG Files",
        "Optional at higher end: Additional concepts, basic brand guide"
      ]
    },
    {
      name: "Flyer / Poster / Banner",
      price: "$10–$75",
      features: [
        "Custom Design",
        "Print-Ready",
        "Optional at higher end: Multiple revisions, larger formats, web-optimized images"
      ]
    },
    {
      name: "Company Profile",
      price: "$40–$200+",
      features: [
        "Up to 10 Pages",
        "PDF Format",
        "Custom Design",
        "Optional at higher end: More pages, multiple concepts, additional revisions"
      ],
      popular: true
    }
],
    },
    {
      id: 5,
      title: "IT Support & Computer Repairs",
      description: "Reliable IT support and professional computer repair services for individuals and businesses.",
      packages: [
        {
          name: "Diagnostics & Troubleshooting",
          price: "$10 - $50+",
          features: [
            "Full hardware diagnostics (CPU, GPU, RAM, motherboard)",
            "Software troubleshooting & optimization",
            "Virus, malware, and spyware removal",
            "System performance tuning",
            "Network diagnostics"
          ],
        },
        {
          name: "Hardware Repairs & Upgrades",
          price: "$20 - $100+",
          features: [
            "Motherboard repair/replacement",
            "Hard drive/SSD repair or replacement",
            "RAM & GPU upgrades",
            "Laptop screen replacement",
            "Keyboard, touchpad, and peripheral repairs"
          ],
          popular: true,
        },
        {
          name: "Data Recovery & Backup",
          price: "$100 - $500+",
          features: [
            "Hard drive and SSD data recovery",
            "RAID recovery",
            "USB and external drive recovery",
            "Cloud backup setup and restoration",
            "Data migration between devices"
          ],
        },
        {
          name: "IT Support & Managed Services",
          price: "$30 - $100+",
          features: [
            "Remote or on-site technical support",
            "Network setup, monitoring, and troubleshooting",
            "Software installation & licensing",
            "Printer/scanner setup and maintenance",
            "Cybersecurity and firewall management",
            "Email and server management"
          ],
        },
      ],
    },

  ];

  const [selectedPackage] = useState<Record<number, number>>({});
  const [desiredDomain, setDesiredDomain] = useState<string>("");

  return (
    <div>
      {/* Banner */}
      <header
        className="relative bg-cover bg-center h-[50vh] text-center"
        style={{ backgroundImage: "url('/services.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <motion.h1
            className="text-white text-4xl sm:text-5xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="bg-black text-white mx-auto px-4 py-12 space-y-12">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-[#212121] bg-opacity-30 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="mb-6">{service.description}</p>

              {/* Packages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative p-6 border rounded-lg flex flex-col justify-between hover:scale-105 transition-transform ${
                      selectedPackage[service.id] === index
                        ? "border-white bg-white bg-opacity-10"
                        : "border-gray-500"
                    }`}                  >
                    {/* Header & Popular Badge */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">{pkg.name}</h3>
                      {pkg.popular && (
                        <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <p className="text-xl font-bold mb-3">{pkg.price}</p>

                    {/* Features */}
                    <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    {/* Order Button */}
                    <a
  href={
    pkg.orderLink
      ? pkg.orderLink
      : `https://wa.me/263783827570?text=${encodeURIComponent(
          `Hello, I would like to order the package "${pkg.name}" under the service "${service.title}".`
        )}`
  }
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto block text-center bg-green-600 hover:bg-green-700 px-3 py-2 rounded text-sm font-semibold"
>
  Order Now
</a>
                  </div>
                ))}
              </div>

              {/* Domain Check Section */}
              {service.id === 2 && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Find Your Perfect Domain Name</h3>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Enter your desired domain"
                      value={desiredDomain}
                      onChange={(e) => setDesiredDomain(e.target.value)}
                      className="flex-1 p-2 rounded border border-gray-300 text-black"
                    />
                    <a
                      href={`https://wa.me/263783827570?text=${encodeURIComponent(
                        `Hello, I want to check availability for the domain: ${desiredDomain}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                    >
                      Check Availability
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;
