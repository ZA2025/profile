"use client";
import React from 'react';
import styles from './ThemeToggle.module.scss';
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

     

    // On mount, initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
        setTheme(savedTheme);
        applyThemeClass(savedTheme);
        } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = prefersDark ? "dark" : "light";
        setTheme(defaultTheme);
        applyThemeClass(defaultTheme);
        }
    }, []);

    // Function to apply theme class to <html>
    const applyThemeClass = (theme) => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    };

    // Toggle theme and save preference
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        applyThemeClass(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button className={styles.btn} onClick={toggleTheme}>
         {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
}

export default ThemeToggle;