import React from "react";
import styles from "./Skills.module.css";

const skills = [
  { name: "JavaScript", type: "Frontend" },
  { name: "React.js", type: "Frontend" },
  { name: "HTML5", type: "Frontend" },
  { name: "CSS3", type: "Frontend" },
  { name: "Redux", type: "Frontend" },
  { name: "Node.js", type: "Backend" },
  { name: "Express.js", type: "Backend" },
  { name: "MongoDB", type: "Database" },
  { name: "SQL", type: "Database" },
  { name: "Socket.IO", type: "Other" },
  { name: "Git & GitHub", type: "Other" },
  { name: "REST APIs", type: "Other" },
  { name: "JWT Auth", type: "Other" },
  { name: "EJS", type: "Frontend" },
  { name: "Linux", type: "Other" },
];

const grouped = {
  Frontend: skills.filter((s) => s.type === "Frontend"),
  Backend: skills.filter((s) => s.type === "Backend"),
  Database: skills.filter((s) => s.type === "Database"),
  Other: skills.filter((s) => s.type === "Other"),
};

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.skillsGrid}>
        {Object.entries(grouped).map(([type, group]) => (
          <div key={type} className={styles.group}>
            <h3 className={styles.groupHeading}>{type}</h3>
            <div className={styles.badgeRow}>
              {group.map((skill) => (
                <span key={skill.name} className={styles.badge}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
