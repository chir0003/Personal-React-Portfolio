import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/gibli.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Full-Stack Developer</h3>
            <br></br>
<p>
  I'm a full-stack developer with experience in building responsive, scalable frontend and backend applications using technologies like React, Angular, Node.js, and PHP. I implement RESTful APIs to deliver efficient, real-world solutions.
</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>OOP Developer</h3>
            <br></br>
<p>
  I Have build multiple projects using object-oriented programming in Java and C++, following SOLID design principles to create clean and maintainable code.
</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>Mobile App Developer</h3>
            <br></br>
<p>
  I have built native Android and iOS applications with intuitive interfaces and smooth user experiences.
</p>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
