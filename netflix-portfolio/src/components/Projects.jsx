import React from "react";

const projects = [
  {
    title: "AlgoGauge",
    description:
      "A time complexity analyzer that benchmarks your code in real time using AST and code parsing.",
    tech: ["React", "Node.js", "Tailwind", "Firebase"],
    github: "https://github.com/yourusername/algogauge",
    demo: "https://algogauge.vercel.app/",
  },
  {
    title: "Apex Vets",
    description:
      "A complete veterinary hospital management system with appointment, consultation, and admin features.",
    tech: ["React", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/yourusername/apex-vets",
    demo: "https://apexvets.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-20 bg-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-2 text-red-400">
              {project.title}
            </h3>
            <p className="text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 px-2 py-1 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
