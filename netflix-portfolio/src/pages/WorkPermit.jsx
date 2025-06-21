import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const glow = {
  textShadow: "0 0 4px #e50914, 0 0 8px #e50914, 0 0 12px #e50914",
};

const WorkPermit = () => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 md:py-16 relative overflow-hidden flex flex-col items-center">
      {/* Top Nav: Netflix-style avatar on top-right */}
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

      {/* Card Container */}
      <motion.div
        className="mt-24 w-full max-w-2xl h-[500px] perspective relative z-10"
        onClick={() => setFlipped(!flipped)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={flipped ? "back" : "front"}
            initial={{ rotateY: flipped ? 180 : -180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: flipped ? 180 : -180, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute w-full h-full rounded-2xl shadow-lg border border-gray-700 bg-[#111] backface-hidden p-10 md:p-12`}
          >
            {/* Front View */}
            {!flipped && (
              <>
                <h1
                  className="text-3xl md:text-4xl font-extrabold text-center mb-6 cursor-pointer"
                  style={glow}
                >
                  🎓 USA Work Authorization Info
                </h1>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-300">
                  <p>
                    I’m currently on an{" "}
                    <span className="text-[#e50914] font-semibold">
                      F-1 visa
                    </span>{" "}
                    with{" "}
                    <span className="text-[#e50914] font-semibold">OPT</span>{" "}
                    (Optional Practical Training) 🇺🇸.
                  </p>
                  <p>
                    📅 <strong>OPT Duration:</strong>{" "}
                    <span className="text-[#e50914] font-bold">
                      June 9, 2025 – June 8, 2026
                    </span>
                  </p>
                  <p>
                    🔁 <strong>STEM Extension:</strong> Eligible until{" "}
                    <span className="text-[#e50914] font-bold">
                      June 8, 2028
                    </span>
                    .
                  </p>
                  <p>
                    Eager to turn potential into performance,open to full-time
                    roles that challenge and inspire. Let's connect!" 🚀
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-6 italic text-center">
                  Tap to contact me
                </p>
              </>
            )}

            {/* Back View */}
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
                <p className="text-xs text-gray-500 mt-4 italic">
                  Tap for Authorization Info
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WorkPermit;
