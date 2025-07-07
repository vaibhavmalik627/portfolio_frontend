import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.content}>
        <img
          src="https://avatars.githubusercontent.com/u/124840083?v=4"
          alt="Vaibhav Malik"
          className={styles.avatar}
        />
        <div>
          <p>
            <strong>Hi! I'm Vaibhav Malik,</strong> a passionate Full Stack Developer dedicated to building impactful digital products. I enjoy crafting scalable web apps, exploring modern JavaScript frameworks, and solving real-world problems with code. My approach is rooted in continuous learning, collaboration, and a drive for excellence.
          </p>
          <div className={styles.facts}>
            <span className={styles.fact}>💻 JavaScript Enthusiast</span>
            <span className={styles.fact}>🌐 Full Stack Engineer</span>
            <span className={styles.fact}>🛠️ Problem Solver</span>
            <span className={styles.fact}>🚀 Always Improving</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
