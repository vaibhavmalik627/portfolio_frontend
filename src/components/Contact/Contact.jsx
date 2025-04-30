import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src="https://img.icons8.com/fluency/48/gmail-new.png"
            alt="Email icon"
            className={styles.icon} // Applying the icon class for uniform size
          />
          <a href="mailto:malikvaibhav600@email.com">malikvaibhav600@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://img.icons8.com/papercut/120/linkedin.png"
            alt="LinkedIn icon"
            className={styles.icon} // Applying the icon class for uniform size
          />
          <a href="https://www.linkedin.com/in/vaibhav-malik-08b921265/">linkedin.com/Vaibhav Malik</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://img.icons8.com/sf-regular/48/github.png"
            alt="Github icon"
            className={styles.icon} // Applying the icon class for uniform size
          />
          <a href="https://github.com/vaibhavmalik627">github.com/vaibhavmalik627</a>
        </li>
      </ul>
    </footer>
  );
};

