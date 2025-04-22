"use client";

import styles from './Project.module.scss';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
    return (
        <div className={styles.nextArrow} onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrowIcon}
            >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </svg>
        </div>
    );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
    return (
        <div className={styles.prevArrow} onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrowIcon}
            >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
            </svg>
        </div>
    );
};

const Project = ({ project }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,  
        prevArrow: <PrevArrow />,
        autoplay: false,
        touchMove: true,
        swipe: true,
    };
    return (
        <div className={styles.projectSlider}>
            {project.image2.length > 1 ? (
                <Slider {...settings}>
                    {project.image2.map((media, index) => (
                        <div key={index} className={`${project.className}${index + 1}`}>
                            <img src={media} alt={`Project Image ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className={styles.singleImage}>
                    <img src={project.image2[0]} alt="Project Image" />
                </div>
            )}
             
        </div>
         
    );
}

export default Project;