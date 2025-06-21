import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Issued Apr 2021",
    url: "https://www.credly.com/badges/b4bb8306-b183-4306-93c6-47e59dca32bd?source=linked_in_profile",
    logo: "https://img.icons8.com/color/48/000000/microsoft.png",
  },
  {
    title: "Ethics, Technology and Engineering",
    issuer: "Coursera",
    date: "Issued Jan 2021",
    url: "https://coursera.org/share/c3239a3a40a9cb605d01ebf03d040aaf",
    logo: "https://images.icon-icons.com/2699/PNG/512/coursera_logo_icon_169326.png",
  },
  {
    title: "Machine Learning Algorithms: Supervised Learning Tip to Tail",
    issuer: "Coursera",
    date: "Issued Dec 2020",
    url: "https://coursera.org/share/62b2a79ea88650fc8c5b0c509725e84a",
    logo: "https://images.icon-icons.com/2699/PNG/512/coursera_logo_icon_169326.png",
  },
  {
    title: "Android App Development Specialization",
    issuer: "Coursera",
    date: "Issued Aug 2020",
    url: "https://coursera.org/share/6fff53c53b38bda1a239113ee22b38a2",
    logo: "https://images.icon-icons.com/2699/PNG/512/coursera_logo_icon_169326.png",
  },
  {
    title: 'Capstone MOOC for "Android App Development"',
    issuer: "Coursera",
    date: "Issued Aug 2020",
    url: "https://coursera.org/share/c2203ffbaa8637b693e746ed7b5b8104",
    logo: "https://images.icon-icons.com/2699/PNG/512/coursera_logo_icon_169326.png",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    date: "Issued Aug 2020",
    url: "https://coursera.org/share/ba57dbc42310555b4730a3e113a8a29f",
    logo: "https://images.icon-icons.com/2699/PNG/512/coursera_logo_icon_169326.png",
  },
  {
    title: "Engineering Maintainable Android Apps",
    issuer: "Coursera",
    date: "Issued Jul 2020",
    url: "https://coursera.org/share/c6b6d2db93272aa71babec60b31fb44d",
    logo: "https://images.icon-icons.com/2699/PNG/512/coursera_logo_icon_169326.png",
  },
  {
    title:
      "Android App Components - Intents, Activities, and Broadcast Receivers",
    issuer: "Coursera",
    date: "Issued Jun 2020",
    url: "https://coursera.org/share/e450da61ebc258e3b9e68b4e4e7522f3",
    logo: "https://images.icon-icons.com/2699/PNG/512/coursera_logo_icon_169326.png",
  },
  {
    title:
      "Android App Components - Services, Local IPC, and Content Providers",
    issuer: "Coursera",
    date: "Issued Jun 2020",
    url: "https://coursera.org/share/2bab0ad4f3cdcaccd21f346eb659140d",
    logo: "https://images.icon-icons.com/2699/PNG/512/coursera_logo_icon_169326.png",
  },
  {
    title: "Java for Android",
    issuer: "Coursera",
    date: "Issued May 2020",
    url: "https://coursera.org/share/83a05c4d67c39e0ea19a4050fe0d8179",
    logo: "https://images.icon-icons.com/2699/PNG/512/coursera_logo_icon_169326.png",
  },
];

const title = "Certifications".split("");

const Certifications = () => {
  const navigate = useNavigate();
  const splitLetters = (text) =>
    [...text].map((c, i) =>
      /\s/.test(c) ? (
        <span key={i}>&nbsp;</span>
      ) : (
        <motion.span key={i} variants={letterAnim}>
          {c}
        </motion.span>
      )
    );
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-16 font-sans relative overflow-hidden">
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
      {/* Glowing Title Animation */}
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

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto z-10 relative">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-[#1c1c1c] rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-[0_0_20px_6px_rgba(229,9,20,0.4)] transition duration-300"
          >
            {/* Hover shine effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>

            {/* Logo + Content */}
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-start">
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="w-7 h-7 mt-1"
                  />
                )}
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-xs italic text-gray-500">{cert.date}</p>
                </div>
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e50914] hover:text-white transition text-xl"
                  title="View Certificate"
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
