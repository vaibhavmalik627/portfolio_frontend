import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const texts = ["Hi, I'm Vaibhav Malik", "Developer", "Designer", "Problem Solver"];

function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.img
  src="/profile.jpg"
  alt="Vaibhav Malik"
  className={styles.avatar}
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
/>
        <motion.h1
          className={styles.title}
          key={displayedText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayedText}
          <span className={styles.cursor}>|</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Full Stack Developer | Building impactful digital products
        </motion.p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.buttonPrimary}>
            View Projects
          </a>
          <a
            href="mailto:vaibhavmalik627@gmail.com"
            className={styles.buttonSecondary}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
