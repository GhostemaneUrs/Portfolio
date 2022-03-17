import React, { useState } from "react";
import styles from "./styles.module.scss";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className={styles.container_nav}>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={
          activeNav === "#"
            ? `${styles.active} ${styles.icon_socials}`
            : `${styles.icon_socials}`
        }
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={
          activeNav === "#about"
            ? `${styles.active} ${styles.icon_socials}`
            : `${styles.icon_socials}`
        }
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={
          activeNav === "#experience"
            ? `${styles.active} ${styles.icon_socials}`
            : `${styles.icon_socials}`
        }
      >
        <AiOutlineBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={
          activeNav === "#portfolio"
            ? `${styles.active} ${styles.icon_socials}`
            : `${styles.icon_socials}`
        }
      >
        <HiCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={
          activeNav === "#contact"
            ? `${styles.active} ${styles.icon_socials}`
            : `${styles.icon_socials}`
        }
      >
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default Nav;
