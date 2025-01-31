"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [phone, setPhone] = useState<string | undefined>("");
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!recaptchaValue) {
      setStatus("Please complete the reCAPTCHA.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: phone || "",
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
      // Verify reCAPTCHA
      const recaptchaResponse = await fetch(
        `/api/verifyRecaptcha?response=${recaptchaValue}`,
        { method: "POST" }
      );
      const recaptchaResult = await recaptchaResponse.json();
      if (!recaptchaResult.success) {
        throw new Error("reCAPTCHA verification failed.");
      }

      // Submit form data
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
        setRecaptchaValue(null); // Reset reCAPTCHA
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message. Call us for assistance. +263 78 382 7570");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
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
            className="bg-[#212121] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 bg-black bg-opacity-10 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 bg-black bg-opacity-10 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Phone Number</label>
                <PhoneInput
                  name="phone"
                  international
                  defaultCountry="ZW"
                  className="mt-1 block w-full px-3 py-2 bg-black bg-opacity-10 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  value={phone}
                  onChange={setPhone}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Topic</label>
                <select
                  name="topic"
                  className="mt-1 block w-full px-3 py-2 bg-black bg-opacity-10 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
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
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 bg-black bg-opacity-10 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={handleRecaptchaChange}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white hover:bg-black hover:text-white text-black font-semibold rounded-lg shadow-md transition"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {status && <p className="mt-4 text-center text-sm">{status}</p>}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-[#212121] text-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>hello@ngaatec.co.zw</p>
                <p>sales@ngaatec.co.zw</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call/WhatsApp</h3>
                <p>+263 717 129 651</p>
                <p>+263 783 827 570</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p>13 Nyenze Cres, Zengeza 1, Chitungwiza, Zimbabwe</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Business Hours</h3>
                <p>Mon-Sat: 9AM – 4PM</p>
                <p>Sunday: Closed</p>
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