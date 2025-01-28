"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SocialsPage = () => {
  const socials = [
    {
      platform: "LinkedIn",
      followers: "2.0K+",
      link: "https://www.linkedin.com/company/91177843",
    },
    {
      platform: "X (Twitter)",
      followers: "700",
      link: "https://x.com/ngaatec",
    },
    {
      platform: "Instagram",
      followers: "368",
      link: "https://www.instagram.com/ngaatec/",
    },
    {
      platform: "Facebook",
      followers: "89",
      link: "https://www.facebook.com/profile.php?id=61558544541726",
    },
    {
      platform: "WhatsApp Channel",
      followers: "90",
      link: "https://whatsapp.com/channel/0029VaNYndRId7nHQYQ75n2F",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Socials
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">{social.platform}</h2>
              <p className="text-lg mb-4">
                {social.followers} Followers
              </p>
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Visit {social.platform}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialsPage;