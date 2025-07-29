"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center"
    >
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg"
      >
        Welcome to My Artsy Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl sm:text-2xl text-purple-700 max-w-2xl"
      >
        I blend <span className="font-bold text-pink-500">art</span> and <span className="font-bold text-indigo-500">code</span> to create unique digital experiences. Explore my world of creativity, color, and code!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex gap-4 justify-center mt-4"
      >
        <a
          href="/projects"
          className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors font-bold text-lg"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-2 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-colors font-bold text-lg"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
}
