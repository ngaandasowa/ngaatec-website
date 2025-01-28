"use client";

import React from "react";
import { motion } from "framer-motion";

const ShopPage: React.FC = () => {
  // WhatsApp catalogue link
  const whatsappCatalogueLink = "https://wa.me/c/263783827570"; // Replace with your actual link

  return (
    <div>
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh] text-center"
        style={{
          backgroundImage: "url('/online-store.jpg')", // Update the path to your image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <motion.h1
            className="text-white text-4xl sm:text-5xl font-bold ml-1 mr-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Ngaatec Online Store
          </motion.h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 sm:px-8">
        {/* WhatsApp Catalogue Section */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Our Products Are Exclusively on WhatsApp
          </h2>
          <p className="text-gray-600 mb-6">
            To explore our full product catalogue, please visit our WhatsApp store.
          </p>
          <a
            href={whatsappCatalogueLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition"
          >
            Open WhatsApp Catalogue
          </a>
        </section>
      </main>
    </div>
  );
};

export default ShopPage;