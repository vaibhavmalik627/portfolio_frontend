import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills"; // Import Skills from flat structure
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills /> {/* Add the Skills section here */}
        <Projects />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} Vaibhav Malik. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export default App;
