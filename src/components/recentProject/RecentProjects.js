"use client";
import { useState, useEffect } from 'react';
import projectsData from '@/data/projects.json'; // Import the JSON file
import styles from './RecentProjects.module.scss'; // Import your CSS module
import Link from 'next/link';

const RecentProjects = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // Simulate fetching data from the JSON file
            setProjects(projectsData);
        } catch (error) {
            console.error('Error loading projects:', error);
            setError('Failed to load recent projects.');
        }
    }, []);

    return (
        <div className={styles.projects}>
            <h3 className={styles.projectsTitle}>
                Recent Projects</h3>
            {error ? (
                <p>{error}</p>
            ) : projects.length > 0 ? (
                <div className={styles.project}>
                    {projects.map((project, index) => (
                        <article key={index} className={styles.projectPost}>
                            <img src={project.image} alt={project.name} />
                             
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