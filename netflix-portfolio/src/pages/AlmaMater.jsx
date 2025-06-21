import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import purdue from "../assets/purdue.jpg";
import gitam from "../assets/gitam.jpg";

const institutions = [
  {
    logo: purdue,
    university: "Purdue University",
    degree: "M.S. in Computer Science",
    years: "2023 – 2025",
  },
  {
    logo: gitam,
    university: "GITAM, Vizag",
    degree: "B.Tech in Computer Science",
    years: "2017 – 2021",
  },
];

const title = "Alma Mater".split("");

const AlmaMater = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 relative">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#111] text-white z-50 px-4 py-3 flex items-center justify-between">
        <div
          onClick={() => navigate("/recruiter")}
          className="text-red-600 text-xl font-bold tracking-wide cursor-pointer"
        >
          SHISHIR YADAV
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-6 font-medium text-sm">
          <span
            onClick={() => navigate("/recruiter")}
            className="hover:text-red-400 cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => navigate("/experience")}
            className="hover:text-red-400 cursor-pointer"
          >
            Professional
          </span>
          <span
            onClick={() => navigate("/skills")}
            className="hover:text-red-400 cursor-pointer"
          >
            Skills
          </span>
          <span
            onClick={() => navigate("/project")}
            className="hover:text-red-400 cursor-pointer"
          >
            Projects
          </span>
          <span
            onClick={() => navigate("/contact-me")}
            className="hover:text-red-400 cursor-pointer"
          >
            Hire Me
          </span>
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
            onClick={() => navigate("/recruiter")}
            title="Go to Home"
          >
            <img
              src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 w-full bg-[#111] flex flex-col items-center gap-4 py-4 z-40">
          <span
            onClick={() => navigate("/recruiter")}
            className="hover:text-red-400 cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => navigate("/experience")}
            className="hover:text-red-400 cursor-pointer"
          >
            Professional
          </span>
          <span
            onClick={() => navigate("/skills")}
            className="hover:text-red-400 cursor-pointer"
          >
            Skills
          </span>
          <span
            onClick={() => navigate("/project")}
            className="hover:text-red-400 cursor-pointer"
          >
            Projects
          </span>
          <span
            onClick={() => navigate("/contact-me")}
            className="hover:text-red-400 cursor-pointer"
          >
            Hire Me
          </span>
        </div>
      )}

      {/* Animated Title */}
      <motion.h1
        className="relative z-10 flex justify-center flex-wrap text-center font-extrabold text-3xl md:text-5xl mb-16 tracking-wide pt-24"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {title.map((char, idx) => (
          <motion.span
            key={idx}
            className="text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              color: "#e50914",
              textShadow: "0 0 6px #e50914, 0 0 1px #e50914",
              marginRight: char === " " ? "0.3em" : "0",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Institution Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">
        {institutions.map((inst, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-[0_0_20px_6px_rgba(229,9,20,0.4)] transition duration-300"
          >
            <div className="w-full h-70 overflow-hidden rounded-t-xl bg-[#111]">
              <img
                src={inst.logo}
                alt={inst.university}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1 text-white">
                {inst.university}
              </h3>
              <p className="text-md text-gray-300 mb-1">{inst.degree}</p>
              <p className="text-sm italic text-gray-500">{inst.years}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AlmaMater;
