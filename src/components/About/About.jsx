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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsa, harum. Eaque, consectetur repellat? Eos
                        ipsum eum iusto, nisi porro soluta nihil accusamus
                        corrupti rerum ducimus culpa laborum similique tenetur
                        eius, veritatis fugiat debitis vitae eligendi. Corporis
                        sit saepe minima laboriosam modi eum sint atque, fugit
                        itaque excepturi, illo delectus rerum!
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
