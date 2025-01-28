"use client";

import { useEffect, useState } from "react";

const Notification = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check if the user has already closed the notification
    useEffect(() => {
        if (!localStorage.getItem("notificationClosed")) {
            setIsVisible(true);
            document.body.style.overflow = "hidden"; // Disable scrolling
        }
        return () => {
            document.body.style.overflow = "auto"; // Enable scrolling when component unmounts
        };
    }, []);

    // Close the notification and store the preference
    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem("notificationClosed", "true");
        document.body.style.overflow = "auto"; // Enable scrolling
    };

    // Prevent scrolling and show a message
    const handleScroll = (e: Event) => {
        e.preventDefault();
        alert("Please visit the WhatsApp catalogue or close the notification first.");
    };

    useEffect(() => {
        if (isVisible) {
            window.addEventListener("scroll", handleScroll, { passive: false });
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible]);

    // Hide the component if it's not visible
    if (!isVisible) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => alert("Please visit the WhatsApp catalogue or close the notification first.")}
            ></div>
            <div
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg z-50"
                style={{
                    background: "linear-gradient(to right, #1e3a8a, #9333ea)", // Gradient background
                    color: "white",
                    maxWidth: "90%", // Responsive width
                    width: "600px", // Fixed max size
                }}
            >
                <div className="text-center">
                    {/* Heading */}
                    <h2 className="text-xl font-bold mb-2">Special Offer!</h2>

                    {/* Description */}
                    <p className="text-sm mb-4">
                        Check out our latest gadgets and accessories on special!
                    </p>

                    {/* Separator */}
                    <hr className="border-white/50 mb-4" />

                    {/* Call to Action */}
                    <a
                        href="https://wa.me/c/263783827570"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14.752 11.168l-2.59 5.396a1 1 0 01-1.812-.02l-1.176-2.774a12.042 12.042 0 00-1.21-2.91l-.154-.309a1.002 1.002 0 01.193-1.193l3.013-3.013a1.002 1.002 0 011.193-.193l.309.154c.993.489 1.9 1.18 2.91 2.211l2.774 1.176a1 1 0 01.02 1.812l-5.396 2.59z"
                            />
                        </svg>
                        Visit WhatsApp Catalogue
                    </a>
                </div>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-white bg-black/30 hover:bg-black/50 p-1 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Notification;
