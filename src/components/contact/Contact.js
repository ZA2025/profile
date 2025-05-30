'use client';
import { useState } from 'react';
import styles from './Contact.module.scss';
import Image from 'next/image';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); 

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null); // Reset status before submission

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ success: true, message: 'Your message has been sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
                console.log(response)
            } else {
                const errorData = await response.json();
                setStatus({ success: false, message: errorData.error || 'Failed to send your message.' });
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setStatus({ success: false, message: 'An unexpected error occurred. Please try again later.' });
        }
    };

    return (
        <div className={styles.contact}>
            <section className={styles.contactSection}>
                <div className={styles.contactContent}>
                    <h1 className={styles.contactTitle}>Contact Me</h1>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.input}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textArea}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.liveLink}>Contact Me</button>
                    </form>

                    {/* Display success or error messages */}
                    {status && (
                        <p
                            className={
                                status.success
                                    ? styles.successMessage
                                    : styles.errorMessage
                            }
                        >
                            {status.message}
                        </p>
                    )}
                </div>

                <div className={styles.contactImage}>
                    <Image
                        src="/images/profile1.png"
                        alt="profile Image"
                        width="64"
                        height="61"
                    />
                </div> 
            </section>
        </div>
    );
};

export default Contact;