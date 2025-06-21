import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import splashSound from "../assets/netflix-sound.mp3";

const Splash = () => {
  const name = "SHISHIR YADAV".split("");
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((err) => console.warn("Autoplay blocked:", err));
      }
    };

    playAudio();
    document.addEventListener("click", playAudio, { once: true });
    return () => document.removeEventListener("click", playAudio);
  }, []);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      setTimeout(() => navigate("/profiles", { replace: true }), 2200);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative min-h-screen w-full flex items-center justify-center cursor-pointer bg-gradient-to-r from-[#000428] via-black to-[#330000] overflow-hidden"
    >
      <audio ref={audioRef} src={splashSound} preload="auto" />

      {/* Light Sweep */}
      {!clicked && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        >
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
        </motion.div>
      )}

      {/* Name Animation */}
      <motion.div
        initial="hidden"
        animate={clicked ? "explode" : "visible"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
          explode: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className="z-20 flex flex-wrap justify-center text-red-600 text-5xl md:text-6xl font-extrabold tracking-widest"
        style={{ transform: "scaleY(1.2) rotateX(20deg)" }}
      >
        {name.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
              explode: {
                x: (Math.random() - 0.5) * 500,
                y: (Math.random() - 0.5) * 500,
                opacity: 0,
                rotate: (Math.random() - 0.5) * 360,
                transition: { duration: 1, ease: "easeInOut" },
              },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-1"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Sparkle/Glow Overlay */}
      {clicked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0 z-30 bg-gradient-radial from-white/10 via-transparent to-transparent pointer-events-none"
        />
      )}

      {/* Fade to black before navigation */}
      {clicked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-black z-40 pointer-events-none"
        />
      )}
    </div>
  );
};

export default Splash;
