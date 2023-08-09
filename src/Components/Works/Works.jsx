import React from 'react';
import './Works.css';


 import JayuShop from "./J-icon.jpg"
 import wenderApp from "./Weekend.jpg"
 import PortfolioWeb from "./Portfolio.jpg"


const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Works</h1>
                <div className="work-list">
                    <div className="work">
                    <img src={JayuShop} alt="JayuShop" />
                        <div className="layer">
                            <h2>Jayu Shop</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam
                                deserunt dolore vero. Incidunt ea nihil sint. Velit.</p>
                            <a href="/"><i className="fas fa-external-link-alt">Go</i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={wenderApp} alt="wenderApp" />
                        <div className="layer">
                            <h2>Wender App</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam
                                deserunt dolore vero. Incidunt ea nihil sint. Velit.</p>
                            <a href="#"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={PortfolioWeb} alt="PortfolioWeb" />
                        <div className="layer">
                            <h2>Portfolio App</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam
                                deserunt dolore vero. Incidunt ea nihil sint. Velit.</p>
                            <a href="#"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
                <a href="" className="btn">See more</a>
            </div>
        </div>
    );
};

export default Portfolio;
