import React from 'react';
import Image from 'next/image';
import styles from './Video.module.scss'

const Video = () => {
    return (
        <>
        <div className={styles.video}>
            <section className={styles.videoCol1}>
                <h2 className={styles.videoTitle}>
                    <span className={styles.word}>Welcome</span> 
                    <span className={styles.word}>to my</span>
                    <span className={styles.word}>profile</span>
                </h2>
            </section>
            <section className={styles.videoCol2}>
                 
                <div className={styles.videoContainer}>
                    <video
                        src="/videos/profile2.mp4" // Place video in public/videos/
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
            </section>
        </div>
         
        </>
    )
}

export default Video;