import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.emptyMessage}>
        <p>No experience yet, but I'm excited to learn and grow!</p>
      </div>
    </section>
  );
};
