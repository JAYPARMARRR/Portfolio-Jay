import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCode, faCropSimple } from '@fortawesome/free-solid-svg-icons';
// import { faAndroid as faAndroidBrands } from '@fortawesome/free-brands-svg-icons';
import "./services.css"
const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                      
                        <h2>App Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam nam sit. Soluta quasi officia, alias vitae fugiat fuga exercitationem.</p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                       
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam nam sit. Soluta quasi officia, alias vitae fugiat fuga exercitationem.</p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                    {/* <FontAwesomeIcon icon={faCropSimple} /> */}
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam nam sit. Soluta quasi officia, alias vitae fugiat fuga exercitationem.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
