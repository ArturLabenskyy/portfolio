import React from "react";
import { useState } from "react";

import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { HiOutlineCollection } from "react-icons/hi";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
                rel="noreferrer"
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
                rel="noreferrer"
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
                rel="noreferrer"
            >
                <BiBook />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}
                rel="noreferrer"
            >
                <HiOutlineCollection />
            </a>
        </nav>
    );
};

export default Nav;
