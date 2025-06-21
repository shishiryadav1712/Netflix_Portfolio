import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ICON URLs sourced online for each skill
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
  "Node.js":
    "data:image/png;base64,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",
  PostgreSQL:
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  MongoDB: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
  "Oracle DB": "https://img.icons8.com/color/256/oracle-logo.png",
  "MS SQL":
    "data:image/jpeg;base64,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",
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
  Kafka:
    "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Kafka.component.complex-narrative-xl.ts=1726505533756.png/content/adobe-cms/us/en/products/instana/supported-technologies/apache-kafka-observability/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage",
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
    <div className="min-h-screen bg-black text-white px-6 py-10 relative">
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

      {/* Skills Grid */}
      <motion.div
        className="max-w-6xl mx-auto mt-12 space-y-12"
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
                  <motion.span className="mt-2 text-sm text-gray-400 italic"></motion.span>
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
