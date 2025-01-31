"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// Custom hook for scroll-triggered animations
const useInView = (threshold: number = 0.5) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting); // Update the state when element is in view
      },
      { threshold }
    );

    const element = document.getElementById("separator-line"); // Replace with your element's id
    if (element) {
      observer.observe(element); // Start observing
    }

    return () => {
      if (element) observer.unobserve(element); // Clean up observer on component unmount
    };
  }, [threshold]);

  return inView;
};

const PrivacyPolicy = () => {
  const inView = useInView();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[50vh] text-center"
        style={{
          backgroundImage: "url('/privacy_banner.webp')", // Update the path to your image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <motion.h1
            className="text-white text-4xl sm:text-5xl font-bold ml-1 mr-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Privacy Policy
          </motion.h1>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="bg-black text-white mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-lg shadow-lg"
        >
          <p className="mb-6">
            Ngaatec Private Limited is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you agree to the terms outlined in this policy.
          </p>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">1. Information Collection</h3>
            <p className="mb-4 ">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside ">
              <li className="mb-2">
                <strong>Personal Information:</strong> Name, email address, phone number, payment details, and other information you provide when using our services.
              </li>
              <li className="mb-2">
                <strong>Usage Data:</strong> IP addresses, browser types, pages visited, and other data about how you interact with our website and services.
              </li>
              <li className="mb-2">
                <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience and analyze website traffic.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">2. Use of Information</h3>
            <p className="mb-4 ">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc list-inside ">
              <li className="mb-2">
                <strong>Service Delivery:</strong> To provide, maintain, and improve our services.
              </li>
              <li className="mb-2">
                <strong>Communication:</strong> To send you updates, newsletters, and marketing communications (you can opt-out at any time).
              </li>
              <li className="mb-2">
                <strong>Analytics:</strong> To analyze usage patterns and improve our website and services.
              </li>
              <li className="mb-2">
                <strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">3. Information Sharing</h3>
            <p className="mb-4 ">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside ">
              <li className="mb-2">
                <strong>Third-Party Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our business.
              </li>
              <li className="mb-2">
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to legal processes.
              </li>
              <li className="mb-2">
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">4. Data Security</h3>
            <p className="mb-4 ">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security audits.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">5. Your Rights</h3>
            <p className="mb-4 ">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside ">
              <li className="mb-2">
                <strong>Access:</strong> You can request a copy of the personal information we hold about you.
              </li>
              <li className="mb-2">
                <strong>Correction:</strong> You can request corrections to any inaccurate or incomplete information.
              </li>
              <li className="mb-2">
                <strong>Deletion:</strong> You can request the deletion of your personal information, subject to legal obligations.
              </li>
              <li className="mb-2">
                <strong>Objection:</strong> You can object to the processing of your data for specific purposes.
              </li>
              <li className="mb-2">
                <strong>Data Portability:</strong> You can request a transfer of your data to another service provider.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">6. Changes to This Privacy Policy</h3>
            <p className="mb-4 ">
              Ngaatec Private Limited reserves the right to update this Privacy Policy at any time. We will notify you of significant changes by posting the updated policy on our website and, where appropriate, through email notification.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">7. Contact Information</h3>
            <p className="mb-4 ">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="">
              <strong>Email:</strong> hello@ngaatec.co.zw
            </p>
          </section>
          
        </motion.div>
        {/* Separator Line */}
                <motion.hr
                  id="separator-line"
                  className="border-1 border-white mx-auto w-4/5 md:w-1/2"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? "98%" : "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
      </div>
      
    </div>
  );
};

export default PrivacyPolicy;