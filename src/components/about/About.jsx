import React from "react";
import styles from "./styles.module.scss";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={styles.container_about}>
        <div className={styles.about_me}>
          <div className={styles.about_me_image}>
            <img src="https://i.ibb.co/hdNhzx5/me-v2.jpg" alt="about image" />
          </div>
        </div>
        <div className={styles.about_content}>
          <div className={styles.about_cards}>
            <div className={styles.card}>
              <FaAward className={styles.about_icon} />
              <h5>Experience</h5>
              <span>8 Months Working</span>
            </div>
            <div className={styles.card}>
              <VscFolderLibrary className={styles.about_icon} />
              <h5>Projects</h5>
              <span>13 Completed</span>
            </div>
          </div>
          <p className={styles.description}>
            I am a Systems Engineer oriented in the search for effective results
            and with excellent communication skills. I also have a vast
            knowledge in current technologies, I have fundamental
            characteristics for a company.
          </p>
          <a
            href="#contact"
            className={`${styles.button} ${styles.button_primary}`}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
