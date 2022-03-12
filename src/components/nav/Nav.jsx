import React from "react";
import styles from "./styles.module.scss";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";

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
        <AiOutlineBook />
      </a>
      <a href="#services" className={styles.icon_socials}>
        <RiServiceLine />
      </a>
      <a href="#contact" className={styles.icon_socials}>
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default Nav;
