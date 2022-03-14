import React from "react";
import styles from "./styles.module.scss";
import avatar from "../../assets/img/me.png";
import cv from "../../assets/document/HojaDeVida.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <h5>Hello I'm</h5>
      <h1>Andres Jaramillo</h1>
      <h5 className={styles.text_light}>FrontEnd Developer.</h5>
      <div className={styles.container_button}>
        <a href={cv} download className={styles.button}>
          Download CV
        </a>
        <a href="" className={`${styles.button} ${styles.button_primary}`}>
          Let's Talk
        </a>
      </div>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/andres-jaramillo0406/"
          className={styles.icon_socials}
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/GhostemaneUrs"
          className={styles.icon_socials}
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt="img_avatar" />
      </div>
    </div>
  );
};

export default Header;
