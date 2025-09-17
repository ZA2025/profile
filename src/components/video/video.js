"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Video.module.scss'
import { useEffect, useState } from "react";

const Video = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const html = document.documentElement;
    
        // Initial theme
        setTheme(html.classList.contains("dark") ? "dark" : "light");
    
        // Watch for class changes
        const observer = new MutationObserver(() => {
          setTheme(html.classList.contains("dark") ? "dark" : "light");
        });
    
        observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    
        return () => observer.disconnect();
      }, []);
    return (
        <>
        <div className={styles.video}>
            <section className={styles.videoCol1}>
                <h2 className={styles.videoTitle}>
                    <p>uilab.co.uk</p>
                    <span className={styles.word}>Welcome to my website</span> 
                    <span className={styles.word}>to my</span>
                    <span className={styles.word}>profile</span>
                </h2>
            </section>
            <section className={styles.videoCol2}>
                 
                <div className={styles.videoContainer}>
                    <video
                        // src="/videos/profile2.mp4" // Place video in public/videos/
                        src={theme === "dark" ? "/videos/dark1.mp4" : "/videos/profile2.mp4"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        key={theme}
                    />
                </div>
            </section>
        </div>
         
        </>
    )
}

export default Video;