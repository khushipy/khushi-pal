"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Artsy Portfolio", desc: "A creative portfolio website with animation and flair." },
  { title: "Generative Art", desc: "Exploring generative art with code and color." },
  { title: "Interactive Gallery", desc: "A playful, interactive art gallery experience." },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-4xl font-extrabold text-purple-700 mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-6 rounded-2xl shadow-lg border border-purple-200 hover:scale-105 transition-transform cursor-pointer"
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-2">{proj.title}</h2>
            <p className="text-gray-700">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 