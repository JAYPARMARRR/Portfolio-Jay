import './Works.css';


 import JayuShop from "./J-icon.jpg"
 import wenderApp from "./Weekend.jpg"
 import PortfolioWeb from "./Screenshot 2023-09-14 181536.png"
import hotlistlogin from "./Screenshot 2023-09-14 181925.png"

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Works</h1>
                <div className="work-list">
                <div className="work">
                        <img src={hotlistlogin} />
                        <img src={PortfolioWeb}
                         
                        alt="PortfolioWeb" />
                        <div className="layer">
                            <h2>Hotlist Management</h2>
                            <p> The Hot List efficiently maintains a structured record of currently active candidates.Effectively organizing data-intensive information within well-structured tables.It has the capability to manage the import and export of extensive data in Excel format </p>
                            <a href="https://hotlist.wiseskulls.com/" target="_blank" rel="noopener noreferrer">Go<i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div className="work">
                    <img src={JayuShop} alt="JayuShop" />
                        <div className="layer">
                            <h2>Jayu Shop</h2>
                            <p> Explore our extensive collection spanning across various categories, from fashion and beauty to electronics and home essentials. Whatever youre searching for, you ll find it here.</p>
                            <a href="https://shopsy-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt">Go</i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={wenderApp} alt="wenderApp" />
                        <div className="layer">
                            <h2>Wender App</h2>
                            <p>Welcome to the future of selling with the Wender App - the ultimate tool for vendors, artisans, and businesses to effortlessly showcase and sell their products or services to a global audience.</p>
                            <a href="https://wanderjayu.vercel.app/" target="_blank" rel="noopener noreferrer">Go<i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                  
                    
                </div>
                <a href="https://vercel.com/dashboard/" target="_blank" rel="noopener noreferrer" className="btn">See more</a>
            </div>
        </div>
    );
};

export default Portfolio;
