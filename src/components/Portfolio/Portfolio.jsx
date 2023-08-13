import React from "react";

import "./portfolio.css";

import { data } from "./data";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio-container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio-item">
                            <div className="portfolio-item-image">
                                <img src={image} alt={id} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio-item-cta">
                                <a
                                    href={github}
                                    rel="noreferrer"
                                    className="btn"
                                    target="_black"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
