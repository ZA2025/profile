import React from 'react';
import Image from 'next/image';
import styles from './Video.module.scss'

const Video = () => {
    return (
        <>
        <div className={styles.video}>
            <section className={styles.videoCol1}>
                <h1 className={styles.videoTitle}>Welcome to my profile</h1>
            </section>
            <section className={styles.videoCol2}>
                 
                <div className={styles.videoContainer}>
                    <video
                        src="/videos/uilab.mp4" // Place video in public/videos/
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