import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useProfile from "../hooks/useProfile";
import sapiens from "../assets/sapiens.jpg";
import fountainhead from "../assets/fountainhead.jpg";
import thinkGrowRich from "../assets/thinkgrowrich.jpg";
import essentialism from "../assets/essentialism.jpg";

const books = [
  {
    cover: sapiens,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    desc: "A powerful journey through human history, offering deep insights into our cognitive evolution, societal structures, and future trajectory.",
  },
  {
    cover: fountainhead,
    title: "The Fountainhead",
    author: "Ayn Rand",
    desc: "A bold narrative of individualism vs. conformity in architecture and life, celebrating creative independence and self-belief.",
  },
  {
    cover: thinkGrowRich,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    desc: "One of the most influential self-help classics, teaching principles of desire, faith, persistence, and definiteness of purpose.",
  },
  {
    cover: essentialism,
    title: "Essentialism",
    author: "Greg McKeown",
    desc: "A guide to doing less but better—cutting out the noise and focusing only on what truly matters in work and life.",
  },
];

const title = "Great Reads".split("");

const GreatReads = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { avatar, goHome } = useProfile();

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-4 relative overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#111] text-white z-[1001] px-4 py-3 flex items-center justify-between">
        <div
          onClick={goHome}
          className="text-red-600 text-xl font-bold tracking-wide cursor-pointer"
        >
          SHISHIR YADAV
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-6 font-medium text-sm">
          <span onClick={goHome} className="hover:text-red-400 cursor-pointer">
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
            onClick={goHome}
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

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 w-full bg-[#111] flex flex-col items-center gap-4 py-4 z-[1000] shadow-lg backdrop-blur-md max-h-[calc(100vh-56px)] overflow-y-auto">
          <span onClick={goHome} className="hover:text-red-400 cursor-pointer">
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
        className="relative z-10 flex justify-center flex-wrap text-center font-extrabold text-3xl md:text-5xl mb-16 tracking-wide"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
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

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative pb-16">
        {books.map((book, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-[0_0_20px_6px_rgba(229,9,20,0.4)] transition duration-300"
          >
            <div className="w-full h-72 overflow-hidden rounded-t-xl bg-[#111]">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1 text-white">
                {book.title}
              </h3>
              <p className="text-md text-gray-300 mb-1">{book.author}</p>
              <p className="text-sm italic text-gray-500">{book.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GreatReads;
