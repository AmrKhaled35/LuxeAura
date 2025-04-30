import React from 'react';
import '@fontsource/playfair-display';
import image1 from '../Imgs/hero2.webp';

const About = () => {
    return (
        <div style={styles.container}>
            <section style={styles.heroSection}>
                <img
                    src={image1}
                    style={styles.heroVideo}
                />
                <div style={styles.heroOverlay}>
                    <h1 style={styles.heroTitle}>
                        <span style={styles.highlight}>L</span>uxe
                        <span style={styles.highlight}>A</span>ura
                    </h1>
                    <p style={styles.heroSubtitle}>Elegance in Every Detail</p>
                </div>
            </section>
            <section style={styles.storySection}>
                <div style={styles.storyContainer}>
                    <h2 style={styles.sectionTitle}>
                        <span style={styles.highlight}>O</span>ur Story
                    </h2>
                    <div style={styles.storyContent}>
                        <div style={styles.storyText}>
                            <p style={styles.paragraph}>
                                Founded in 2010, LuxeAura began with a vision to provide exceptional luxury products that combine elegance, 
                                quality, and contemporary design. What started as a small boutique in Paris has grown into a global brand 
                                recognized for its commitment to craftsmanship and innovation.
                            </p>
                            <p style={styles.paragraph}>
                                Our team of designers works tirelessly to create collections that reflect the modern lifestyle while 
                                preserving timeless elegance. We believe that luxury is not just about the price tag, but about the 
                                experience, quality, and the story behind each piece.
                            </p>
                            <p style={styles.paragraph}>
                                We source the finest materials from around the world and collaborate with skilled artisans who share our 
                                passion for perfection. Every LuxeAura product undergoes rigorous quality checks to ensure it meets our 
                                exacting standards before reaching your hands.
                            </p>
                        </div>
                        <div style={styles.storyImage}>
                            <img 
                                src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="LuxeAura Boutique" 
                                style={styles.image}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section style={styles.valuesSection}>
                <div style={styles.valuesContainer}>
                    <h2 style={styles.sectionTitle}>
                        <span style={styles.highlight}>O</span>ur Values
                    </h2>
                    <div style={styles.valuesGrid}>
                        <div style={styles.valueCard}>
                            <h3 style={styles.valueTitle}>Quality</h3>
                            <p style={styles.valueDescription}>
                                We never compromise on quality. Each product is crafted with attention to detail and made to last.
                            </p>
                        </div>
                        <div style={styles.valueCard}>
                            <h3 style={styles.valueTitle}>Sustainability</h3>
                            <p style={styles.valueDescription}>
                                We are committed to ethical practices and reducing our environmental footprint in all aspects of our business.
                            </p>
                        </div>
                        <div style={styles.valueCard}>
                            <h3 style={styles.valueTitle}>Innovation</h3>
                            <p style={styles.valueDescription}>
                                We constantly explore new techniques and designs to bring fresh and exciting products to our customers.
                            </p>
                        </div>
                        <div style={styles.valueCard}>
                            <h3 style={styles.valueTitle}>Customer Experience</h3>
                            <p style={styles.valueDescription}>
                                We strive to provide an exceptional shopping experience both online and in our stores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section style={styles.teamSection}>
                <div style={styles.teamContainer}>
                    <h2 style={styles.sectionTitle}>
                        <span style={styles.highlight}>O</span>ur Team
                    </h2>
                    <div style={styles.teamGrid}>
                        <div style={styles.teamMember}>
                            <img 
                                src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="Team Member" 
                                style={styles.teamImage}
                            />
                            <h3 style={styles.teamName}>Sophia Laurent</h3>
                            <p style={styles.teamRole}>Creative Director</p>
                        </div>
                        <div style={styles.teamMember}>
                            <img 
                                src="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="Team Member" 
                                style={styles.teamImage}
                            />
                            <h3 style={styles.teamName}>Alexandre Dubois</h3>
                            <p style={styles.teamRole}>Head Designer</p>
                        </div>
                        <div style={styles.teamMember}>
                            <img 
                                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="Team Member" 
                                style={styles.teamImage}
                            />
                            <h3 style={styles.teamName}>Isabella Rossi</h3>
                            <p style={styles.teamRole}>Marketing Director</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
    },
    heroSection: {
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
    },
    heroVideo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: '78px',
        left: 0,
        zIndex: -1,
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'block',
    },
    
    heroOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    },
    heroTitle: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '80px',
        marginBottom: '20px',
    },
    heroSubtitle: {
        fontSize: '24px',
        fontWeight: 300,
        maxWidth: '600px',
    },
    highlight: {
        color: 'goldenrod',
    },
    
    // Story Section Styles
    storySection: {
        padding: '100px 0',
        backgroundColor: '#fff',
    },
    storyContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    sectionTitle: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '40px',
        textAlign: 'center',
        marginBottom: '50px',
        position: 'relative',
    },
    storyContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '50px',
    },
    storyText: {
        flex: '1',
    },
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.8',
        color: '#333',
        marginBottom: '20px',
    },
    storyImage: {
        flex: '1',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    
    // Values Section Styles
    valuesSection: {
        padding: '100px 0',
        backgroundColor: '#f8f8f8',
    },
    valuesContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    valuesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
    },
    valueCard: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    valueTitle: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '24px',
        marginBottom: '15px',
        position: 'relative',
        paddingBottom: '10px',
    },
    valueDescription: {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#666',
    },
    
    // Team Section Styles
    teamSection: {
        padding: '100px 0',
        backgroundColor: '#fff',
    },
    teamContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    teamGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        justifyItems: 'center',
    },
    teamMember: {
        textAlign: 'center',
    },
    teamImage: {
        width: '250px',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: '20px',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    },
    teamName: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '22px',
        marginBottom: '5px',
    },
    teamRole: {
        fontSize: '16px',
        color: '#666',
    },
};

export default About;