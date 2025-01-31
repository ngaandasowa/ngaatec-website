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
  const [phone, setPhone] = useState<string | undefined>("");
  const [mathQuiz, setMathQuiz] = useState({ question: "", answer: 0 });
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [showQuiz, setShowQuiz] = useState<boolean>(false); // State to control quiz popup visibility

  // Generate a random math quiz
  const generateMathQuiz = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-", "*"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${num1} ${operator} ${num2}`;
    const answer = eval(question); // Calculate the correct answer
    setMathQuiz({ question, answer });
  };

  // Verify the user's answer and submit the form if correct
  const verifyAnswerAndSubmit = async () => {
    const response = await fetch("/api/verifyQuiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userAnswer: parseInt(userAnswer), correctAnswer: mathQuiz.answer }),
    });

    const result = await response.json();
    if (result.verified) {
      setIsVerified(true);
      setStatus(""); // Clear any previous error messages
      setShowQuiz(false); // Close the quiz popup

      // Automatically submit the form after verification
      if (formRef.current) {
        const formData = new FormData(formRef.current); // Extract form data
        const data: FormData = {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          phone: phone || "",
          topic: formData.get("topic") as string,
          message: formData.get("message") as string,
        };

        // Submit the form data
        await handleSubmit(data);
      }
    } else {
      setStatus("Incorrect answer. Please try again.");
      setUserAnswer(""); // Clear the input field
      generateMathQuiz(); // Generate a new quiz
    }
  };

  // Handle form submission
  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);

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
        setIsVerified(false); // Reset verification
        setUserAnswer(""); // Clear the quiz answer
        generateMathQuiz(); // Generate a new quiz
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message. Call us for assistance. +263 78 382 7570");
    } finally {
      setIsLoading(false);
    }
  };

  // Generate a new quiz when the component mounts
  React.useEffect(() => {
    generateMathQuiz();
  }, []);

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
            <form
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault();
                if (!isVerified) {
                  setShowQuiz(true); // Show quiz popup if not verified
                } else {
                  const formData = new FormData(e.currentTarget);
                  const data: FormData = {
                    name: formData.get("name") as string,
                    email: formData.get("email") as string,
                    phone: phone || "",
                    topic: formData.get("topic") as string,
                    message: formData.get("message") as string,
                  };
                  handleSubmit(data); // Submit form data
                }
              }}
            >
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

      {/* Quiz Popup */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#212121] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Verify You Are Not a Robot</h2>
            <p className="text-lg font-semibold mb-4">{mathQuiz.question} = ?</p>
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-black bg-opacity-10 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your answer"
              required
            />
            <button
              type="button"
              onClick={verifyAnswerAndSubmit}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Verify
            </button>
          </div>
        </div>
      )}

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