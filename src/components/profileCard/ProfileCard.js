import React from 'react';

import styles from './ProfileCard.module.scss';
import Image from 'next/image';

const ProfileCard = () => {
    return (
        <div className={`${styles.card}`}>
             
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Front End Developer</h2>
                <p className={styles.cardDescription}>
                Front-end developer with over 6 years of experience building responsive, user-focused websites and web applications. Experienced in translating designs into pixel-perfect, interactive interfaces, and collaborating with designers, back-end developers, and UX teams. Currently expanding my skills in modern frameworks like React and Next.js, eager to contribute to projects where I can learn, grow, and help deliver great user experiences.
                </p>
            </div>
            <div className={`${styles.cardImage}`}>
             
                <Image
                    src="/images/profile1.png"
                    alt="profile Image"
                    width="64"
                    height="61"
                    
                    className={`${styles.cardImageResponsive}`}
                    
                />
            </div>
        </div>
    );
}
export default ProfileCard;