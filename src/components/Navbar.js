import "./NavbarStyles.css";

import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
       if(window.scrollY >=1){
        setColor(true);
       } else{
        setColor(false);
       }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <ScrollLink to="home" smooth={true} duration={500} onClick={() => { setClick(false); scroll.scrollToTop(); }}>
          <h1>Portfolio.</h1>
        </ScrollLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <ScrollLink to="about" smooth={true} duration={500} onClick={() => { setClick(false); }}>About</ScrollLink>
            </li>
            <li>
                <ScrollLink to="education" smooth={true} duration={500} onClick={() => { setClick(false); }}>Education</ScrollLink>
            </li>
            <li>
                <ScrollLink to="experience" smooth={true} duration={500} onClick={() => { setClick(false); }}>Experience</ScrollLink>
            </li>
            <li>
                <ScrollLink to="skill" smooth={true} duration={500} onClick={() => { setClick(false); }}>Skill</ScrollLink>
            </li>
            <li>
                <ScrollLink to="project" smooth={true} duration={500} onClick={() => { setClick(false); }}>Project</ScrollLink>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color: "#fff"}} />
            ) : (
                <FaBars size={20} style={{color: "#fff"}} />
            )}
        </div>
    </div>
  )
}

export default Navbar