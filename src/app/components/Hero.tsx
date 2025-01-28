"use client";

import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaWhatsapp, FaVideo, FaFingerprint, FaDoorOpen, FaSatelliteDish, FaArrowRight, FaWrench, FaNetworkWired, FaGlobe, FaSpinner } from "react-icons/fa";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ ] = useState(false);
  const slides = [
    {
      image: '/computer_repair.webp',
      title: 'Computer Repair',
      description: 'Expert computer repair services to keep your devices running smoothly.',
      link: '/services',
    },
    {
      image: '/about_us.webp',
      title: 'About Us',
      description: 'Learn more about our mission and values at Ngaatec.',
      link: '/about',
    },
    {
      image: '/online_store.webp',
      title: 'Visit Our Online Store',
      description: 'Shop cutting-edge technology and accessories.',
      link: '/shop',
    },
  ];

  // Ref and inView to track when the Hero section is visible
  const heroRef = useRef(null);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);


    const reasons = [
      'Reliable and professional services',
      'Customer-centric approach',
      'Innovative solutions tailored to your needs',
      'Affordable pricing',
    ];
    
    const partners = [
      {
        Image: "/britvish_logo.webp",
        name: "Britvish Pvt Ltd",
        details: "We supply computers, printers, and offer tech support to Britvish Company.",
        socials: {
          facebook: "https://www.facebook.com/profile.php?id=100094287683945",
        },
        callNumber: "+263772722901",
        whatsappNumber: "+263772722901",
      },
      {
        Image: "/vs_logo.webp",
        name: "VS Security",
        details: "Supplier of antivirus systems to VS Security, ensuring their cybersecurity.",
        reference: "https://vssecurity.co.zw",
        socials: {
          facebook: "https://www.facebook.com/p/VS-Security-Pvt-Ltd-100071801123239/",
        },
        callNumber: "+263773486486",
        whatsappNumber: "+263773486486",

      },
      {
        Image: "/kapstone_logo.webp",
        name: "Kapstone Holdings",
        details: "Providing graphic design services to Kapstone Packaging, enhancing their brand image.",
        socials: {
          facebook: "https://www.facebook.com/profile.php?id=100063972194609",
        },
        callNumber: "+263778965395",
        whatsappNumber: "+263778965395",
      },
      {
        Image: "/arosume_logo.webp",
        name: "Arosume Properties",
        details: "Providing CCTV, boom gate and biometric tech security services to Arosume Properties (Carrick Creagh Estates).",
        reference: "https://arosume.co.zw",
        socials: {
          facebook: "https://www.facebook.com/profile.php?id=100032083766446",
        },
        callNumber: "+263242884151",
        whatsappNumber: "+263779403646",
      },
      {
        Image: "/gurus_logo.webp",
        name: "Gurus Security Technologies",
        details: "Providing CCTV and remote monitoring services to Gurus Security Technogies PVT LTD.",
        reference: "https://gurustech.co.zw",
        socials: {
          facebook: "https://www.facebook.com/profile.php?id=100092300677337",
        },
        callNumber: "+263242571258",
        whatsappNumber: "+263783910547",
      },
      {
        Image: "/mjm_logo.webp",
        name: "MJM Leatherware",
        details: "Providing graphic design services to MJM Leatherware (DEHWEAR), enhancing their brand image.",
        socials: {
          facebook: "https://www.facebook.com/profile.php?id=100089461593337",
        },
        callNumber: "+263718119824",
        whatsappNumber: "+263718119824",
      },
      {
        Image: "/shipify_logo.webp",
        name: "Shipify International",
        details: "Providing graphic design services to Kapstone Packaging, enhancing their brand image.",
        callNumber: "+263775804681",
        whatsappNumber: "+263775804681",
      },
    ];
  
    interface Partner {
      Image: string;
      name: string;
      details: string;
      reference?: string;
      callNumber?: string;
      whatsappNumber?: string;
      socials?: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
      };
    }

    const modalContactRef = useRef<HTMLDivElement>(null);

    const modalRootRef = useRef<ReactDOM.Root | null>(null);

    const closeModal = () => {
      const modal = document.getElementById("popup-modal");
      if (modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
      }
    };
  
    const openModal = (partner: Partner) => {
      const modal = document.getElementById("popup-modal");
      if (modal) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
      }
  
      const modalTitle = document.getElementById("modal-title");
      if (modalTitle) {
        modalTitle.innerText = partner.name;
      }
  
      const modalDetails = document.getElementById("modal-details");
      if (modalDetails) {
        modalDetails.innerText = partner.details;
      }
  
      const modalLink = document.getElementById("modal-link");
      if (modalLink) {
        if (partner.reference) {
          modalLink.setAttribute("href", partner.reference);
          modalLink.innerText = "Visit Website";
        } else {
          modalLink.innerText = "Website not available";
          modalLink.removeAttribute("href");
        }
      }
  
      if (modalContactRef.current) {
        const contactElements = (
          <div className="flex flex-col items-start gap-2">
            {partner.callNumber && (
              <a href={`tel:${partner.callNumber}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <FaPhone /> {partner.callNumber}
              </a>
            )}
            {partner.whatsappNumber && (
              <a href={`https://wa.me/${partner.whatsappNumber.replace("+", "")}`} className="flex items-center gap-2 text-gray-600 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> {partner.whatsappNumber}
              </a>
            )}
            <div className="flex gap-4">
              {partner.socials?.facebook && (
                <a href={partner.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                  <FaFacebook />
                </a>
              )}
              {partner.socials?.twitter && (
                <a href={partner.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                  <FaTwitter />
                </a>
              )}
              {partner.socials?.linkedin && (
                <a href={partner.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
        );
        if (!modalRootRef.current) {
          modalRootRef.current = ReactDOM.createRoot(modalContactRef.current);
        }
        modalRootRef.current.render(contactElements);
      }
    };
  
    const ButtonWithLoading = ({ partner, openModal }: { partner: Partner, openModal: (partner: Partner) => void }) => {
      const [isLoading, setIsLoading] = useState(false);
  
      const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          openModal(partner);
        }, 1000);
      };
  
      return (
        <button
          className="bg-blue-600 text-sm text-white px-4 py-2 rounded-md mt-1 hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <FaSpinner className="animate-spin text-white" />
          ) : (
            <>
              Learn More
              <FaArrowRight className="ml-2" />
            </>
          )}
        </button>
      );
    };
  
  return (
    <div>

<Head>
        <title>Ngaatec</title>
        <meta name="description" content="Ngaatec." />
        <meta property="og:title" content="Home - Ngaatec" />
        <meta property="og:description" content="Welcome to Ngaatec" />
      </Head>

      {/* Hero Section */}
      <section
      ref={heroRef}
      className="relative h-screen w-full"
    >

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full object-cover bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}

        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Slide Content */}
      <div className="container mx-auto text-center text-white relative z-10 flex flex-col justify-center items-center h-full">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.p
          className="text-lg mt-4 max-w-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {slides[currentSlide].description}
        </motion.p>
        <motion.a
          href={slides[currentSlide].link}
          className="btn-primary mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transform transition duration-500 hover:scale-105 active:scale-95 shadow-lg flex items-center space-x-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Learn More
        </motion.a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </section>

    {/* Services Section */}
    <section className="services py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Ngaatec, we take pride in delivering reliable and innovative solutions tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
          {[
            {
              title: "Security Solutions",
              description:
                "Comprehensive security systems including intercom, CCTV, biometric access, and electric gates.",
              icon: <FaVideo size={36} />,
            },
            {
              title: "Repair & Maintenance",
              description:
                "Expert repair and maintenance services for all your devices and systems.",
              icon: <FaWrench size={36} />,
            },
            {
              title: "Technology Solutions",
              description:
                "Custom web development and tailored technology solutions for your business.",
              icon: <FaGlobe size={36} />,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="service-card p-6 bg-white shadow-lg rounded-xl transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-blue-500 text-white p-4">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



      <section className="about-us relative bg-gray-900 text-white py-16 overflow-hidden">
      
      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4 mr-4 ml-4">
          Are you looking for a Partner to Help You Grow?
        </h2>
        <p className="text-lg mx-auto mb-6 mr-4 ml-4">
          Ngaatec is dedicated to providing innovative technology solutions for individuals and businesses alike.
        </p>
        <a href="/Ngaatec-Private-Limited-Company-Profile.pdf">
        <button className="mr-4 ml-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
          Discover the Answer: Download Our Company Profile
        </button>
        </a>

      </div>
    </section>

      <section className="why-choose py-16 bg-blue-50 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Reasons */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl font-bold mb-4 text-center md:text-left mr-4 ml-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Why Choose Ngaatec?
          </motion.h2>
          {/* Subheading */}
          <motion.p
            className="text-lg text-gray-600 mb-6 text-center md:text-left mr-4 ml-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Discover why Ngaatec stands out as your trusted partner for innovative and reliable solutions.
          </motion.p>
          {/* Reasons List */}
          <motion.ul
            className="text-lg space-y-6 mr-4 ml-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {reasons.map((reason, index) => (
              <motion.li
                key={index}
                className="relative pl-10 before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-6 before:h-6 before:rounded-full before:bg-blue-500 before:-translate-y-1/2 before:animate-pulse"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + index * 0.2,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
              >
                {reason}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="flex-1 flex justify-center items-center p-6 relative group"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Image
              src="/why_us.webp"
              alt="Ngaatec illustration"
              width={500}
              height={500}
              className="rounded-lg shadow-lg max-w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-1 rounded-xl border-2 border-transparent group-hover:border-blue-500 animate-border"></div>
          </div>
        </motion.div>
      </div>
    </section>


    <section className="projects py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 mx-4">Companies We Work With</h2>
        <p className="text-lg mb-8 text-gray-600 mx-4">
          We are proud to have delivered exceptional services and solutions to these esteemed clients.
        </p>

        {/* Swiper Carousel */}
        <Swiper 
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={1} 
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mx-4"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
                <div className="project-card p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl mx-2">
                <Image
                  className="w-32 h-32 object-contain mx-auto mb-1"
                  src={partner.Image}
                  alt={partner.name}
                  width={500}
                  height={500}
                />
                <h3 className="text-xl font-semibold mb-1">{partner.name}</h3>
                <div className="flex justify-center">
                  <ButtonWithLoading partner={partner} openModal={openModal} />
                </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <div
  id="popup-modal"
  className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center hidden z-50"
>
  <div className="bg-white max-w-lg w-full p-6  mr-4 ml-4 rounded-lg shadow-lg relative">
    {/* Close Button */}
    <button
      className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl focus:outline-none"
      onClick={closeModal}
    >
      ✖
    </button>

    {/* Modal Content */}
    <div className="text-center">
      <h3 id="modal-title" className="text-2xl font-bold mb-2"></h3>
      <p id="modal-details" className="text-gray-600 mb-2"></p>
      <a
        id="modal-link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Visit Website
      </a>
      {/* Contact Info */}
      <div id="modal-contact" ref={modalContactRef} className="mt-2"></div>
    </div>
  </div>
</div>

    </section>


    </div>
  );
}
