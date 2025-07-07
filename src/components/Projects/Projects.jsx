import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "AIReviewer",
    description:
      "AI-powered code review tool. Analyze your code instantly with AI-driven insights, highlighting bugs, suggestions, and best practices directly in your editor.",
    tech: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/vaibhavmalik627/AIReviewer",
    demo: "",
  },
  {
    name: "Real Time Tracker",
    description:
      "A real-time activity tracking application built with JavaScript, EJS, and CSS. Leverages WebSockets (Socket.IO) to deliver instant, live updates of tracked events—allowing users to monitor activities as they happen.",
    tech: ["JavaScript", "EJS", "CSS", "Socket.IO"],
    github: "https://github.com/vaibhavmalik627/real_time-tracker",
    demo: "",
  },
  {
    name: "Grocery App",
    description:
      "A comprehensive grocery shopping platform using the MERN stack (MongoDB, Express, React, Node). Features distinct Seller and Buyer modes, secure authentication, and seamless order management.",
    tech: ["MongoDB", "Express", "React", "Node"],
    github: "https://github.com/vaibhavmalik627/grocery_app",
    demo: "",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
