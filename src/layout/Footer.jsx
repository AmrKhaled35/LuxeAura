import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/playfair-display';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <div style={styles.footerTop}>
                    <div style={styles.footerColumn}>
                        <h3 style={styles.columnTitle}>
                            <span style={styles.highlight}>L</span>uxe
                            <span style={styles.highlight}>A</span>ura
                        </h3>
                        <p style={styles.columnText}>
                            Experience luxury fashion like never before. We bring you the finest selection of premium clothing and accessories.
                        </p>
                        <div style={styles.socialLinks}>
                            <a href="#" style={styles.socialIcon}>
                                <FaFacebookF />
                            </a>
                            <a href="#" style={styles.socialIcon}>
                                <FaTwitter />
                            </a>
                            <a href="#" style={styles.socialIcon}>
                                <FaInstagram />
                            </a>
                            <a href="#" style={styles.socialIcon}>
                                <FaPinterestP />
                            </a>
                        </div>
                    </div>
                    
                    <div style={styles.footerColumn}>
                        <h4 style={styles.columnHeader}>Quick Links</h4>
                        <ul style={styles.footerLinks}>
                            <li><Link to="/" style={styles.footerLink}>Home</Link></li>
                            <li><Link to="/about" style={styles.footerLink}>About Us</Link></li>
                            <li><Link to="/gallery" style={styles.footerLink}>Gallery</Link></li>
                            <li><Link to="/sale" style={styles.footerLink}>Sale</Link></li>
                            <li><Link to="/contact" style={styles.footerLink}>Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div style={styles.footerColumn}>
                        <h4 style={styles.columnHeader}>Customer Service</h4>
                        <ul style={styles.footerLinks}>
                            <li><a href="#" style={styles.footerLink}>Shipping Policy</a></li>
                            <li><a href="#" style={styles.footerLink}>Returns & Exchanges</a></li>
                            <li><a href="#" style={styles.footerLink}>FAQ</a></li>
                            <li><a href="#" style={styles.footerLink}>Size Guide</a></li>
                            <li><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    <div style={styles.footerColumn}>
                        <h4 style={styles.columnHeader}>Newsletter</h4>
                        <p style={styles.columnText}>
                            Subscribe to our newsletter to receive exclusive offers and updates.
                        </p>
                        <div style={styles.newsletterForm}>
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                style={styles.newsletterInput} 
                            />
                            <button style={styles.newsletterButton}>Subscribe</button>
                        </div>
                    </div>
                </div>
                
                <div style={styles.footerBottom}>
                    <p style={styles.copyright}>
                        Copyright &copy; LuxeAura 2024. All rights reserved.
                    </p>
                    <div style={styles.paymentMethods}>
                        <span style={styles.paymentMethod}>Visa</span>
                        <span style={styles.paymentMethod}>Mastercard</span>
                        <span style={styles.paymentMethod}>PayPal</span>
                        <span style={styles.paymentMethod}>Amex</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "#141414",
        color: "white",
        paddingTop: '4rem',
        paddingBottom: '2rem',
    },
    footerContent: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1200px',
        width: '100%',
        padding: '0 20px',
    },
    footerTop: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '3rem',
    },
    footerColumn: {
        flex: '1',
        minWidth: '250px',
        marginBottom: '2rem',
        paddingRight: '2rem',
    },
    columnTitle: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '28px',
        marginBottom: '1rem',
    },
    columnHeader: {
        fontSize: '18px',
        marginBottom: '1rem',
        fontWeight: '600',
        position: 'relative',
        paddingBottom: '10px',
    },
    columnText: {
        lineHeight: '1.6',
        color: '#cccccc',
        marginBottom: '1.5rem',
    },
    highlight: {
        color: 'goldenrod',
    },
    socialLinks: {
        display: 'flex',
        gap: '1rem',
    },
    socialIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        color: 'white',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        textDecoration: 'none',
    },
    footerLinks: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    footerLink: {
        color: '#cccccc',
        textDecoration: 'none',
        display: 'block',
        padding: '8px 0',
        transition: 'color 0.3s ease, padding-left 0.3s ease',
    },
    newsletterForm: {
        display: 'flex',
        marginTop: '1rem',
    },
    newsletterInput: {
        flex: '1',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px 0 0 4px',
        outline: 'none',
    },
    newsletterButton: {
        padding: '10px 15px',
        backgroundColor: 'goldenrod',
        color: 'white',
        border: 'none',
        borderRadius: '0 4px 4px 0',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'background-color 0.3s ease',
    },
    footerBottom: {
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    copyright: {
        color: '#cccccc',
    },
    paymentMethods: {
        display: 'flex',
        gap: '1rem',
    },
    paymentMethod: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '14px',
    },
};