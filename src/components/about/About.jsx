import React from "react";
import styles from "./styles.module.scss";
import aboutImg from "../../assets/img/me-about.jpg";
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
            <img src={aboutImg} alt="about image" />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            recusandae natus fugit sit voluptatem voluptatum et fuga, quos
            incidunt quisquam sequi laudantium ipsa, error earum aut accusamus
            pariatur dignissimos odit!
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
