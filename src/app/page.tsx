"use client";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left mb-16">
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 border-4 border-brown-300 rounded-lg overflow-hidden mb-4">
            <Image
              src="/background-experiences.jpg"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#2c2205] mb-4">
              SOFTWARE DEVELOPER
            </h1>
            <p className="font-mono text-[#2c2205] leading-relaxed text-sm">
            Hello! I&apos;m{" "}
              <span className="text-yellow-600 font-semibold">Khushi</span>, a
              final-year B.Tech undergrad at Galgotias College of Engineering &
              Technology, majoring in Computer Science and Engineering (Artificial
              Intelligence).
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* SKILLS */}
        <section className="bg-gray-100 rounded-xl shadow-md border border-gray-200 p-6 hover:bg-gray-200 active:bg-gray-300 transition-colors cursor-pointer">
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-4 tracking-wide">
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-12 h-12" />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="bg-gray-100 rounded-xl shadow-md border border-gray-200 p-6 hover:bg-gray-200 active:bg-gray-300 transition-colors cursor-pointer">
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-4 tracking-wide">
            EXPERIENCE
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#2c2205] rounded-full mt-2" />
              <span className="text-gray-700">Intern at ISSA, DRDO (Jul 2025 - Present)</span>
            </li>
          </ul>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="bg-gray-100 rounded-xl shadow-md border border-gray-200 p-6 hover:bg-gray-200 active:bg-gray-300 transition-colors cursor-pointer">
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-4 tracking-wide">
            ACHIEVEMENTS & CERTIFICATES
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#2c2205]">
                    Google Cloud Certificates
                  </span>
                  <a
                    href="https://www.cloudskillsboost.google/public_profiles/bbdc34e7-7545-4589-9a78-d36445c3aa60"
                    target="_blank"
                    className="text-blue-600 text-sm hover:underline flex items-center gap-1"
                  >
                    🔗 Link
                  </a>
                </div>
                <p className="text-sm text-gray-600">Issued 2024</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#2c2205]">
                    GFG Solve For India Hackathon 2023
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Won 1st place in the GFG Solve For India Hackathon 2024
                  (College Level)
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#2c2205]">
                    Oracle Academy Certificate
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Database Programming with SQL | Python Programming
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#2c2205]">
                    Open Source Contributor
                  </span>
                  <a
                    href="https://github.com/khushipy"
                    target="_blank"
                    className="text-blue-600 text-sm hover:underline flex items-center gap-1"
                  >
                    🔗 GitHub
                  </a>
                </div>
                <p className="text-sm text-gray-600">
                  Contributed to multiple OSS projects
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-gray-100 rounded-xl shadow-md border border-gray-200 p-6 hover:bg-gray-200 active:bg-gray-300 transition-colors cursor-pointer">
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-6 tracking-wide">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Project 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-[#2c2205] mb-2 text-sm">SmartCivics</h3>
              <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                AI-powered learning of constitution using RAG with LangChain and GROQ.
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://smartcivics-dyxmv9wjjbz3fsw65jwuld.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-[#d2b2a1] text-white text-xs rounded hover:bg-[#c4a085] transition-colors"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-2 h-2" />
                  Demo
                </a>
                <a
                  href="https://github.com/khushipy/SmartCivics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 border border-[#d2b2a1] text-[#d2b2a1] text-xs rounded hover:bg-[#d2b2a1] hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-2 h-2" />
                  Code
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-[#2c2205] mb-2 text-sm">LoveBomb</h3>
              <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                Just another way to LoveBomb with creative expressions and interactions.
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://github.com/khushipy/Lovebomb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-[#d2b2a1] text-white text-xs rounded hover:bg-[#c4a085] transition-colors"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-2 h-2" />
                  Demo
                </a>
                <a
                  href="https://github.com/khushipy/Lovebomb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 border border-[#d2b2a1] text-[#d2b2a1] text-xs rounded hover:bg-[#d2b2a1] hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-2 h-2" />
                  Code
                </a>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-[#2c2205] mb-2 text-sm">Search API</h3>
              <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                High-performance search API built with modern backend technologies.
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://github.com/khushipy/search-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-[#d2b2a1] text-white text-xs rounded hover:bg-[#c4a085] transition-colors"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-2 h-2" />
                  Demo
                </a>
                <a
                  href="https://github.com/khushipy/search-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 border border-[#d2b2a1] text-[#d2b2a1] text-xs rounded hover:bg-[#d2b2a1] hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-2 h-2" />
                  Code
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-[#2c2205] mb-2 text-sm">Secure File Sharing API</h3>
              <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                FastAPI-based secure file sharing system with Postman integration.
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://github.com/khushipy/secure-file-sharing-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-[#d2b2a1] text-white text-xs rounded hover:bg-[#c4a085] transition-colors"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-2 h-2" />
                  Demo
                </a>
                <a
                  href="https://github.com/khushipy/secure-file-sharing-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 border border-[#d2b2a1] text-[#d2b2a1] text-xs rounded hover:bg-[#d2b2a1] hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-2 h-2" />
                  Code
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-[#2c2205] mb-2 text-sm">School Timetable SQL</h3>
              <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                SQL-based timetable creation and management system for schools.
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://github.com/khushipy/School-Timetable-SQL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-[#d2b2a1] text-white text-xs rounded hover:bg-[#c4a085] transition-colors"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-2 h-2" />
                  Demo
                </a>
                <a
                  href="https://github.com/khushipy/School-Timetable-SQL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 border border-[#d2b2a1] text-[#d2b2a1] text-xs rounded hover:bg-[#d2b2a1] hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-2 h-2" />
                  Code
                </a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-[#2c2205] mb-2 text-sm">Ticket Booking</h3>
              <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                Comprehensive ticket booking system with reservation management.
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://github.com/khushipy/ticket-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-[#d2b2a1] text-white text-xs rounded hover:bg-[#c4a085] transition-colors"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-2 h-2" />
                  Demo
                </a>
                <a
                  href="https://github.com/khushipy/ticket-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 border border-[#d2b2a1] text-[#d2b2a1] text-xs rounded hover:bg-[#d2b2a1] hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-2 h-2" />
                  Code
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT ME */}
        <section id="contact" className="bg-gray-100 rounded-xl shadow-md border border-gray-200 p-6 text-center hover:bg-gray-200 active:bg-gray-300 transition-colors cursor-pointer">
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-6 tracking-wide">
          LET&apos;S COLLABORATE
          </h2>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-6 text-base">
            Interested in working together? Let&apos;s build something amazing!
            </p>
            
            <a
              href="mailto:khushipaltwt@gmail.com?subject=Collaboration Opportunity"
              className="inline-flex items-center gap-3 bg-[#d2b2a1] text-white px-6 py-3 rounded-lg hover:bg-[#c4a085] transition-colors font-medium mb-6 text-sm"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              Send me an email
            </a>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/khushipal08/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors group"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com/khushipy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors group"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://leetcode.com/u/KhushiPal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors group"
                title="LeetCode"
              >
                <span className="text-white font-bold text-sm">LC</span>
              </a>
              <a
                href="https://x.com/KiwiKiwiuiuio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors group"
                title="Twitter/X"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/khsh08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors group"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="text-center py-4 mt-8 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          &copy; 2025 All rights reserved. Made by{" "}
          <span className="text-[#d2b2a1] font-semibold">Khushi</span>
        </p>
      </footer>
    </div>
  );
}
