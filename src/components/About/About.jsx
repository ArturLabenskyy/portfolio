import React from "react";
import "./about.css";
import ME from "../../assets/me-about.JPG";

import { MdWorkHistory, MdFolderSpecial } from "react-icons/md";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <MdWorkHistory className="about-icon" />
                            <h5>Experience</h5>
                            <small>~1 Year </small>
                        </article>

                        <article className="about-card">
                            <MdFolderSpecial className="about-icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>
                        As a recent graduate of Fullstack Development Bootcamp,
                        I am excited to bring my newly acquired skills and
                        knowledge to a junior full stack development position.
                        With a strong foundation in full stack development, I am
                        eager to collaborate with a team to create innovative
                        and efficient solutions.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
