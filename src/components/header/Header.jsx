import React from "react";
import "./styles.scss";
import avatar from "../../assets/img/me.png";
import cv from "../../assets/document/HojaDeVida.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="container-1400 header-container">
        <h5>Hello I'm</h5>
        <h1>Andres Jaramillo</h1>
        <h5 className="text-light">FrontEnd Developer.</h5>
        <div className="container-button">
          <a href={cv} download className="button">
            Download CV
          </a>
          <a href="" className="button button-primary">
            Let's Talk
          </a>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/andres-jaramillo0406/"
            className="icon-socials"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/GhostemaneUrs" className="icon-socials" target="_blank">
            <BsGithub />
          </a>
        </div>
        <div className="avatar">
          <img src={avatar} alt="img_avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
