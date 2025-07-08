import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submission
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Contact Me</h2>
          <p className={styles.subtitle}>
            Thank you for viewing my portfolio. I really hope you’ve enjoyed looking at my work!
          </p>
          <p className={styles.subtitle}>
            Whether you’re a new business looking to launch your brand into the world or a large, established business, I’m happy to cater to your needs. I understand that every company, big or small, has different needs and requirements. Therefore, every job is treated accordingly. If you are a new business or individual and don’t know where to start, that’s fine too! I’m more than happy to give advice and try and point you in the right direction.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Name<span className={styles.required}>*</span></label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <label htmlFor="email">Email<span className={styles.required}>*</span></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <label htmlFor="message">Message<span className={styles.required}>*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
            {submitted && (
              <p className={styles.thankYou}>Thank you for your message!</p>
            )}
          </form>
          <div className={styles.socialLinks}>
            <h3>Connect with me:</h3>
            <ul>
              <li><a href="malikvaihav600@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a></li>
              <li><a href="https://github.com/vaibhavmalik627" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/vaibhav-malik-08b921265/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
