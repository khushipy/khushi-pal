"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-extrabold text-purple-700 mb-4">Contact</h1>
      <p className="text-lg text-gray-700">
        Want to collaborate or just say hi? <br />
        <span className="font-bold text-pink-500">Let’s connect and create something beautiful together!</span>
      </p>
      <a
        href="mailto:your@email.com"
        className="inline-block mt-4 px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors"
      >
        Email Me
      </a>
    </motion.section>
  );
} 