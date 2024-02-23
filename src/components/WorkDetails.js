import "./WorkDetailsStyles.css";

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const WorkDetails = ({ projects }) => {

    //Image Slider
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex < project.images.length - 1 ? prevIndex + 1 : 0
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : project.images.length - 1
        );
    };

    const startAutoSlide = () => {
        return setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex < project.images.length - 1 ? prevIndex + 1 : 0
          );
        }, 6000);
    };

    //Navigation
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((proj) => proj.id === id);

    // Start auto slide when the component mounts
    useEffect(() => {
        const autoSlideInterval = startAutoSlide();

        return () => clearInterval(autoSlideInterval);
    }, [id]); 
  
    if (!project) {
      return <div>Project not found</div>;
    }
  
    const handleBack = () => {
      navigate('/');
    };

  return (
    <div className="detail">
        <h1 className="detail-heading">Project Details</h1>
        <div className="detail-card">

            <div className="detail-carousel">
                <BsArrowLeftCircleFill onClick={prevImage} className="arrow arrow-left" />
                <img src={project.images[currentImageIndex].image} alt={project.title} className="slide"/>
                <BsArrowRightCircleFill onClick={nextImage} className="arrow arrow-right" />
            </div>
            <div className="image-caption">{project.images[currentImageIndex].caption}</div>
            <span className="indicators">
                {project.images.map((_, index) => (
                    <div
                        key={index}
                        className={`${index === currentImageIndex ? 'indicator' : 'indicator indicator-inactive'}`}
                        onClick={() => setCurrentImageIndex(index)}
                    ></div>
                ))}
            </span>

            <div className="detail-content">
                <h2 className="detail-title">{project.title}</h2>
                <div className="detail-text">
                    {project.desc}
                </div>
                <div className="detail-btn">
                    <button onClick={handleBack} className="btn">Go Back</button>
                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">View Code</a>
                </div>
            </div>

        </div>

    </div>
  );
};

export default WorkDetails;