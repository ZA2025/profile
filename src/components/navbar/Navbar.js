"use client";
import React from 'react';

import { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <h1 className={`${styles.navbarTitle}`}>Portfolio</h1>
            </div>
            <div className={styles.burgerMenuContainer}>
                <div className={styles.burgerMenu} onClick={toggleMenu} role="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul role="list" className={`${styles.dropdown} ${isMenuOpen ? styles.open : ''}`}>
                <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;