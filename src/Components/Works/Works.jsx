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
                            <p> Explore our extensive collection spanning across various categories, from fashion and beauty to electronics and home essentials. Whatever you're searching for, you'll find it here.</p>
                            <a href="https://shopsy-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt">Go</i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={wenderApp} alt="wenderApp" />
                        <div className="layer">
                            <h2>Wender App</h2>
                            <p>Welcome to the future of selling with the Wender App – the ultimate tool for vendors, artisans, and businesses to effortlessly showcase and sell their products or services to a global audience.</p>
                            <a href="https://wanderjayu.vercel.app/" target="_blank" rel="noopener noreferrer">Go<i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={PortfolioWeb} alt="PortfolioWeb" />
                        <div className="layer">
                            <h2>Portfolio App</h2>
                            <p>Welcome to the Front-End Developer Portfolio App – your ultimate toolkit to showcase your coding prowess and web design expertise. Whether you're a seasoned developer or a budding talent, our platform empowers you to exhibit your front-end skills, projects, and achievements in an immersive and captivating manner.</p>
                            <a href="https://portfolio-jay-eight.vercel.app/" target="_blank" rel="noopener noreferrer">Go<i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
                <a href="https://vercel.com/dashboard/" target="_blank" rel="noopener noreferrer" className="btn">See more</a>
            </div>
        </div>
    );
};

export default Portfolio;
