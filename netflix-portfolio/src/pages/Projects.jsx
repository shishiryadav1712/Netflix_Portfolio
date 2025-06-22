import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useProfile from "../hooks/useProfile";

import cartverse from "../assets/cartverse.png";
import tcc from "../assets/tcc.png";
import women from "../assets/womensafety.JPG";
import pet from "../assets/pet.png";
import admin from "../assets/admin.png";
import oss from "../assets/osscheduler.png";

const ICONS = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  spring:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  postgres:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  tailwind:
    "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  android:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
};

const projects = [
  {
    title: "CartVerse – Scalable eCommerce System",
    description:
      "Production-grade backend using microservices with secure authentication & modular deployment.",
    tech: ["java", "spring", "postgres"],
    img: cartverse,
    link: "https://github.com/shishiryadav1712/CartVerse",
  },
  {
    title: "Time Complexity Calculator",
    description:
      "Web-based visualizer for analyzing real-time algorithmic time complexity.",
    tech: ["javascript", "python"],
    img: tcc,
    link: "https://github.com/AlgoGauge-Org/AlgoGauge",
  },
  {
    title: "WomenSafety Android App",
    description:
      "Emergency app with live GPS tracking & automated guardian alerts.",
    tech: ["java", "android"],
    img: women,
    link: "https://github.com/shishiryadav1712/WomenSafety",
  },
  {
    title: "Virtual Pet Consultation Platform",
    description:
      "Responsive platform enabling virtual vet consultations using Firebase & React.",
    tech: ["react", "firebase", "tailwind"],
    img: pet,
    link: "https://github.com/shishiryadav1712/ApexVets",
  },
  {
    title: "The OnlineStore Admin System",
    description:
      "Backend admin dashboard using design patterns, Servlets, and Java.",
    tech: ["java"],
    img: admin,
    link: "https://github.com/shishiryadav1712/TheOnlineStore",
  },
  {
    title: "OSScheduler Simulator & Custom Shell",
    description:
      "Simulated CPU scheduling with custom Unix shell for 50+ commands.",
    tech: ["c", "linux"],
    img: oss,
    link: "https://github.com/shishiryadav1712/Operating_Systems_Simple_Shell",
  },
];

const heading = "Projects";

const Projects = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { avatar, getNavLinks, goHome, goToDashboard } = useProfile();

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -500 : 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 relative">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#111] text-white z-50 px-4 py-3 flex items-center justify-between">
        <div
          onClick={goHome}
          className="text-red-600 text-xl font-bold tracking-wide cursor-pointer"
        >
          SHISHIR YADAV
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-6 font-medium text-sm">
          {getNavLinks().map(({ label, path }) => (
            <span
              key={label}
              onClick={() => navigate(path)}
              className="hover:text-red-400 cursor-pointer"
            >
              {label}
            </span>
          ))}
        </nav>

        {/* Mobile Avatar + Menu */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
          <div
            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
            onClick={goToDashboard}
            title="Go to Home"
          >
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 w-full bg-[#111] flex flex-col items-center gap-4 py-4 z-[100] shadow-md">
          {getNavLinks().map(({ label, path }) => (
            <span
              key={label}
              onClick={() => navigate(path)}
              className="hover:text-red-400 cursor-pointer"
            >
              {label}
            </span>
          ))}
        </div>
      )}

      {/* Animated Heading */}
      <motion.h1
        className="text-center flex justify-center flex-wrap font-extrabold text-4xl md:text-5xl mb-12 tracking-wide pt-24"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {[...heading].map((c, i) =>
          c === " " ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <motion.span
              key={i}
              className="text-[#e50914]"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 500 }}
              style={{ textShadow: "0 0 6px #e50914, 0 0 1px #e50914" }}
            >
              {c}
            </motion.span>
          )
        )}
      </motion.h1>

      {/* Scroll Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-[#111] rounded-full hover:bg-[#e50914] transition"
      >
        <FaChevronLeft size={22} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-[#111] rounded-full hover:bg-[#e50914] transition"
      >
        <FaChevronRight size={22} />
      </button>

      {/* Project Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-10 pb-4 scroll-smooth snap-x snap-mandatory overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="snap-center flex-shrink-0 w-[90vw] max-w-[460px] h-[660px] bg-[#1c1c1c] border border-gray-700 rounded-xl overflow-hidden group"
          >
            <div className="w-full h-[320px] bg-black p-4 flex items-center justify-center rounded-t-xl">
              <div className="bg-[#111] p-1 rounded-lg w-full h-full flex items-center justify-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
            <div className="p-5 flex flex-col justify-between h-[calc(100%-320px)]">
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <motion.img
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-8 h-8"
                      src={ICONS[tech]}
                      alt={tech}
                      key={i}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#e50914] hover:text-white transition"
                >
                  <FiExternalLink />
                  <span>Project Link</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default Projects;
