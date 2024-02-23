import "./WorkCardStyles.css";

import React from 'react';
import { NavLink } from "react-router-dom";
import {FaGithub, FaEye} from "react-icons/fa";

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="desc" />
        <h2 className="project-title">{props.title}</h2>
        <div className="project-detail">
            <p>{props.text}</p>
            <p><b>Skills:</b> {props.skill}</p>
        </div>
        <div className="project-btn">
          <a href={props.view} className="btn">Read More</a>
          <a href={props.source} target="_blank" rel="noopener noreferrer" className="btn">View Code</a>
        </div>
    </div>
  )
};

export default WorkCard;