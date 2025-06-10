import React from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contacts</h2>
        
        </div>
        <div className={styles.links}>
          <a
            href="mailto:chiragkumar266@gmail.com"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
              <FaEnvelope />
            </div>
            <span>chiragkumar266@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/chirag-kumar-4b4870319/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
              <FaLinkedin />
            </div>
            <span>Linkedin</span>
          </a>
          <a
            href="https://github.com/chir0003"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
              <FaGithub />
            </div>
            <span>github.com/chir0003</span>
          </a>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Chirag Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
