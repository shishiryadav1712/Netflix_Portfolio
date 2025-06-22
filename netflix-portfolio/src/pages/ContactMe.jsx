import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useProfile from "../hooks/useProfile"; // 🔥 custom profile hook
import myPic from "../assets/shishir.jpg";

const glow = {
  textShadow: "0 0 4px #e50914, 0 0 8px #e50914, 0 0 12px #e50914",
};

const ContactMe = () => {
  const [flipped, setFlipped] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { profile, avatar, goHome, getNavLinks } = useProfile();
  const navLinks = getNavLinks();

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 pt-24 pb-16 relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#111] text-white z-50 px-4 py-3 flex items-center justify-between">
        <div
          onClick={goHome}
          className="text-red-600 text-xl font-bold tracking-wide cursor-pointer"
        >
          SHISHIR YADAV
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-6 font-medium text-sm">
          {navLinks.map((link, idx) => (
            <span
              key={idx}
              onClick={() => navigate(link.path)}
              className="hover:text-red-400 cursor-pointer"
            >
              {link.label}
            </span>
          ))}
        </nav>

        {/* Avatar + Mobile Menu Button */}
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

      {/* ✅ Mobile Dropdown FIXED */}
      {menuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 w-full bg-[#111] flex flex-col items-center gap-4 py-4 z-[1000] shadow-lg backdrop-blur-md">
          {navLinks.map((link, idx) => (
            <span
              key={idx}
              onClick={() => {
                setMenuOpen(false);
                navigate(link.path);
              }}
              className="hover:text-red-400 cursor-pointer"
            >
              {link.label}
            </span>
          ))}
        </div>
      )}

      {/* Flip Card Section */}
      <div className="flex justify-center items-center mt-10 px-4">
        <motion.div
          className="w-full max-w-2xl h-[500px] perspective relative z-10"
          onClick={() => setFlipped(!flipped)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={flipped ? "back" : "front"}
              initial={{ rotateY: flipped ? 180 : -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: flipped ? 180 : -180, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full h-full rounded-2xl shadow-lg border border-gray-700 bg-[#111] backface-hidden p-10 md:p-12 overflow-hidden"
            >
              {/* FRONT */}
              {!flipped && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <img
                    src={myPic}
                    alt="Shishir Yadav"
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#e50914] shadow-md"
                  />
                  <h1
                    className="text-3xl md:text-4xl font-extrabold text-center mb-2 cursor-pointer"
                    style={glow}
                  >
                    Let's Connect!
                  </h1>
                  <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
                    Let’s grab a virtual coffee ☕ and chat!
                    <br />
                    Whether it’s{" "}
                    <span className="text-white font-medium">tech</span>,{" "}
                    <span className="text-white font-medium">
                      career opportunities
                    </span>
                    , or just{" "}
                    <span className="text-white font-medium">
                      sharing ideas
                    </span>{" "}
                    — I’m always open to meaningful conversations.
                  </p>
                  <p className="text-xs text-gray-500 italic mt-4">
                    Tap to contact me
                  </p>
                </div>
              )}

              {/* BACK */}
              {flipped && (
                <div className="flex flex-col justify-center items-center h-full text-center space-y-4">
                  <h2 className="text-2xl font-bold text-[#e50914]">
                    📩 Contact Me
                  </h2>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:shishiry1712@gmail.com"
                    className="inline-flex items-center gap-2 bg-[#e50914] text-white font-semibold px-5 py-2 rounded-full transition hover:bg-[#f41c1c]"
                  >
                    <FaEnvelope />
                    shishiry1712@gmail.com
                  </motion.a>
                  <div className="text-sm text-gray-400 flex items-center gap-2">
                    <FaPhoneAlt className="text-[#e50914]" />
                    +1 317-333-3585
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://www.linkedin.com/in/shishiry1712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition"
                  >
                    <FaLinkedin className="text-blue-600" />
                    LinkedIn Profile
                  </motion.a>
                  <p className="text-xs text-gray-500 mt-4 italic">
                    Tap to Flip
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;
