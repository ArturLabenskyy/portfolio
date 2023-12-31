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
                href="/#"
                rel="noreferrer"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                rel="noreferrer"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                rel="noreferrer"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <BiBook />
            </a>
            <a
                href="#portfolio"
                rel="noreferrer"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}
            >
                <HiOutlineCollection />
            </a>
        </nav>
    );
};

export default Nav;
