import React from 'react';
import "./EducationStyles.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <div className='education-container'>
        <h1 className="education-heading">Education</h1>
        <VerticalTimeline lineColor='white'>
            <VerticalTimelineElement className='timeline-element-education' iconStyle={{background:'#6384a2', color:'#fff'}} icon={<FaGraduationCap/>} date='2021 - 2023'>
                <h3>Bachelor of Computer Science (Software Development)</h3>
                <p className='location'>Universiti Teknikal Malaysia Melaka (UTeM), Ayer Keroh, Melaka</p>
                <p>Relevent course work:
                  <ul>
                    <li>Human Computer Interaction (BITM2313)</li>
                    <li>Web Application Development (BITM2113)</li>
                    <li>Mobile Application Development (BITP3453)</li>
                    <li>Algorithm Analysis (BITP2113)</li>
                    <li>Database Design (BITP2313)</li>
                    <li>Software Requirement & Design (BITP2223)</li>
                    <li>Software Project Management (BITP3223)</li>
                    <li>Geography Information System (BITP3483)</li>
                    <li>Artificial Intelligence (BITI1113)</li>
                    <li>Knowledge Based System (BITI3313)</li>
                  </ul>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='timeline-element-education' iconStyle={{background:'#6384a2', color:'#fff'}} icon={<FaGraduationCap/>} date='2018 - 2021'>
                <h3>Diploma in Information Technology</h3>
                <p className='location'>Universiti Teknikal Malaysia Melaka (UTeM), Ayer Keroh, Melaka</p>
                <p> Relevent course work:
                  <ul>
                    <li>Web Programming (DITM2123)</li>
                    <li>Database (DITP1113)</li>
                    <li>Data Structure & Algorithm (DITP2113)</li>
                    <li>Programming I (DITP1113)</li>
                    <li>Programming II (DITP1123)</li>
                    <li>Object Oriented Programming (DITP3113)</li>
                    <li>Database Programming (DITP2313)</li>
                    <li>System Analysis & Design (DITP2213)</li>
                    <li>Software Verification & Validation (DITP3263)</li>
                  </ul>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Education