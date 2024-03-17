import React from 'react';
import "./ExperienceStyles.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className='experience-container'>
        <h1 className="experience-heading">Experience</h1>
        <VerticalTimeline lineColor='white'>
            <VerticalTimelineElement className='timeline-element-experience' iconStyle={{background:'#6384a2', color:'#fff'}} icon={<FaBriefcase/>} date='March 2023 – September 2023'>
                <h3>Web Developer Intern</h3>
                <p className='location'>AMTIS Solution Sdn Bhd, Ayer Keroh, Melaka</p>
                <p>
                    <ul>
                        <li>Played a key role in developing a research management information system using Laravel framework, contributing to 3 modules and meeting project deadlines consistently. </li>
                        <li>Participated in client meetings with fellow developers, gaining insights into project scopes and user expectations.</li>
                        <li>Enhanced user experience for 2 systems that utilize Vue.js and Vanilla PHP, addressing bugs and improving layouts based on provided wireframes, resulted in a smoother and more intuitive user interface. </li>
                        <li>Conducted a Facebook Live sharing session in collaboration with marketing team, aiming to boost exposure and promote the company's services, fostering relationships with the audience and expanding our online presence. </li>
                    </ul>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='timeline-element-experience' iconStyle={{background:'#6384a2', color:'#fff'}} icon={<FaBriefcase/>} date='July 2020 – September 2020'>
                <h3>IT Support Intern</h3>
                <p className='location'>Syarikat Faiza Sdn Bhd, Batu Pahat, Johor (HQ)</p>
                <p>
                    <ul>
                        <li>Contributed in administering the company's information system by addressing staff requests from over 5 branches, ensuring seamless operation and improved accessibility.</li>
                        <li>Took charge of data entry tasks by inputting crucial information into the system to support decision-making and operational efficiency. </li>
                        <li>Supported the maintenance of existing computer systems by actively monitoring antivirus software and implementing necessary updates, resulting in enhanced system reliability and security. </li>
                        <li>Provided technical support by configuring essential tools for meetings, interviews, and training sessions, ensuring efficient and effective operational processes.</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience