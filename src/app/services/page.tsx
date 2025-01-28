"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  // Example data for services and packages
  const services = [
    {
      id: 1,
      title: 'Computer Repair',
      description: 'Fast and reliable computer repair services for all brands and models.',
      packages: [
        { name: 'Diagnostics', price: '$50', features: ['Hardware Check', 'Software Check', 'Virus Scan'] },
        { name: 'Basic Repair', price: '$100', features: ['Hardware Fix', 'Software Reinstall', 'Data Backup'] },
        { name: 'Advanced Repair', price: '$200', features: ['Motherboard Repair', 'Data Recovery', 'Full System Tune-Up'] },
      ],
    },
    {
      id: 2,
      title: 'Security Solutions',
      description: 'Comprehensive security solutions for homes and businesses.',
      services: [
        {
          name: 'CCTV Installation',
          packages: [
            { name: 'Basic', price: '$300', features: ['2 Cameras', 'Local Storage', '1-Year Warranty'] },
            { name: 'Advanced', price: '$600', features: ['4 Cameras', 'Cloud Storage', '2-Year Warranty'] },
          ],
        },
        {
          name: 'Biometric Access Control',
          packages: [
            { name: 'Standard', price: '$500', features: ['1 Door', 'Fingerprint Scanner', '1-Year Warranty'] },
            { name: 'Premium', price: '$1000', features: ['2 Doors', 'Fingerprint + Card Access', '2-Year Warranty'] },
          ],
        },
        {
          name: 'Electric Gates & Fences',
          packages: [
            { name: 'Basic', price: '$800', features: ['Single Gate', 'Remote Control', '1-Year Warranty'] },
            { name: 'Premium', price: '$1500', features: ['Double Gate', 'Smartphone Control', '2-Year Warranty'] },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Tech Support',
      description: 'Professional tech support for individuals and businesses.',
      packages: [
        { name: 'Basic', price: '$100', features: ['Remote Support', '1-Hour Session', 'Email Support'] },
        { name: 'Premium', price: '$200', features: ['On-Site Support', 'Unlimited Sessions', '24/7 Support'] },
      ],
    },
    {
      id: 4,
      title: 'Solar Systems',
      description: 'Eco-friendly solar solutions for homes and businesses.',
      packages: [
        { name: 'Residential', price: '$2000', features: ['5kW System', 'Installation', '5-Year Warranty'] },
        { name: 'Commercial', price: '$5000', features: ['10kW System', 'Installation', '10-Year Warranty'] },
      ],
    },
    {
      id: 5,
      title: 'Internet Setup',
      description: 'Fast and reliable internet setup for homes and offices.',
      packages: [
        { name: 'Basic', price: '$100', features: ['Router Setup', 'Wi-Fi Configuration', '1-Year Support'] },
        { name: 'Advanced', price: '$200', features: ['Mesh Network Setup', 'Ethernet Wiring', '2-Year Support'] },
      ],
    },
    {
      id: 6,
      title: 'Graphic Design',
      description: 'Creative graphic design services for branding and marketing.',
      packages: [
        { name: 'Company Profile (Basic)', price: '$30', features: ['Up to 10 Pages', 'Custom Design', 'PDF Format'] },
        { name: 'Logo Design (Basic)', price: '$10', features: ['2 Concepts', 'Unlimited Revisions', 'Source Files'] },
        { name: 'Flyer Design (Basic)', price: '$10', features: ['Single Side', 'Custom Design', 'Print-Ready'] },
        { name: 'Poster Design (Basic)', price: '$20', features: ['Custom Design', 'Print-Ready', 'Source Files'] },
        { name: 'Banner Design (Basic)', price: '$25', features: ['Custom Design', 'Print-Ready', 'Source Files'] },
      ],
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState<{ [key: string]: number }>({});

  const handlePackageSelect = (serviceId: number, subServiceName: string | null, packageIndex: number) => {
    const key = subServiceName ? `${serviceId}-${subServiceName}` : `${serviceId}`;
    setSelectedPackage((prev) => ({ ...prev, [key]: packageIndex }));
  };

  return (
    <div>
      {/* Banner Section */}
      <header
        className="relative bg-cover bg-center h-[50vh] text-center"
        style={{
          backgroundImage: "url('/services.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <motion.h1
            className="text-white text-4xl sm:text-5xl font-bold ml-1 mr-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Here&apos;s What We Do
          </motion.h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        {/* Primary Service - Computer Repair */}
        <div className="mb-12">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{services[0].title}</h2>
              <p className="text-gray-600 mb-4">{services[0].description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services[0]?.packages?.map((pkg, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      selectedPackage[services[0].id] === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200'
                    }`}
                    onClick={() => handlePackageSelect(services[0].id, null, index)}
                  >
                    <h3 className="font-semibold">{pkg.name}</h3>
                    <p className="text-blue-600 font-bold">{pkg.price}</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Security Solutions Section */}
        <div className="mb-12">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{services[1].title}</h2>
              <p className="text-gray-600 mb-4">{services[1].description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services[1].services?.map((subService, subIndex) => (
                  <div key={subIndex}>
                    <h3 className="font-semibold text-lg mb-2">{subService.name}</h3>
                    <div className="space-y-2">
                      {subService.packages.map((pkg, pkgIndex) => (
                        <div
                          key={pkgIndex}
                          className={`p-4 border rounded-lg cursor-pointer ${
                            selectedPackage[`${services[1].id}-${subService.name}`] === pkgIndex
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200'
                          }`}
                          onClick={() => handlePackageSelect(services[1].id, subService.name, pkgIndex)}
                        >
                          <h4 className="font-semibold">{pkg.name}</h4>
                          <p className="text-blue-600 font-bold">{pkg.price}</p>
                          <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                            {pkg.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Graphic Design Section */}
        <div className="mb-12">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{services[5].title}</h2>
              <p className="text-gray-600 mb-4">{services[5].description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services[5].packages?.map((pkg, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      selectedPackage[services[5].id] === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200'
                    }`}
                    onClick={() => handlePackageSelect(services[5].id, null, index)}
                  >
                    <h3 className="font-semibold">{pkg.name}</h3>
                    <p className="text-blue-600 font-bold">{pkg.price}</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(2, 5).map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-4">
                  {service.packages?.map((pkg, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg cursor-pointer ${
                        selectedPackage[service.id] === index
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                      onClick={() => handlePackageSelect(service.id, null, index)}
                    >
                      <h3 className="font-semibold">{pkg.name}</h3>
                      <p className="text-blue-600 font-bold">{pkg.price}</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;