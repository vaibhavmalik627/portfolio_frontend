import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={`${styles.container} section-hover`} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.SzX0iCAK-VJhqynXwcqZsQHaE7?rs=1&pid=ImgDetMain"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src="https://img.icons8.com/ios-filled/50/cursor.png"
              alt="Cursor icon"
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a student from Dayanand Sagar College (DSCE), pursuing web development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="https://img.icons8.com/ios-filled/50/server.png"
              alt="Server icon"
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm learning backend development and building real-world projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};