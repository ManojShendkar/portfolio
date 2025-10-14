import React from "react";
import ConnectedParticles from "../components/ConnectedParticles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Experience from "../components/Experience";
import Tools from "../components/Tools";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const PortfolioPage: React.FC = () => {

    return (
        <div className="portfolio-container">
            <ConnectedParticles />
            <Header />
            <main style={{ position: "relative", zIndex: 2 }}>
                <About />
                <Experience />
                <Tools />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioPage;
