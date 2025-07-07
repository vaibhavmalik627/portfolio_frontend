import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <img
          src="https://avatars.githubusercontent.com/u/124840083?v=4"
          alt="Vaibhav Malik"
          className={styles.avatar}
        />
        <h1 className={styles.title}>Hi, I'm Vaibhav Malik</h1>
        <p className={styles.subtitle}>
          Full Stack Developer | Building impactful digital products
        </p>
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
