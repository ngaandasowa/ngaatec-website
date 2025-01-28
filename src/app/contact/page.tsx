"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

const ContactPage = () => {
  const [status, setStatus] = useState<string>("");
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string | undefined>(""); // State for phone number

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: phone || "", // Use phone state here
      topic: formData.get("topic") as string,
      message: formData.get("message") as string,
    };
  
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setStatus("Invalid email address.");
      setIsLoading(false);
      return;
    }
  
    // Validate phone number format
    if (!data.phone || !/^\+[1-9]\d{1,14}$/.test(data.phone)) {
      setStatus("Invalid phone number.");
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      setStatus(result.message);
      if (response.ok && formRef.current) {
        formRef.current.reset(); // Clear the form
        setPhone(""); // Clear the phone state
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };  

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[50vh] text-center"
        style={{
          backgroundImage: "url('/contact.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <motion.h1
            className="text-white text-4xl sm:text-5xl font-bold ml-1 mr-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Us Today
          </motion.h1>
        </div>
      </header>

      {/* Contact Form and Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Name</label>
    <input
      type="text"
      name="name"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <PhoneInput
                  name="phone"
                  international
                  defaultCountry="ZW"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phone}
                  onChange={setPhone} // Update state with onChange
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Topic
                </label>
                <select
                  name="topic"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="Sales">Sales</option>
                  <option value="Technical">Technical</option>
                  <option value="Billing">Billing</option>
                  <option value="Careers">Careers</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
    disabled={isLoading}
  >
    {isLoading ? "Sending..." : "Send Message"}
  </button>
            </form>
            {status && (
              <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">hello@ngaatec.co.zw</p>
                <p className="text-gray-600">sales@ngaatec.co.zw</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call/WhatsApp</h3>
                <p className="text-gray-600">+263 717 129 651</p>
                <p className="text-gray-600">+263 783 827 570</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-600">
                  13 Nyenze Cres, Zengeza 1, Chitungwiza, Zimbabwe
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Business Hours</h3>
                <p className="text-gray-600">Mon-Sat: 9AM – 5PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-700">Sending your message...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;