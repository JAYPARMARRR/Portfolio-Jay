import React from 'react';
import "./Contact.css"

import PDF from "./JayDeveloper.pdf"
import { FaPaperPlane } from 'react-icons/fa';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>

                        <p><FaPaperPlane/> jayuparmar717@gmail.com</p>
                        <p><FaPhoneSquareAlt/> +91 95109 23353</p>
                        <div className="social-icons">
                            <a href="#"><FaFacebookSquare/></a>
                            <a href="#"><AiOutlineGithub /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin/></a>
                        </div>
                        <a href={PDF} download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright @ Dev Jay Parmar. Made with ❤ by Dev Jay</p>
            </div>
        </div>
    );
};

export default Contact;
