import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chirag</h1>
        <p className={styles.description}>
          A passionate software developer focused on building fast, secure, and user friendly web applications. I turn ideas into real-world digital solutions using modern tech and clean code.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ck.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
