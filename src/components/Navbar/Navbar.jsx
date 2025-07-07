import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "About", to: "#about" },
  { name: "Projects", to: "#projects" },
  { name: "Contact", to: "#contact" },
];

function Navbar() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY + 100;
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollY >= el.offsetTop) setActive(sec.charAt(0).toUpperCase() + sec.slice(1));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>Vaibhav Malik</span>
      </div>
      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.to}
              className={active === link.name ? styles.active : ""}
              onClick={() => setActive(link.name)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
