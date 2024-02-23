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
                        <li>Collaborated with the development team to develop an ongoing project of research management information system, utilizing the Laravel framework to meet client requirements. </li>
                        <li>Participated in client meetings with fellow developers to gain insights into project scopes.</li>
                        <li>Contributed to the improvement of user experience for two fully developed systems, each developed by using Vue.js and PHP Vanilla, addressing minor issues such as bug fixes and aligning layouts based on provided wireframes.</li>
                        <li>Conducted a Facebook Live sharing session in collaboration with the marketing team, aiming to boost exposure and promote the company's services, fostering relationships with the audience.</li>
                    </ul>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='timeline-element-experience' iconStyle={{background:'#6384a2', color:'#fff'}} icon={<FaBriefcase/>} date='July 2020 – September 2020'>
                <h3>IT Support Intern</h3>
                <p className='location'>Syarikat Faiza Sdn Bhd, Batu Pahat, Johor (HQ)</p>
                <p>
                    <ul>
                        <li>Contributed to the administration of the company's information system, ensuring seamless operation across multiple branches.</li>
                        <li>Addressed staff requests from over five branches, facilitating access to the system and resolving related inquiries.</li>
                        <li>Supported the maintenance of existing computer systems by actively monitoring antivirus software and implementing necessary updates.</li>
                        <li>Provided technical support by configuring essential tools for meetings, interviews, and training sessions, ensuring efficient and effective operational processes.</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience