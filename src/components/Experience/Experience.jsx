import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Education & Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {education.map((educationItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(educationItem.imageSrc)}
                  alt={`${educationItem.school} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{educationItem.degree}</h3>
                  <p className={styles.major}>{educationItem.major}</p>
                  <p className={styles.school}>{educationItem.school}</p>
                  <p className={styles.date}>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                  <ul>
                    {educationItem.achievements.map((achievement, id) => {
                      return <li key={id}>{achievement}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
