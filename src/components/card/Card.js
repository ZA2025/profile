import styles from './Card.module.scss';

const Card = ({ title, description, image }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
            </div>
            <div className={styles.cardImage}>
                <img src="/images/profile1.png" alt="Profile" />
            </div>
        </div>
    );
}

export default Card;