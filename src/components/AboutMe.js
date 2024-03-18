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
                <h1 className="greeting">Hi there, I'm Lisa!</h1>
                <p>A recent graduate with a degree in Software Development. I'm ready to dive headfirst into the world of software development. While my experience might be green, I'm passionate to jump into exciting projects where I can learn, grow, and make a real impact. Whether it's coding sleek software or testing it inside out, I'm all in for delivering top-notch results.</p>
                <p>I've spent years honing my skills, learning the ins and outs of coding, and now I'm eager to put theory into practice. Whether it's HTML, CSS, JavaScript, or diving into new tech stacks, I'm up for the challenge.</p>
                <p>I may be new to the game, but my dedication to learn and grow in this ever-evolving field is unmatched. I'm seeking opportunities to kickstart my career, collaborate with experienced professionals, and make a tangible impact. If you're looking for a motivated and adaptable team player, feel free to reach out to me at any time. Let's work together to bring ideas to life!</p>
                <p>
                    <a href="https://github.com/nurkhalisamohdtohir" target="_blank" rel="noopener noreferrer" title="GitHub"> <FaGithub size={30} style={{color:"#6384a2", marginRight: "2rem"}} /> </a>
                    <a href="https://www.linkedin.com/in/nurkhalisa-mohd-tohir/" target="_blank" rel="noopener noreferrer" title="LinkedIn"> <FaLinkedin size={30} style={{color:"#6384a2", marginRight: "2rem"}} /> </a>
                    <a href="https://drive.google.com/file/d/1HzsC2hlXE0yQcck2Tbx932osU7ol7rN9/view?usp=drive_link" target="_blank" rel="noopener noreferrer" title="Resume"> <FaFilePdf size={30} style={{color:"#6384a2"}} /> </a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe