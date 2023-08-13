import React from "react";

import "./portfolio.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio-container">
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={IMG1} alt="image 1" />
                    </div>
                    <h3>Vanilla JS MineCraft 2D</h3>
                    <div className="portfolio-item-cta">
                        <a
                            href="https://github.com/ArturLabenskyy/Weekend-6_Minecraft"
                            className="btn"
                            target="_black"
                        >
                            Github
                        </a>
                        <a
                            href="https://minecrafting.netlify.app"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={IMG2} alt="image 1" />
                    </div>
                    <h3>World Population</h3>
                    <div className="portfolio-item-cta">
                        <a
                            href="https://github.com/ArturLabenskyy/Weekend-7-World-Population"
                            className="btn"
                            target="_black"
                        >
                            Github
                        </a>
                        <a
                            href="https://w0rld-population.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={IMG3} alt="image 1" />
                    </div>
                    <h3>Moviliot Project</h3>
                    <div className="portfolio-item-cta">
                        <a
                            href="https://github.com/ArturLabenskyy/Middle-Project_Moviliot"
                            className="btn"
                            target="_black"
                        >
                            Github
                        </a>
                        <a
                            href="https://moviliot.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={IMG4} alt="image 1" />
                    </div>
                    <h3>Voting for House Project</h3>
                    <div className="portfolio-item-cta">
                        <a
                            href="https://github.com/ArturLabenskyy/Weekend-8_WA_Voting"
                            className="btn"
                            target="_black"
                        >
                            Github
                        </a>
                        <a
                            href="https://vote-for-house.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={IMG5} alt="image 1" />
                    </div>
                    <h3>Hackaton Project</h3>
                    <div className="portfolio-item-cta">
                        <a
                            href="https://github.com/SuperSpawn/Hackaton-frontend"
                            className="btn"
                            target="_black"
                        >
                            Github
                        </a>
                        <a
                            href="https://appleseeds-reddit-possitive-scrapper.netlify.app"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={IMG6} alt="image 1" />
                    </div>
                    <h3>iWannaPlay Project</h3>
                    <div className="portfolio-item-cta">
                        <a
                            href="https://github.com/ArturLabenskyy/Bootcamp-Final-Frontend"
                            className="btn"
                            target="_black"
                        >
                            Github
                        </a>
                        <a
                            href="https://iwannaplay.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={IMG6} alt="image 1" />
                    </div>
                    <h3>Harmony Project</h3>
                    <div className="portfolio-item-cta">
                        <a
                            href="https://github.com/Makes-Innovation-Hub/harmony"
                            className="btn"
                            target="_black"
                        >
                            Github
                        </a>
                        <a
                            href="http://harmonymusic.tech/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;
