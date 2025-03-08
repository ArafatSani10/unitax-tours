import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Banner Section */}
            <div className="relative">
                <img
                    src="https://img.freepik.com/free-vector/travel-facebook-post-with-plane-drawing_23-2149350885.jpg?t=st=1741427865~exp=1741431465~hmac=6767e7a91082968f4812eb55077c25d378aa6ebfe444a1f1a7cb8ca4a61fb48a&w=1380" // Replace with your preferred banner image URL
                    alt="Travel Banner"
                    className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end items-center">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Let’s Make Your Dream Journey Happen!
                    </h1>
                    <p className="text-lg text-white">
                        Explore beautiful destinations with our tailor-made tour plans.
                    </p>
                </div>
            </div>

            {/* Main Form Section */}
            <motion.div
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                <p className="text-center text-gray-600 mb-8">
                    Have questions? Feel free to reach out. We’re here to help with your travel plans!
                </p>
                <form className="space-y-6">
                    {/* Name Field */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-500 mx-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 14a4 4 0 01-8 0m8 0a4 4 0 01-8 0m8 0c0-1.11.9-2 2-2h2M2 10c0 1.11.9 2 2 2h1m15-5a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            className="flex-1 p-2 focus:outline-none"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-500 mx-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 12h2c1.11 0 2-.9 2-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v6c0 1.11.9 2 2 2h2m2 0h4m4 0h.01"
                            />
                        </svg>
                        <input
                            type="email"
                            className="flex-1 p-2 focus:outline-none"
                            placeholder="Your Email"
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-500 mx-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h18m-2 16v2a4 4 0 01-8 0v-2m8-1H5m4-6a2 2 0 104 0"
                            />
                        </svg>
                        <input
                            type="tel"
                            className="flex-1 p-2 focus:outline-none"
                            placeholder="Your Phone Number"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-500 mx-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7a4 4 0 01-4-4m12 4a4 4 0 01-4 4m-4-4a4 4 0 100 8 8 8 0 008-8z"
                            />
                        </svg>
                        <textarea
                            className="flex-1 p-2 focus:outline-none"
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactUs;
