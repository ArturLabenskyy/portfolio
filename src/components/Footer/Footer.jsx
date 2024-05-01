import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer>
            <a href="/#" className="footer-logo">
                <img src={logo} alt="logo" className="logo" />
            </a>

            <ul className="permalinks">
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
            </ul>

            <div className="footer-socials">
                <a
                    href="https://www.linkedin.com/in/labenskyy"
                    rel="noreferrer"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/ArturLabenskyy"
                    rel="noreferrer"
                    target="_blank"
                >
                    <BsGithub />
                </a>
                <a
                    href="https://www.instagram.com/__ar2r___"
                    rel="noreferrer"
                    target="_blank"
                >
                    <BsInstagram />
                </a>
            </div>

            <div className="footer-copyright">
                <small>&copy; Artur Labenskyy. All rights reserved, 2024</small>
            </div>
        </footer>
    );
};

export default Footer;
