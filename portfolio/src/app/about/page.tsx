"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-extrabold text-purple-700 mb-4">About Me</h1>
      <p className="text-lg text-gray-700">
        Hi! I’m <span className="font-bold text-pink-500">[Your Name]</span>, a creative soul passionate about art, code, and bringing ideas to life. I love blending technology with creativity to craft unique digital experiences.
      </p>
      <p className="italic text-purple-400">“Art is not what you see, but what you make others see.”</p>
    </motion.section>
  );
} 