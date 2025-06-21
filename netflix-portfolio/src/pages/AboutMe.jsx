import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";

const images = [pic1, pic2, pic3, pic4];

const paragraphs = [
  `Hi, I’m Shishir Yadav — a software engineer driven by curiosity, creativity, and a relentless passion for solving meaningful problems with code.`,

  `I bring a strong foundation in Java, Spring Boot, React, Node.js, and cloud platforms like AWS & Azure, paired with real-world experience in building scalable full-stack applications, cloud-native systems, and dynamic user interfaces. Whether it's optimizing cloud resources using AI, crafting elegant UI experiences, or designing backend architectures, I thrive where code meets impact.`,

  `💼 Formerly at Tata Consultancy Services, I worked on enterprise-grade solutions with Power Platform and M365, but my learning didn't stop there. As a graduate student, I've deep-dived into Advanced OS, Cloud Engineering, Security, and Computer Vision, while leading hands-on projects ranging from AI-powered optimization tools to real-time chat apps and scheduling algorithms.`,

  `Currently on F-1 OPT (starting June 9, 2025), with a STEM extension eligible until June 8, 2028, I’m actively exploring full-time roles where I can build, innovate, and grow with high-performing teams.`,

  `Outside of work, you’ll often find me refining my portfolio, sharing insights on LinkedIn, or obsessing over clean UI and well-structured backend logic.`,

  `📬 Always up for a chat—be it about tech, career opportunities, or startup ideas. Let’s connect and build something remarkable!`,
];

const AboutMe = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  // Image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Word-by-word highlight loop
  const totalWords = paragraphs.join(" ").split(" ").length;
  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % totalWords);
    }, 1000); // Slowed down for better visibility
    return () => clearInterval(timer);
  }, [totalWords]);

  let globalWordCounter = -1;

  return (
    <div className="min-h-screen bg-black text-white font-[Cinzel] overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-[#111] text-sm font-medium z-30">
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

      {/* Main Content */}
      <div className="pt-20 flex flex-col md:flex-row w-full">
        {/* Left: Rotating Image */}
        <div className="md:w-[40%] w-full h-auto flex items-center justify-center">
          <img
            src={images[index]}
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Animated Text */}
        <div className="md:w-[60%] w-full px-6 py-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
            className="text-lg sm:text-xl md:text-2xl leading-relaxed space-y-6"
          >
            {paragraphs.map((para, paraIdx) => (
              <p key={paraIdx} className="flex flex-wrap">
                {para.split(" ").map((word, wordIdx) => {
                  globalWordCounter++;
                  const isHighlighted = highlightIndex === globalWordCounter;

                  return (
                    <motion.span
                      key={`${paraIdx}-${wordIdx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: globalWordCounter * 0.05,
                      }}
                      whileHover={{
                        scale: 1.3,
                        zIndex: 10,
                        textShadow: "0 0 8px #e50914",
                      }}
                      className="inline-block mr-2 cursor-pointer"
                      style={{
                        color: isHighlighted ? "#e50914" : "#ffffff",
                        transition: "color 1.2s ease-in-out",
                      }}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
