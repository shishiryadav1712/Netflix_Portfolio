import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 font-sans relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-[#111] text-sm font-medium z-20">
        <div className="text-red-600 text-xl font-bold tracking-wide">
          SHISHIR YADAV
        </div>
        <nav className="hidden md:flex gap-6 text-white">
          <a href="#" className="hover:text-red-400">
            Home
          </a>
          <a href="#" className="hover:text-red-400">
            Professional
          </a>
          <a href="#" className="hover:text-red-400">
            Skills
          </a>
          <a href="#" className="hover:text-red-400">
            Projects
          </a>
          <a href="#" className="hover:text-red-400">
            Hire Me
          </a>
        </nav>
        <div
          className="w-8 h-8 rounded-full cursor-pointer overflow-hidden hover:opacity-80 transition"
          onClick={() => navigate("/recruiter")}
          title="Back to Browse"
        >
          <img
            src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
            alt="Back Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">
        {books.map((book, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-[0_0_20px_6px_rgba(229,9,20,0.4)] transition duration-300"
          >
            {/* Cover Image */}
            <div className="w-full h-72 overflow-hidden rounded-t-xl bg-[#111]">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}
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
