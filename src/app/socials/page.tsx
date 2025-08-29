"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SocialsPage = () => {
  const socials = [
    {
      platform: "LinkedIn",
      followers: "2000+",
      link: "https://www.linkedin.com/company/91177843",
    },
    {
      platform: "X (Twitter)",
      followers: "700+",
      link: "https://x.com/ngaatec",
    },
    {
      platform: "Instagram",
      followers: "300+",
      link: "https://www.instagram.com/ngaatec/",
    },
    {
      platform: "Facebook",
      followers: "100+",
      link: "https://www.facebook.com/profile.php?id=61558544541726",
    },
    {
      platform: "WhatsApp Channel",
      followers: "25+",
      link: "https://whatsapp.com/channel/0029Vb6Wfe96GcGJgxGjSm0U",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
            <header
              className="relative bg-cover bg-center h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh] text-center"
              style={{
                backgroundImage: "url('/1738321665221.webp')", // Update the path to your image
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                <motion.h1
                  className="text-white text-4xl sm:text-5xl font-bold ml-1 mr-1"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Our Social Media Accounts and follower count
                </motion.h1>
              </div>
            </header>

      <div className="bg-black text-white mx-auto px-8 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <motion.div
              key={index}
              className="bg-[#212121] bg-opacity-30 border border-white rounded-lg shadow-lg overflow-hidden p-6 text-center"
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
                className="inline-block bg-white hover:bg-black hover:text-white border hover-border-white text-black font-semibold rounded-lg shadow-md transition px-6 py-2 rounded-lg"
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