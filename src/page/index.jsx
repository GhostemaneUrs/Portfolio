import React from "react";
import Nav from "../components/nav/Nav";
import About from "../components/about/About";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Portfolio from "../components/portfolio/Portfolio";
import Experience from "../components/experience/Experience";
import styles from "../theme/styles.module.scss";

const index = () => {
  return (
    <>
      <div className={styles.container_1400}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

export default index;
