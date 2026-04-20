import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useProfile from "../hooks/useProfile";

const title = "Experience".split("");

const timelineItems = [
  {
    type: "education",
    title: "B.Tech in Computer Science",
    company: "GITAM University, Vizag, India",
    period: "Jun 2017 – Jun 2021",
    bullets: [
      "Courses: C, Data Structures, OOP with C++, Java, DBMS, Software Engineering, Algorithms.",
    ],
    icon: <FaGraduationCap />,
  },
  {
    type: "work",
    title: "Java Intern",
    company: "Wood Cube Software Services LLP",
    location: "Jaipur, India",
    period: "May 2019 – Jun 2019",
    bullets: [
      "Built Spring Boot backend modules for hospital scheduling.",
      "Integrated REST APIs for patient-doctor chat — 40% faster.",
    ],
    icon: <FaBriefcase />,
  },
  {
    type: "work",
    title: "Java Full Stack Developer",
    company: "Persistent Systems",
    location: "India",
    period: "Jan 2021 – Jul 2023",
    bullets: [
      "Engineered scalable insurance policy and claims microservices using Java 11, Spring Boot, Spring MVC, REST APIs, Hibernate/JPA, reducing manual claim processing effort by 40% and accelerating settlement timelines across high-volume insurance workflows.",
      "Implemented secure authentication and authorization layers with Spring Security, OAuth 2.0, JWT, RBAC, ensuring regulatory compliance and protecting sensitive financial and policyholder data for 50K+ concurrent users.",
      "Designed an event-driven underwriting and risk evaluation pipeline leveraging Apache Kafka, Redis, Spring Cloud, enabling real-time credit risk assessment and improving underwriting decision accuracy by 30%. ",
      "Automated CI/CD workflows with Jenkins, Maven, Git, unit and integration testing, reducing deployment failures by 45% and ensuring faster, audit-ready releases for enterprise finance platforms. ",
    ],
    icon: <FaBriefcase />,
  },
  {
    type: "education",
    title: "M.S. in Computer Science",
    company: "Purdue University, Indianapolis",
    period: "Aug 2023 – May 2025",
    bullets: [
      "Courses: Data Mining, OOP, Advanced OS, Networks, Mobile Security, Computer Vision, Cloud Computing.",
    ],
    icon: <FaGraduationCap />,
  },
  {
    type: "work",
    title: "Java Full Stack Developer",
    company: "Freddie Mac",
    location: "USA",
    period: "Mar 2025 – Present",
    bullets: [
      "Architected mortgage loan origination and underwriting services using Java 17, Spring Boot, Spring Cloud, RESTful APIs, enabling straight-through processing for borrower applications and reducing underwriting turnaround time by 32%. ",
      "Developed regulatory-compliant authorization workflows with Spring Security, OAuth 2.0, JWT, role-based access control, strengthening audit readiness and safeguarding sensitive borrower, credit, and property data. ",
      "Built reactive and modular user interfaces using Angular 15+, TypeScript, RxJS, NgRx, improving loan officer productivity and accelerating application review workflows by 28%. ",
      "Implemented asynchronous mortgage event processing with Apache Kafka and message-driven consumers, enabling near real-time propagation of loan status, payment, and delinquency events across downstream risk systems. ",
      "Optimized large-scale mortgage portfolio data handling using Hibernate/JPA, PostgreSQL, query tuning, batch processing, supporting high-volume loan analytics while reducing reporting execution time by 40%. ",
      "Deployed and monitored cloud-native applications using Docker, Kubernetes, AWS, CI/CD pipelines, automated testing, improving release reliability and ensuring consistent performance during peak mortgage origination cycles. ",
    ],
    icon: <FaBriefcase />,
  },
];

const Experience = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { avatar, goHome, getNavLinks, goToDashboard } = useProfile();

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 pt-24 pb-16 relative overflow-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-[#111] text-white z-50 px-4 py-3 flex items-center justify-between">
        <div
          onClick={goHome}
          className="text-red-600 text-xl font-bold tracking-wide cursor-pointer"
        >
          SHISHIR YADAV
        </div>

        {/* Desktop Navigation */}
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

        {/* Avatar + Mobile Button */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
          <div
            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
            onClick={goToDashboard}
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

      {/* ✅ Mobile Dropdown FIXED — visible always, outside scroll */}
      {menuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 w-full bg-[#111] flex flex-col items-center gap-4 py-4 z-[1000] shadow-lg backdrop-blur-md">
          {getNavLinks().map(({ label, path }) => (
            <span
              key={label}
              onClick={() => {
                setMenuOpen(false);
                navigate(path);
              }}
              className="hover:text-red-400 cursor-pointer"
            >
              {label}
            </span>
          ))}
        </div>
      )}

      {/* Animated Title */}
      <motion.h1
        className="flex justify-center flex-wrap text-center font-extrabold text-3xl md:text-5xl mb-20 tracking-wide"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.06 } },
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

      {/* Timeline Section */}
      <div className="relative z-10 max-w-4xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-[#e50914] before:transform before:-translate-x-1/2">
        {timelineItems
          .slice()
          .reverse()
          .map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-16 flex flex-col md:flex-row items-center justify-between ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="group relative bg-[#1c1c1c] p-6 rounded-xl border border-gray-700 w-full md:w-[45%] overflow-hidden shadow-md hover:shadow-[0_0_20px_6px_rgba(229,9,20,0.4)] transition duration-300">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">
                    {item.company}
                    {item.location && ` – ${item.location}`}
                  </p>
                  <p className="text-sm italic text-gray-500 mb-3">
                    {item.period}
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                    {item.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Dot Icon */}
                <div className="hidden md:flex items-center justify-center bg-black border-4 border-[#e50914] text-[#e50914] w-12 h-12 rounded-full absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                  {item.icon}
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default Experience;
