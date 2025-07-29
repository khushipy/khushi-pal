"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Panel - Photo + Intro */}
      <div className="flex flex-col items-start text-left gap-4">
        <div className="relative w-72 h-72 border-4 border-brown-300 rounded-lg overflow-hidden translate-x-6">
          <Image
            src="/background-experiences.jpg"
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-[#2c2205] translate-x-6">
          SOFTWARE DEVELOPER
        </h1>
        <p className="text-[#17223b] text-sm max-w-[420px] font-serif translate-x-6">
          I’m a BTech student with a passion for coding and problem solving.
          This portfolio showcases my journey and creative work.
        </p>
      </div>

      {/* Right Panel - Main Content */}
      <div className="flex flex-col gap-8 text-sm text-[#17223b]">
        {/* About (No Title Needed) */}
        <section>
          <h2 className="text-sm font-bold font-mono text-yellow-600 tracking-widest mb-2">
            ABOUT ME
          </h2>
          <p className="max-w-[220px] font-mono text-[#2c2205]">
            Hello! I’m{" "}
            <span className="text-yellow-600 font-semibold">Peiwen</span>, a
            student at Ho Chi Minh University of Fine Art, majoring in
            Multimedia Design. I enjoy bringing imagination to life through
            visual design and illustration.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl font-bold text-[#2c2205] mb-1">Experience</h2>
          <ul className="list-disc list-inside">
            <li>Illustrator at Huta Chan Studio (2020–2023)</li>
            <li>Freelance Illustration Artist (2022–Present)</li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-bold text-[#2c2205] mb-1">Projects</h2>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Artsy Portfolio</span> – A
              creative site to showcase my work
            </li>
            <li>
              <span className="font-semibold">Interactive Gallery</span> – A
              digital art gallery experience
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-bold text-[#2c2205] mb-1">Contact Me</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:bongart0608@gmail.com"
              className="underline text-yellow-700"
            >
              bongart0608@gmail.com
            </a>
          </p>
          <p>
            ArtStation:{" "}
            <a
              href="https://artstation.com/bongart0608"
              target="_blank"
              className="underline text-yellow-700"
            >
              artstation.com/bongart0608
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
