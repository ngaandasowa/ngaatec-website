"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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

const About: React.FC = () => {
  // On-load fade-in effect
  useEffect(() => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.classList.add("fade-in");
    }
  }, []);

  // Scroll-triggered animations
  const inView = useInView();

  return (
    <div>
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[50vh] text-center"
        style={{
          backgroundImage: "url('/about_ngaatec.webp')", // Update the path to your image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <motion.h1
            className="text-white text-4xl sm:text-5xl font-bold ml-1 mr-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Ngaatec Private Limited
          </motion.h1>
        </div>
      </header>

      {/* About Section */}
      <main className="py-12 px-4 sm:px-8" id="about-section">
        {/* Who We Are Section */}
        <section className="flex flex-col sm:flex-row items-center sm:space-x-8 mb-12">
        {/* Content on the left for desktop, above for mobile */}
        <motion.div
          className="w-full sm:w-1/2 mt-6 sm:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600">
            Ngaatec Private Limited is an ICT company committed to providing
            quality computer repair and related services. Our mission is to make
            technology simple and accessible for everyone.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            &quot;The world of simple technology&quot; – this is the core of who we are.
          </p>
        </motion.div>

        {/* Image on the right for desktop, below for mobile */}
        <motion.div
          className="w-full sm:w-1/2 mt-6 sm:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/about_us.webp" // Update with actual image path
            alt="Ngaatec"
            width={500} // Set appropriate width
            height={500} // Set appropriate height
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </section>

        {/* Vision & Mission Section */}
        <section className="bg-blue-50 text-center mb-12 p-8 rounded-lg">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 underline underline-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Vision
          </motion.h3>
          <p className="text-lg text-gray-600 mb-6">
            To become the leading IT service provider in Zimbabwe and the go-to destination for reliable, affordable IT services.
          </p>
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 underline underline-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h3>
          <p className="text-lg text-gray-600 mb-6">
            To provide high-quality, affordable IT services and solutions to our customers, ensuring customer satisfaction and excellence.
          </p>
        </section>

        {/* Our Principles Section */}
        <section className="mb-12">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Principles
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Integrity", "Innovation", "Excellence", "Teamwork", "Godliness"].map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <h4 className="text-xl font-semibold text-gray-800">{principle}</h4>
                <p className="text-gray-600">
                  {/* Add your principle descriptions here */}
                  {principle === "Integrity" && "Fair, honest, and transparent conduct."}
                  {principle === "Innovation" && "Fearless and novel problem-solving."}
                  {principle === "Excellence" && "Commitment to the highest quality standards."}
                  {principle === "Teamwork" && "Building cooperative partnerships."}
                  {principle === "Godliness" && "Conducting our business with respect and awe for God."}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Separator Line */}
        <motion.hr
          id="separator-line"
          className="border-t-2 border-black my-12 mx-auto w-4/5 md:w-1/2"
          initial={{ width: 0 }}
          animate={{ width: inView ? "100%" : "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* History Section */}
        <section className="mb-12">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our History
          </motion.h3>
          <p className="text-lg text-gray-600 mb-6">
            Since our establishment in 2021, Ngaatec Private Limited has been committed to providing reliable IT services including computer repair, hardware installation, upgrades, data recovery, and more.
          </p>
        </section>

        {/* Contact Section */}
<section className="bg-blue-50 text-center p-6 rounded-lg">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    {/* Brand Logo */}
    <motion.div
      className="flex justify-center mb-6"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Image
        src="/ngaatec.svg" // Replace with your logo path
        alt="Ngaatec Logo"
        className="w-16 h-16" // Adjust size as needed
        width={500}
        height={500}
      />
    </motion.div>

    {/* Contact Heading */}
    <motion.h3
      className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      Contact Us
    </motion.h3>

    {/* Contact Details */}
    <motion.p
      className="text-lg text-gray-600 mb-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      Email:{" "}
      <a href="mailto:hello@ngaatec.co.zw" className="text-blue-500">
        hello@ngaatec.co.zw
      </a>
    </motion.p>
    <motion.p
      className="text-lg text-gray-600 mb-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 1 }}
    >
      Cell: +263 71 712 9651 / +263 783 82757
    </motion.p>
  </motion.div>
</section>
      </main>
    </div>
  );
};

export default About;
