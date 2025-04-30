import React, { useState } from 'react';
import '@fontsource/playfair-display';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);
    };

    return (
        <section style={styles.section}>
            <div style={styles.background}>
                <span style={styles.title}>C</span>ontact Us
            </div>
            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.row}>
                        <div style={styles.formGroup}>
                            <label htmlFor="name" style={styles.label}>Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Enter your name"
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="email" style={styles.label}>Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                style={styles.input}
                            />
                        </div>
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="phone" style={styles.label}>Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="Enter your phone number"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="message" style={styles.label}>Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder="Enter your message"
                            style={styles.textarea}
                        />
                    </div>
                    <button
                        type="submit"
                        style={hover ? styles.buttonHover : styles.button}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

const styles = {
    section: {
        paddingTop: '128px',
        paddingBottom: '128px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    background: {
        height: '200px',
        width: '100%',
        background: '#f2f3f5',
        position: 'absolute',
        top: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Playfair Display',
        fontSize: '60px',
        fontWeight: '500'
    },
    title: {
        color: 'goldenrod'
    },
    formContainer: {
        maxWidth: '800px', 
        width: '100%',
        paddingLeft: '16px',
        paddingRight: '16px',
        marginTop: '200px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        padding: '32px',
        position: 'relative',
        zIndex: 1
    },
    heading: {
        fontSize: '28px',
        fontWeight: 600,
        marginBottom: '24px',
        textAlign: 'center',
        fontFamily: 'Playfair Display'
    },
    row: {
        display: 'flex',
        gap: '16px'  
    },
    formGroup: {
        flex: 1  
    },
    label: {
        display: 'block',
        marginBottom: '8px'
    },
    input: {
        width: '100%',
        padding: '12px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        marginBottom : "20px",
        padding : "15px"
    },
    textarea: {
        width: '100%',
        padding: '12px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        minHeight: '100px',
        marginBottom : "20px"
    },
    button: {
        width: '100%',
        padding: '14px',
        backgroundColor: 'black',
        color: 'white',
        border: 'black solid 3px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 500,
        transition: 'ease 0.5s'
    },
    buttonHover: {
        width: '100%',
        padding: '14px',
        backgroundColor: 'white',
        color: 'black',
        border: 'black solid 3px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 500,
        transition: 'ease 0.5s'
    }
};

export default ContactUs;
