import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import Image from 'next/image';

const Card = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h1 className={styles.cardTitle}>{title}</h1>
                <p className={styles.cardDescription}>{description}</p>
                 
            </div>
            <div className={styles.cardImage}>
                <Image
                    src="/images/profile1.png"
                    alt="profile Image"
                    width="64"
                    height="61"
                    className={styles.cardImageResponsive}
                />
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;