import React from "react";
import styles from "./About.module.css";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <section id="about" className={styles.about}>
      {/* Icon placed above the heading */}
      <div className={styles.iconWrap}>
        <img src="/logo-icon.png" alt="Profile Icon" className={styles.icon} />
      </div>

      {/* Heading */}
      <h2 className={styles.heading}>About Me</h2>

      {/* Content */}
      <div className={styles.content}>
        <div>
          <p>
            <strong>Hi! I'm Vaibhav Malik,</strong> a Full Stack Developer passionate about
            building efficient, scalable, and modern web applications. I specialize in
            React, Node.js, and creating impactful user experiences with clean architecture.
          </p>
          <div className={styles.facts}>
            <span className={styles.fact}>💻 JavaScript Enthusiast</span>
            <span className={styles.fact}>🌐 Full Stack Engineer</span>
            <span className={styles.fact}>🛠️ Problem Solver</span>
            <span className={styles.fact}>📈 Growth Mindset</span>
          </div>
          <div className={styles.actions}>
            <a href="/resume.pdf" className={styles.cta} download>
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
