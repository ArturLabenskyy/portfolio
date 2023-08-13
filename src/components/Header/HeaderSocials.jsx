import React from "react";

import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
    return (
        <div className="header-socials">
            <a
                href="https://www.linkedin.com/in/artur-labenskyy"
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
    );
};

export default HeaderSocial;
