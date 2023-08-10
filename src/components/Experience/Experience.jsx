import React from "react";

import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience-container">
                <div className="experience-frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>HTML</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>CSS</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>JavaScript</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>React</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>Redux</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>Figma</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>i18n</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>Auth0</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>Styled Components</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>Git + Github</h4>
                        </article>
                    </div>
                </div>

                <div className="experience-backend">
                    <h3>Backend Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>NodeJS</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>Express</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>MongoDB</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>OpenAI API</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>Mongoose</h4>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-details-icon" />
                            <h4>Git + GitHub</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
