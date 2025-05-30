
import styles from "./page.module.scss";
import RecentProjects from "@/components/recentProject/RecentProjects";
import ProfileCard from "@/components/profileCard/ProfileCard";
import Timeline from "@/components/timeline/Timeline";
import Stack from "@/components/stack/Stack";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <section className={styles.main}>
          <ProfileCard />
          <Stack />
          <Contact />
          <Timeline />
        </section>
        <section className={styles.sidebar}>
          <header className={styles.sidebarHeader}>
              <h2>A FRONT-END DEVELOPER</h2>  
          </header>
          <RecentProjects />
        </section>
      </div>
    </div>
  );
}
