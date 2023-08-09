
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


import "./Contact.css"

import PDF from "./JayDeveloper.pdf"
import { FaPaperPlane } from 'react-icons/fa';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';








const Contact = () => {


    const form = useRef();

    const clearInpus =()=>{
        setName('');
        setEmail('');
        setText('');
    
     }

    const sendEmail = (event) => {
        event.preventDefault();
  
      emailjs.sendForm('service_w2dohjg', 'template_6o6jffc', form.current, 'n4R58SxPuog1q7uk_')
        .then((result) => {
            console.log(result.text);
            alert("successfully sent");
            clearInpus()
        }, (error) => {
            console.log(error.text);
        });
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');


    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>

                        <p><FaPaperPlane className="emaillogo"/> jayuparmar717@gmail.com</p>
                        <p><FaPhoneSquareAlt className="phonelogo"/> +91 95109 23353</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100036318067126&mibextid=ZbWKwL/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                            <a href="https://github.com/JAYPARMARRR/" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
                            <a href="https://www.instagram.com/nick_owen777/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/jaykumar-vinodbhai-852823260" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                        </div>
                        <a href={PDF} download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form  ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Your Name" required />
                            <input type="email" name="email_name" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Your Email" required />
                            <textarea name="message" rows="6" onChange={(e)=>setText(e.target.value)} value={text} placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn3" >Submit</button>
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
