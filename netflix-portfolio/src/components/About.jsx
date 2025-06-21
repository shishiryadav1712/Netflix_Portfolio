import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 flex flex-col items-center justify-center bg-gray-950 text-white"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>

      <p className="text-lg max-w-3xl text-center mb-10">
        I'm a passionate Full Stack Developer with a strong foundation in Java
        and modern web technologies. I love building scalable, performant
        applications that solve real-world problems. My focus is on clean code,
        elegant UI, and seamless backend integration.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {[
          "Java",
          "Spring Boot",
          "React.js",
          "Tailwind CSS",
          "Node.js",
          "MongoDB",
          "Firebase",
          "Git & GitHub",
          "Vite",
          "PostgreSQL",
        ].map((tech, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg py-3 px-4 hover:bg-red-500 transition"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
