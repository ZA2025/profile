import styles from './Stack.module.scss';

const Stack = () => {
    return (
        <div className={styles.stack}>
            <div className={styles.stackCard}>
                <div className={styles.stackContent}>
                <h2 className={styles.stackTitle}>Stack</h2>
                    <ul className={styles.stackItems}>
                        <li className={styles.stackItem}>HTML</li>
                        <li className={styles.stackItem}>CSS</li>
                        <li className={styles.stackItem}>SCSS</li>
                        <li className={styles.stackItem}>JAVASCRIPT (ES6)</li>
                        <li className={styles.stackItem}>REACT</li>
                        <li className={styles.stackItem}>NEXT.JS</li>
                        <li className={styles.stackItem}>Figma</li>
                        <li className={styles.stackItem}>GIT</li>
                        <li className={styles.stackItem}>JIRA</li>
                        <li className={styles.stackItem}>Agile/Scrum</li>
                        <li className={styles.stackItem}>Web Accessibility</li>
                        <li className={styles.stackItem}>Responsive Web Design</li>
                        <li className={styles.stackItem}>POSTMAN</li>
                        <li className={styles.stackItem}>NODE.JS</li>
                    </ul>
                </div>
                <div className={styles.stackImage}>
                    <img src="/images/profile1.png" alt="Profile" />
                </div>   
            </div>
             
        </div>
    )
}

export default Stack;