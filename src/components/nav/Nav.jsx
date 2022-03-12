import React from "react";
import styles from "./styles.module.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

const Nav = () => {
  return (
    <div>
      <a href="#" className={styles.icon_socials}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={styles.icon_socials}>
        <AiOutlineUser />
      </a>
      <a href="#experience" className={styles.icon_socials}>
        <AiOutlineHome />
      </a>
      <a href="#services" className={styles.icon_socials}>
        <AiOutlineHome />
      </a>
      <a href="#contact" className={styles.icon_socials}>
        <AiOutlineHome />
      </a>
    </div>
  );
};

export default Nav;
