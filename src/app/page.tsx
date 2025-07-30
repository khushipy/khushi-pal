"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
      {/* Left Panel */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 border-4 border-brown-300 rounded-lg overflow-hidden mb-4">
          <Image
            src="/background-experiences.jpg"
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-[#2c2205] mb-3">
          SOFTWARE DEVELOPER
        </h1>
        <p className="text-[#17223b] text-sm sm:text-base max-w-[420px] font-serif">
          Python Backend & Full-Stack Developer skilled in building secure APIs,
          scalable web apps, and AI tools.
          <br />
          Open-source contributor with experience in FastAPI, MERN, and
          real-time systems.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
          <a
            href="#"
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 text-white text-sm font-bold"
          >
            Li
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 text-white text-sm font-bold"
          >
            Git
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 text-white text-sm font-bold"
          >
            Tw
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 text-white text-sm font-bold"
          >
            Ig
          </a>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col gap-6 sm:gap-6 text-sm sm:text-base text-[#17223b] w-full lg:flex-1">
        {/* ABOUT */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-3 tracking-wide">
            ABOUT ME
          </h2>
          <p className="font-mono text-[#2c2205] leading-relaxed">
            Hello! I'm{" "}
            <span className="text-yellow-600 font-semibold">Khushi</span>, a
            final-year B.Tech undergrad at Galgotias College of Engineering &
            Technology, majoring in Computer Science and Engineering (Artificial
            Intelligence).
          </p>
        </section>

        {/* TECH STACK */}
        <section className="pb-0 mb-0">
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-4 tracking-wide">
            TECH STACK
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1">
            {/* Example Tech (repeat for others) */}
            {[
              ["JS", "JavaScript", "bg-yellow-400"],
              ["TS", "TypeScript", "bg-blue-500"],
              ["R", "React", "bg-cyan-500"],
              ["Nx", "Next.js", "bg-black"],
              ["Py", "Python", "bg-blue-600"],
              ["Nd", "Node.js", "bg-green-600"],
              ["FA", "FastAPI", "bg-red-500"],
              ["Mg", "MongoDB", "bg-green-500"],
              ["PG", "PostgreSQL", "bg-blue-700"],
              ["Git", "Git", "bg-orange-500"],
              ["Dk", "Docker", "bg-blue-400"],
              ["AI", "AI/ML", "bg-purple-600"],
            ].map(([abbr, label, color]) => (
              <div
                key={abbr}
                className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div
                  className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-sm">{abbr}</span>
                </div>
                <span className="text-xs font-medium text-[#2c2205]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="-mt-2">
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-3 tracking-wide">
            EXPERIENCE
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-[#2c2205] rounded-full mt-2" />
              <span>Intern at ISSA, DRDO (Jul 2025 - Present)</span>
            </li>
          </ul>
        </section>

        {/* ACHIEVEMENTS */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-3 tracking-wide">
            ACHIEVEMENTS & CERTIFICATES
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
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

            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#2c2205]">
                    GFG Sovle For India Hackathon 2023
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Won 1st place in the GFG Solve For India Hackathon 2024
                  (College Level)
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
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

            <li className="flex items-start gap-2">
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
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-3 tracking-wide">
            PROJECTS
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#2c2205] mb-1">SmartCivics</h3>
              <p className="text-sm text-gray-600 mb-3">
                Legal chatbot using RAG with LangChain | Hugging Face | GROQ.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://smartcivics-dyxmv9wjjbz3fsw65jwuld.streamlit.app/"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#2c2205] text-[#2c2205] text-sm rounded-md hover:bg-[#2c2205] hover:text-white transition"
                >
                  🌐 Live Demo
                </a>
                <a
                  href="https://github.com/khushipy/SmartCivics"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#2c2205] text-[#2c2205] text-sm rounded-md hover:bg-[#2c2205] hover:text-white transition"
                >
                  📂 GitHub
                </a>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#2c2205] mb-1">Project 2</h3>
              <p className="text-sm text-gray-600 mb-3">
                Add your second project description here.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#2c2205] text-[#2c2205] text-sm rounded-md hover:bg-[#2c2205] hover:text-white transition"
                >
                  🌐 Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#2c2205] text-[#2c2205] text-sm rounded-md hover:bg-[#2c2205] hover:text-white transition"
                >
                  📂 GitHub
                </a>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#2c2205] mb-1">Project 3</h3>
              <p className="text-sm text-gray-600 mb-3">
                Add your third project description here.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#2c2205] text-[#2c2205] text-sm rounded-md hover:bg-[#2c2205] hover:text-white transition"
                >
                  🌐 Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#2c2205] text-[#2c2205] text-sm rounded-md hover:bg-[#2c2205] hover:text-white transition"
                >
                  📂 GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT ME */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-[#2c2205] mb-4 tracking-wide">
            CONTACT ME
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-4">
              Have a project in mind? Let's discuss how we can work together!
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2c2205] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2c2205] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#2c2205] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2c2205] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2c2205] text-white py-2 px-4 rounded-md hover:bg-[#1a1503] transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
            
            {/* Quick Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Or reach me directly:</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="mailto:your.email@example.com" className="text-[#2c2205] hover:underline">
                  📧 your.email@example.com
                </a>
                <a href="#" className="text-[#2c2205] hover:underline">
                  📱 +91 XXXXX XXXXX
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
