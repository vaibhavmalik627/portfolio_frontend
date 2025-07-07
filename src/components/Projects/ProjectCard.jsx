import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ name, description, tech, github, demo }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.tech}>
        {tech.map((t) => (
          <span className={styles.badge} key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className={styles.links}>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
