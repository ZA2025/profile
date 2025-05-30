"use client";

import styles from './Project.module.scss';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

// Utility function to generate img tag props
const getResponsiveImageProps = (image, index) => {
  const srcSet = image.dimensions
    .map(dim => `${image.src.replace(".webp", `-${dim.width}.webp`)} ${dim.width}w`)
    .join(", ");

  const defaultDim = image.dimensions.find(d => d.default) || image.dimensions[0];
  const sizes = image.sizes;
  const src = image.src.replace(".webp", `-${defaultDim.width}.webp`);
  const height = defaultDim ? defaultDim.height : undefined;

  return {
    src,
    srcSet,
    sizes,
    alt: `Project Image ${index + 1}`,
    className: "projectSliderImage",
    width: defaultDim.width,
    height: height,
  };
};

const NextArrow = ({ onClick }) => (
  <div className={styles.nextArrow} onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={styles.prevArrow} onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  </div>
);

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
      <Slider {...settings}>
        {project.slider.map((image, index) => {
          const imgProps = getResponsiveImageProps(image, index);
          return (
            <div key={index}>
              
              <Image 
                src={imgProps.src}
                alt={imgProps.alt}
                sizes={imgProps.sizes}
                srcSet={imgProps.srcSet}
                width={imgProps.width}
                height={imgProps.height || imgProps.width}
                className={imgProps.className}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Project;
