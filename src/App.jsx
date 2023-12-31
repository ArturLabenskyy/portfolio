import React from "react";

import {
    About,
    // Contact,
    Experience,
    Footer,
    Header,
    Nav,
    Portfolio,
} from "./components/index";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Footer />
        </>
    );
};

export default App;
