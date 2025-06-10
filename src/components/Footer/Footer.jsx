import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaTwitter />
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 