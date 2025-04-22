import styles from './ProfileCard.module.scss';

const ProfileCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Front End Developer</h2>
                <p className={styles.cardDescription}>
                    Front-end Developer with 6+ years of experience creating and maintaining responsive, user-focused websites and web applications. Skilled at translating PSD designs into interactive, pixel-perfect interfaces, and collaborating closely with web designers, back-end developers, and UX teams to deliver seamless digital experiences that align with project goals and user needs.
                </p>
            </div>
            <div className={styles.cardImage}>
                <img src="/images/profile1.png" alt="Profile" />
            </div>
        </div>
    );
}
export default ProfileCard;