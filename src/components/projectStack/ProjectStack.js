import React from 'react';
import styles from './ProjectStack.module.scss';

const ProjectStack = ({ stack }) => {
    return (
        <div className={styles.projectStack}>
            <h2 className={styles.projectStackTitle}>Project Stack</h2>
            <ul className={styles.stackItems}>
                {stack.map((item, index) => (
                    <li key={index} className={styles.stackItem}>{item}</li>
                ))}
            </ul>
        </div>
    );

}

export default ProjectStack;