import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import algomaster from "../assets/algomaster.png";
import tldr from "../assets/tldr.png";
import wired from "../assets/wired.png";
import techcrunch from "../assets/techcrunch.png";
import verge from "../assets/verge.png";

const blogs = [
  {
    title: "Algomaster.io",
    desc: "A clean, practical site with DSA problems, visualizations, and solid JavaScript/TypeScript algorithms.",
    url: "https://algomaster.io/",
    img: algomaster,
  },
  {
    title: "TLDR",
    desc: "A daily tech newsletter with byte-sized updates across AI, dev tools, and startups — perfect for staying current in 2 minutes.",
    url: "https://tldr.tech",
    img: tldr,
  },
  {
    title: "Wired",
    desc: "Deeply researched tech & culture articles that blend innovation with societal impact. Wired sets the tone for the future.",
    url: "https://www.wired.com",
    img: wired,
  },
  {
    title: "TechCrunch",
    desc: "Premier source for startup and venture capital news. Fast, credible, and constantly breaking trends.",
    url: "https://techcrunch.com",
    img: techcrunch,
  },
  {
    title: "The Verge",
    desc: "Blends tech news, product reviews, and futuristic features. The Verge is where technology meets culture in a sleek, visual style.",
    url: "https://www.theverge.com",
    img: verge,
  },
];

const FavoriteBlogs = () => {
  const navigate = useNavigate();
  const title = "Favorite Blogs".split("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-16 pt-28 relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#111] text-white z-50 px-4 py-3 flex items-center justify-between">
        <div
          onClick={() => navigate("/recruiter")}
          className="text-red-600 text-xl font-bold tracking-wide cursor-pointer"
        >
          SHISHIR YADAV
        </div>

        {/* Desktop Nav */}
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

        {/* Avatar + Mobile Menu */}
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

      {/* Mobile Menu Dropdown */}
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

      {/* Animated Heading */}
      <motion.h1
        className="relative z-10 flex justify-center flex-wrap text-center font-extrabold text-3xl md:text-5xl mb-16 tracking-wide"
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

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, idx) => (
          <motion.div
            key={idx}
            className="group relative bg-[#1c1c1c] p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-[0_0_20px_6px_rgba(229,9,20,0.4)] transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex justify-between items-start mb-3">
              <img src={blog.img} alt={blog.title} className="w-10 h-10" />
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e50914] hover:text-white transition text-xl"
                title="Visit Blog"
              >
                <FiExternalLink />
              </a>
            </div>
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-300">{blog.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteBlogs;
