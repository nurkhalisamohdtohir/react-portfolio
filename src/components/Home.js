import React from 'react';
import Navbar from './Navbar';
import HeroImg from './HeroImg';
import Education from './Education';
import Experience from './Experience';
import Work from './Work';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Skill from './Skill';

import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="skill">
        <Skill />
      </Element>
      <Element name="project">
        <Work />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;