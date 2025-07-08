import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.cardContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            name={project.title}
            description={project.description}
            tech={project.skills}
            github={project.source}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
   );
}

export default Projects;
