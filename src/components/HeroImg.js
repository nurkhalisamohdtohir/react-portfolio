import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/home-bg.jpg";
import ProfileImg from "../assets/profilepic2.jpg";
import { Link } from "react-router-dom";

import {FaLinkedin, FaGithub, FaRegFilePdf} from "react-icons/fa";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
        <div className="profile-pic-container">
          <img className="profile-pic" src={ProfileImg} alt="Profile Picture" />
        </div>
        <h1>- Nurkhalisa Binti Mohd Tohir -</h1>
        <p>Recent Graduate | Software Developer & Tester | Crafting User-Friendly Websites | Committed to Excellence | Love Exploring New Things</p>
        <div className="social">
            <a href="https://github.com/nurkhalisamohdtohir" target="_blank" rel="noopener noreferrer" title="GitHub"> <FaGithub size={30} style={{color:"#FAEBD7", marginRight: "2rem"}} /> </a>
            <a href="https://www.linkedin.com/in/nurkhalisa-mohd-tohir/" target="_blank" rel="noopener noreferrer" title="LinkedIn"> <FaLinkedin size={30} style={{color:"#FAEBD7", marginRight: "2rem"}} /> </a>
            <a href="" target="_blank" rel="noopener noreferrer" title="Resume"> <FaRegFilePdf size={30} style={{color:"#FAEBD7"}} /> </a>
        </div>
        {/* 
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/about" className="btn btn-light">ABOUT</Link>
        </div>
        */}
    </div>
  </div>;
};

export default HeroImg;