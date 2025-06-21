import React, { useEffect, useState } from "react";

const NetflixTitle = ({ text = "", delay = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayedText(""); // Reset on remount
    setIsDone(false);

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        const nextChar = text.charAt(i);
        setDisplayedText((prev) => prev + nextChar);
        i++;
      } else {
        clearInterval(interval);
        setIsDone(true);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Hi, I'm{" "}
      <span className="text-red-500">
        {displayedText}
        {!isDone && <span className="animate-pulse text-gray-400">|</span>}
      </span>
    </h1>
  );
};

export default NetflixTitle;
