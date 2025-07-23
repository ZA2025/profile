
import React from 'react';
import styles from "./page.module.scss";
import RecentProjects from "@/components/recentProject/RecentProjects";
import ProfileCard from "@/components/profileCard/ProfileCard";
import Timeline from "@/components/timeline/Timeline";
import Stack from "@/components/stack/Stack";
import Contact from "@/components/contact/Contact";
import VerticalCarousel from "@/components/verticalCarousel/VerticalCarousel";
import Video from '@/components/video/video';

export default function Home() {
  return (
    <div className="wrapper">
      <section className={styles.banner}>
          <Video />
      </section>
      <main className={styles.container}>
        <section className={styles.main}>
          <ProfileCard />
          <Stack />
          <Contact />
          <Timeline />
        </section>
        <aside className={styles.sidebar}>
          <header className={styles.sidebarHeader}>
              <h1>A FRONT-END DEVELOPER</h1>  
          </header>
          <RecentProjects />
        </aside>
      </main>
    </div>
  );
}
