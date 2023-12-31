import React from "react";

import CV from "../../assets/cv.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} className="btn">
                Download CV
            </a>
            <a
                href="https://www.linkedin.com/in/artur-labenskyy-72590224b/"
                rel="noreferrer"
                target="_blank"
                className="btn btn-primary"
            >
                Let's talk
            </a>
        </div>
    );
};

export default CTA;
