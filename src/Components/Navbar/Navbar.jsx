/* eslint-disable react/no-unescaped-entities */

import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Works/Works";
import LogoNavbar from "./logo.png"
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
 <>
            <div id="header">
                <div className="container">
                    <nav>
                        <img src={LogoNavbar} alt="Logo" className="logo" />
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            {/* <li><Link to="/services">Services</Link></li> */}
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <i className="fas fa-times"></i>
                        </ul>
                        <i className="fas fa-bars"></i>
                    </nav>
                    <div className="header-text">
                        <p>Front-End Developer </p>
                        <h1>Hi, I'm <span>Jay</span><br />Parmar from Gujrat</h1>
                    </div>
                </div>
            </div>


 <About/>
<Portfolio/>
<Contact/> 
</>
    );
};

export default Navbar;
