import React, { useState } from "react";
import styles from "./styles.module.scss";
import data from "../../assets/data/portfolio.json";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(data);
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={styles.container_portfolio}>
        {portfolio.map((portfolio, index) => {
          return (
            <div className={styles.portfolio_item} key={index}>
              <div className={styles.portfolio_img}>
                <img src={portfolio?.img_url} alt="img_project" />
              </div>
              <h3>{portfolio?.title}</h3>
              <div className={styles.portfolio_tecnologies}>
                <span>{portfolio?.technologieOne}</span>
                <span>{portfolio?.technologieTwo}</span>
                {portfolio?.technologieThree ? (
                  <span>{portfolio?.technologieThree}</span>
                ) : null}
              </div>
              <p>{portfolio?.description}</p>
              <div className={styles.container_button}>
                <a
                  href={portfolio?.repository_url}
                  target="_blank"
                  className={styles.button}
                >
                  Github
                </a>
                {portfolio?.page_url ? (
                  <a
                    href={portfolio?.page_url}
                    target="_blank"
                    className={`${styles.button} ${styles.button_primary}`}
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
