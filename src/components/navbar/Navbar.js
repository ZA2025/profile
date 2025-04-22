"use client";

import { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <h1 className={styles.navbarTitle}>Portfolio</h1>
            </div>
            <div className={styles.burgerMenuContainer}>
                <div className={styles.burgerMenu} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
             
            <ul className={`${styles.dropdown} ${isMenuOpen ? styles.open : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;