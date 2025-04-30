import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export const Hero = () => {
  const greeting = "Hi, I'm Vaibhav";
  const animatedText = "I'm learning web development";

  return (
    <section className={`${styles.container} section-hover`}>
      <div className={styles.content}>
        {/* Animated Heading */}
        <h1 className={styles.shinyText}>
          {greeting.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h1>

        {/* Animated Subtext */}
        <p className={styles.description}>
          {animatedText.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>

        {/* Button */}
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      {/* Profile image (animated on hover) */}
      <img
        src="/profile.jpeg"
        alt="Profile"
        className="w-25 h-25 rounded-full border-2 border-indigo-500 shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:shadow-indigo-500/50 animate-pulse"
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
