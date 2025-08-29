"use client";

import React from "react";
import { motion } from "framer-motion";

const whatsappCatalogueLink = "https://wa.me/c/263778963038";

export default function ShopPage() {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[50vh] text-center"
        style={{ backgroundImage: "url('/online_store.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <motion.h1
            className="text-white text-4xl sm:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Ngaatec Online Store
          </motion.h1>
        </div>
      </header>

      {/* WhatsApp Section */}
      <main className="py-12 px-4 sm:px-8 bg-black opacity-95 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Our Products Are Exclusively on WhatsApp
        </h2>
        <p className="mb-6">
          To explore our full product catalogue, please visit our WhatsApp store.
        </p>
        <a
          href={whatsappCatalogueLink}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 rounded-lg bg-white hover:bg-[#212121] hover:text-white text-black font-medium shadow-md transition"
        >
          Open WhatsApp Catalogue
        </a>
      </main>
    </div>
  );
}
