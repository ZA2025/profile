"use client";
import { useState, useEffect } from 'react';
import projectsData from '@/data/projects.json'; // Import the JSON file
import styles from './RecentProjects.module.scss'; // Import your CSS module
import Link from 'next/link';
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

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulate fetching data from the JSON file
      setProjects(projectsData);
      console.log('Projects loaded:', projectsData);
    } catch (error) {
      console.error('Error loading projects:', error);
      setError('Failed to load recent projects.');
    }
  }, []);

  return (
    <div className={styles.projects}>
      <h3 className={styles.projectsTitle}>Recent Projects</h3>
      {error ? (
        <p>{error}</p>
      ) : projects.length > 0 ? (
        <div className={styles.project}>
          {projects.map((project, index) => (
            <article key={index} className={styles.projectPost}>
              {/* Render images from projectsListingImage */}
              <div className={styles.projectImages}>
                {project.projectsListingImage?.images?.map((image, imgIndex) => {
                  const imgProps = getResponsiveImageProps(image, imgIndex);
                  return (
                    <Image
                      key={imgIndex}
                      src={imgProps.src}
                      srcSet={imgProps.srcSet}
                      sizes={imgProps.sizes}
                      alt={imgProps.alt}
                      className={imgProps.className}
                      width={imgProps.width}
                      height={imgProps.height || imgProps.width} // Fallback to width if height is not defined
                    />
                  );
                  
                })}
              </div>
              <header className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.name}</h3>
                <p className={styles.projectDate}>{project.date}</p>
                <Link href={`/projects/${project.id}`} className={styles.liveLink}>
                  View Details
                </Link>
              </header>
            </article>
          ))}
        </div>
      ) : (
        <p>Loading recent projects...</p>
      )}
    </div>
  );
};

export default RecentProjects;