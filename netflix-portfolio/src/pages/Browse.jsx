import React, { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaLinkedinIn,
  FaChevronLeft,
  FaChevronRight,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useProfile from "../hooks/useProfile";

import workPermitImg from "../assets/work-permit.jpg";
import skillsImg from "../assets/skills.jpg";
import experienceImg from "../assets/experience.jpg";
import certificationsImg from "../assets/certifications.jpg";
import projectsImg from "../assets/projects.jpg";
import contactMeImg from "../assets/contact-me.jpg";

import aboutMeImg from "../assets/about-me.jpg";
import favoriteBlogsImg from "../assets/favorite-blogs.jpg";
import almaMaterImg from "../assets/alma-mater.jpg";
import greatReadsImg from "../assets/great-reads.jpg";

const topPicks = [
  { title: "Work Permit", img: workPermitImg },
  { title: "Skills", img: skillsImg },
  { title: "Experience", img: experienceImg },
  { title: "Certifications", img: certificationsImg },
  { title: "Projects", img: projectsImg },
  { title: "Contact Me", img: contactMeImg },
];

const curiousTiles = [
  { title: "About Me", img: aboutMeImg },
  { title: "Favorite Blogs", img: favoriteBlogsImg },
  { title: "Alma Mater", img: almaMaterImg },
  { title: "Great Reads", img: greatReadsImg },
];

const Browse = () => {
  const navigate = useNavigate();
  const scrollRefTop = useRef(null);
  const scrollRefCurious = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { isRecruiter, avatar, goHome, getNavLinks, resetProfile } =
    useProfile();

  useEffect(() => {
    if (!isRecruiter) {
      navigate("/guest");
    }
  }, []);

  const scroll = (ref, dir) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir === "left" ? -500 : 500,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (title) => {
    const routes = {
      "Work Permit": "/work-permit",
      Skills: "/skills",
      Experience: "/experience",
      Certifications: "/certifications",
      Projects: "/project",
      "Contact Me": "/contact-me",
      "About Me": "/about",
      "Favorite Blogs": "/browse",
      "Alma Mater": "/university",
      "Great Reads": "/reads",
    };
    navigate(routes[title] || "/");
  };

  const renderCards = (items) =>
    items.map(({ title, img }, idx) => (
      <div
        key={idx}
        onClick={() => handleCardClick(title)}
        className="w-44 h-24 md:w-56 md:h-32 bg-gray-800 flex-shrink-0 rounded-lg flex items-center justify-center text-white font-semibold text-center shadow transition duration-300 ease-in-out border-2 border-transparent hover:border-[#e50914] hover:shadow-[0_0_12px_3px_rgba(229,9,20,0.6)] hover:scale-102 cursor-pointer"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center rounded-lg">
          {title}
        </div>
      </div>
    ));

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#111] text-white z-50 px-4 py-3 flex items-center justify-between">
        <div
          onClick={goHome}
          className="text-red-600 text-xl font-bold tracking-wide cursor-pointer"
        >
          SHISHIR YADAV
        </div>

        {/* Desktop Menu */}
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

        {/* Right Avatar + Hamburger (Mobile) */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
          <div
            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
            onClick={resetProfile}
            title="Switch Profile"
          >
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
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

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[50vh] overflow-hidden pt-[72px] md:pt-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-10 h-full flex flex-col justify-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Shishir Yadav – Full Stack Developer
          </h1>
          <p className="text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
            Dynamic and results-driven Software Engineer with a strong
            foundation in Java, React, Node.js, and Cloud platforms. Passionate
            about building scalable architectures and solving real-world
            problems through elegant, user-centric experiences. Actively
            exploring the intersection of software engineering and AI — from
            smart automation to intelligent system design — to create impactful
            and future-ready solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="/ShishirYadav_Jdev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-semibold text-sm flex items-center gap-2"
            >
              <FaPlay className="text-black text-sm" />
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/shishiry1712/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-semibold text-sm flex items-center gap-2"
            >
              <FaLinkedinIn className="text-blue-600 text-base" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="relative px-8 py-10 mt-4">
        <h2 className="text-lg md:text-xl font-bold mb-4">Today's Top Picks</h2>
        <div className="relative">
          <button
            onClick={() => scroll(scrollRefTop, "left")}
            className="absolute left-0 top-[35%] z-10 p-3 bg-[#111] rounded-full hover:bg-[#e50914] transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => scroll(scrollRefTop, "right")}
            className="absolute right-0 top-[35%] z-10 p-3 bg-[#111] rounded-full hover:bg-[#e50914] transition"
          >
            <FaChevronRight />
          </button>

          <div
            ref={scrollRefTop}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-8"
          >
            {renderCards(topPicks)}
          </div>
        </div>
      </section>

      {/* Curious Tiles */}
      <section className="relative px-8 py-10 mt-4">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          🔥 For the Curious
        </h2>
        <div className="relative">
          <button
            onClick={() => scroll(scrollRefCurious, "left")}
            className="absolute left-0 top-[35%] z-10 p-3 bg-[#111] rounded-full hover:bg-[#e50914] transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => scroll(scrollRefCurious, "right")}
            className="absolute right-0 top-[35%] z-10 p-3 bg-[#111] rounded-full hover:bg-[#e50914] transition"
          >
            <FaChevronRight />
          </button>

          <div
            ref={scrollRefCurious}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-8"
          >
            {renderCards(curiousTiles)}
          </div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Browse;
