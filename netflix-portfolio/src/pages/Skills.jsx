import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useProfile from "../hooks/useProfile";
// ICONS and CATEGORIES (same as your version)
const ICONS = {
  Java: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/java/java_256x256.png",
  Python:
    "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/python/python_256x256.png",
  C: "https://img.icons8.com/color/256/c-programming.png",
  "C++": "https://img.icons8.com/color/256/c-plus-plus-logo.png",
  SQL: "https://img.icons8.com/color/256/mysql-logo.png",
  JavaScript: "https://img.icons8.com/color/256/javascript.png",
  "Spring Boot": "https://img.icons8.com/color/512/spring-logo.png",
  Hibernate:
    "https://e7.pngegg.com/pngimages/154/543/png-clipart-brown-and-gray-geometric-illustration-hibernate-logo-icons-logos-emojis-tech-companies-thumbnail.png",
  JUnit: "https://logo.svgcdn.com/d/junit-plain.png",
  Mockito:
    "https://www.logicbig.com/tutorials/unit-testing/mockito/images/mockito.png",
  "React.js":
    "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
  "Node.js": "https://img.icons8.com/color/256/nodejs.png",
  PostgreSQL:
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  MongoDB: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
  "Oracle DB": "https://img.icons8.com/color/256/oracle-logo.png",
  "MS SQL": "https://img.icons8.com/color/256/microsoft-sql-server.png",
  Firebase: "https://img.icons8.com/color/256/firebase.png",
  AWS: "https://img.icons8.com/color/256/amazon-web-services.png",
  Azure: "https://img.icons8.com/color/256/azure-1.png",
  Docker: "https://img.icons8.com/color/256/docker.png",
  Jenkins: "https://img.icons8.com/color/256/jenkins.png",
  Terraform: "https://img.icons8.com/color/256/terraform.png",
  Git: "https://img.icons8.com/color/256/git.png",
  VSCode: "https://img.icons8.com/color/256/visual-studio-code-2019.png",
  Eclipse: "https://img.icons8.com/color/256/eclipse.png",
  AndroidStudio: "https://img.icons8.com/color/256/android-studio.png",
  Kafka: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
  JIRA: "https://img.icons8.com/color/256/jira.png",
  Copilot:
    "https://www.comset.co.uk/wp-content/uploads/2024/01/Microsoft-Copilot-Logo-300.png",
  OOP: "https://thumbs.dreamstime.com/b/oop-object-oriented-programming-based-concept-objects-which-can-contain-data-code-acronym-text-background-280063673.jpg",
  "REST APIs": "https://img.icons8.com/color/256/api-settings.png",
  "System Design":
    "https://img.freepik.com/premium-vector/setting-system-logo-design-icon-bass_766448-66.jpg",
  Multithreading:
    "https://cdn.iconscout.com/icon/premium/png-256-thumb/multi-threading-4894362-4074893.png",
  DSA: "https://static.vecteezy.com/system/resources/previews/007/202/157/non_2x/dsa-letter-logo-design-on-black-background-dsa-creative-initials-letter-logo-concept-dsa-letter-design-vector.jpg",
  Concurrency:
    "https://miro.medium.com/v2/resize:fit:734/1*b7Zwb1DkiSdpslA8yj7pLg.png",
  "Agile Scrum":
    "https://pluralsight2.imgix.net/paths/images/scrum-a5c44d8364.png",
};

const categories = {
  Languages: ["Java", "Python", "C", "C++", "SQL", "JavaScript"],
  "Frameworks & Libraries": [
    "Spring Boot",
    "Hibernate",
    "JUnit",
    "Mockito",
    "React.js",
    "Node.js",
  ],
  Databases: ["PostgreSQL", "MongoDB", "Oracle DB", "MS SQL", "Firebase"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Jenkins", "Terraform", "Git"],
  Tools: ["VSCode", "Eclipse", "AndroidStudio", "Kafka", "JIRA", "Copilot"],
  Concepts: [
    "OOP",
    "REST APIs",
    "System Design",
    "Multithreading",
    "DSA",
    "Concurrency",
    "Agile Scrum",
  ],
};

// Animation configs
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};
const letterAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: {
    scale: 1.05,
    rotateX: -5,
    rotateY: 10,
    boxShadow: "0 0 15px #e50914",
  },
};

const Skills = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {
    isRecruiter,
    avatar,
    goHome,
    getNavLinks,
    resetProfile,
    goToDashboard,
  } = useProfile();

  useProfile();

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
    <div className="min-h-screen bg-black text-white pb-10">
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

        {/* Mobile Menu + Avatar */}
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

      {/* ✅ Mobile Dropdown moved outside content area */}
      <div className="relative z-40">
        {menuOpen && (
          <div className="md:hidden fixed top-[56px] left-0 w-full bg-[#111] flex flex-col items-center gap-4 py-4 z-40 shadow-md">
            {getNavLinks().map(({ label, path }) => (
              <span
                key={label}
                onClick={() => {
                  navigate(path);
                  setMenuOpen(false);
                }}
                className="hover:text-red-400 cursor-pointer"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <motion.div
        className="max-w-6xl mx-auto pt-24 space-y-12 px-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(categories).map(([section, skills]) => (
          <div key={section}>
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-[#e50914] w-fit">
              {section}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  className="bg-[#1a1a1a] p-5 rounded-2xl shadow-lg flex flex-col items-center cursor-pointer"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {ICONS[skill] && (
                    <motion.img
                      src={ICONS[skill]}
                      alt={skill}
                      className="w-16 h-16 mb-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  <motion.div
                    className="text-lg font-semibold text-center text-gray-200"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    {splitLetters(skill)}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
