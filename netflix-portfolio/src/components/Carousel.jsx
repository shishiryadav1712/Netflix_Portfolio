import React from "react";

const Carousel = ({ title, items }) => {
  if (!items || !Array.isArray(items)) return null;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[300px] bg-gray-800 p-4 rounded-lg flex-shrink-0 hover:bg-red-600 transition"
          >
            <h3 className="text-xl font-bold text-red-400 mb-2">
              {item?.title || "Untitled"}
            </h3>

            <p className="text-sm mb-3">
              {item?.description || "No description provided."}
            </p>

            <div className="text-xs text-gray-300 flex flex-wrap gap-2 mb-3">
              {(item.tech || []).map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4 text-sm">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  GitHub
                </a>
              )}
              {item.demo && (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
