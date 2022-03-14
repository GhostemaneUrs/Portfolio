import React from "react";
import styles from "./styles.module.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={styles.container_experience}>
        <div className={styles.experience}>
          <h3>FrontEnd Development </h3>
          <div className={styles.experience_content}>
            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>HTML</h4>
            </div>

            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>CSS</h4>
            </div>

            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>React</h4>
            </div>

            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>Bootstrap</h4>
            </div>

            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>Tailwind</h4>
            </div>

            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>JavaScript</h4>
            </div>
          </div>
        </div>

        <div className={styles.experience}>
          <h3>BackEnd Development </h3>
          <div className={styles.experience_content}>
            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>Docker</h4>
            </div>

            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>Mysql</h4>
            </div>

            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>Node Js</h4>
            </div>

            <div className={styles.details}>
              <BsPatchCheckFill className={styles.experience_icon} />
              <h4>TypeScript</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
