import "./AboutMeStyles.css";

import React from 'react';
import {FaHome, FaPhone, FaEnvelope, FaUser, FaLinkedin, FaGithub, FaFilePdf, FaSmileBeam, FaSmile} from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="about">
        <h1 className="about-heading">About Me</h1>
        <div className="about-container">
            <div className="left">
                <p><FaUser size={18} style={{color:"#6384a2", marginRight: "1rem"}} /> Nurkhalisa Binti Mohd Tohir</p>
                <p><FaHome size={18} style={{color:"#6384a2", marginRight: "1rem"}} /> Batu Pahat, Johor</p>
                <p><FaPhone size={18} style={{color:"#6384a2", marginRight: "1rem"}} /> 0127473376</p>
                <p><FaEnvelope size={18} style={{color:"#6384a2", marginRight: "1rem"}} /> lisatohir@gmail.com</p>
            </div>
            <div className="right">
                <h1 className="greeting">Hello! I'm Lisa.</h1>
                <p>A recent graduate with a degree in Software Development. Passionate about creating user-friendly websites and ensuring their quality through meticulous testing practices.
                Eager to embark on a rewarding career, I am dedicated to continuous learning and professional growth.
                </p>
                <p>My goal is to work on innovative projects, learn new technologies, and contribute to creating engaging online experiences. Whether it's developing robust software solutions or ensuring their seamless functionality through testing, I am committed to delivering excellence.</p>
                <p>I'm currently seeking opportunities to leverage my skills and contribute to the success of software development projects. If you're looking for a detail-oriented and dedicated software developer/tester, feel free to reach out to me at any time!</p>
                <p>
                    <a href="https://github.com/nurkhalisamohdtohir" target="_blank" rel="noopener noreferrer" title="GitHub"> <FaGithub size={30} style={{color:"#6384a2", marginRight: "2rem"}} /> </a>
                    <a href="https://www.linkedin.com/in/nurkhalisa-mohd-tohir/" target="_blank" rel="noopener noreferrer" title="LinkedIn"> <FaLinkedin size={30} style={{color:"#6384a2", marginRight: "2rem"}} /> </a>
                    <a href="" target="_blank" rel="noopener noreferrer" title="Resume"> <FaFilePdf size={30} style={{color:"#6384a2"}} /> </a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe