import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import images for Top Picks
import workPermitImg from "../assets/work-permit.jpg";
import skillsImg from "../assets/skills.jpg";
import experienceImg from "../assets/experience.jpg";
import certificationsImg from "../assets/certifications.jpg";
import projectsImg from "../assets/projects.jpg";
import contactMeImg from "../assets/contact-me.jpg";

// Import images for For the Curious
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

  const handleCardClick = (title) => {
    if (title === "Work Permit") {
      navigate("/work-permit");
    } else if (title === "Skills") {
      navigate("/skills");
    } else if (title === "Experience") {
      navigate("/experience");
    } else if (title === "Certifications") {
      navigate("/certifications");
    } else if (title === "Contact Me") {
      navigate("/contact-me");
    } else if (title === "About Me") {
      navigate("/about");
    } else if (title === "Favorite Blogs") {
      navigate("/browse");
    } else if (title === "Alma Mater") {
      navigate("/university");
    } else if (title === "Great Reads") {
      navigate("/reads");
    } else if (title === "Projects") {
      navigate("/project");
    }
  };

  const renderCards = (items) =>
    items.map(({ title, img }, idx) => (
      <div
        key={idx}
        onClick={() => handleCardClick(title)}
        className="w-44 h-24 md:w-56 md:h-32 bg-gray-800 rounded-lg flex items-center justify-center text-white font-semibold text-center shadow transition duration-300 ease-in-out border-2 border-transparent hover:border-[#e50914] hover:shadow-[0_0_12px_3px_rgba(229,9,20,0.6)] hover:scale-102 cursor-pointer"
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
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#111] text-sm font-medium">
        <div className="text-red-600 text-xl font-bold tracking-wide">
          SHISHIR YADAV
        </div>
        <nav className="hidden md:flex gap-6">
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
          onClick={() => navigate("/profiles")}
          title="Switch Profile"
        >
          <img
            src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
            alt="recruiter Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <section className="relative w-full h-[50vh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Text Content */}
        <div className="relative z-20 px-10 h-full flex flex-col justify-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Shishir Yadav – Full Stack Developer
          </h1>
          <p className="text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
            Dynamic and results-driven Software Engineer with a strong
            foundation in Java, React, Node.js, and Cloud platforms. Passionate
            about scalable architecture, solving real-world problems, and
            building user-centric experiences.
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

      {/* Top Picks Section */}
      <section className="px-8 py-10 mt-4">
        <h2 className="text-lg md:text-xl font-bold mb-4">Today's Top Picks</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 pr-6 scrollbar-thin scrollbar-thumb-red-600">
          {renderCards(topPicks)}
        </div>
      </section>

      {/* For the Curious Section */}
      <section className="px-8 py-10 mt-4">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          🔥 For the Curious
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2 pr-6 scrollbar-thin scrollbar-thumb-red-600">
          {renderCards(curiousTiles)}
        </div>
      </section>
    </div>
  );
};

export default Browse;
