
import  { useState } from 'react';
import './About.css'; 

import JayuAboutimg from "./JayuAboutPhoto.jpg"





const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={JayuAboutimg} alt="User" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
            I am a web developer who is
proficient in both back-end and
front-end frameworks. My passion lies
in learning about the latest
technologies.Motivated web developer with a solid foundation in HTML,
CSS, JavaScript, jquery and React, seeking to apply
acquired knowledge and skills in a professional setting.
Dedicated to delivering clean and efficient code while
continuously learning and keeping up with industry best
practices.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => openTab('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => openTab('experience')}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => openTab('education')}
              >
                Education
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li>
                  <span>Front-End</span>
                  <br />
                  Front-End Developer
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web app Development
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Building Android/iOS apps
                </li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li>
                  <span>2021 - Current</span>
                  <br />
                  UI/UX Design training at ET Institute
                </li>
                <li>
                  <span>2019-2021</span>
                  <br />
                  Web app Development
                </li>
                <li>
                  <span>2017-2019</span>
                  <br />
                  UI/UX Design Executive at Coin Digital Ltd.
                </li>
                <li>
                  <span>2017-2019</span>
                  <br />
                  Internship at eKart ecommerce.
                </li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li>
                  <span>2016</span>
                  <br />
                  UI/UX Design training at ET Institute
                </li>
                <li>
                  <span>2016 Development</span>
                  <br />
                  MBA from MIT Bangalore
                </li>
                <li>
                  <span>2020-2021</span>
                  <br />
                  BCA from saurashtra university
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
