import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section style={styles.section}>
            <video 
                src="https://cdn.shopify.com/videos/c/o/v/82cae632951644b090ce833526891e71.mp4" 
                autoPlay 
                muted 
                loop 
                style={{
                    ...styles.video,
                    transform: scrolled ? 'scale(1.05)' : 'scale(1)',
                }}
            />
            <div style={styles.container}>
                <div style={{
                    ...styles.content,
                    transform: scrolled ? 'translateY(-20px)' : 'translateY(0)',
                    opacity: scrolled ? 0.9 : 1
                }}>
                    <div style={styles.newTrend}>
                        <div style={styles.trendLine}></div>
                        New Trend
                    </div>
                    <h1 style={styles.title}>
                        AUTUMN SALE STYLISH <br />
                        <span style={styles.highlight}>WOMENS</span>
                    </h1>
                    <Link to="/" style={styles.button}>
                        Discover More
                    </Link>
                </div>
            </div>
            
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideRight {
                    from { transform: translateX(-20px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                @keyframes expandWidth {
                    from { width: 0; }
                    to { width: 2.5rem; }
                }
                
                @keyframes shine {
                    0% { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
                `}
            </style>
        </section>
    );
}

const styles = {
    section: {
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        '@media (max-width: 768px)': {
            height: '60vh',
        },
    },
    video: {
        position: 'absolute',
        top: '70px',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
        transition: 'transform 0.5s ease-out',
    },
    container: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '0 1rem',
    },
    content: {
        textAlign: 'center',
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    },
    newTrend: {
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        textTransform: "uppercase",
        marginBottom: '2rem',
        justifyContent: 'center',
        animation: 'slideRight 1s ease-out forwards',
    },
    trendLine: {
        width: '2.5rem',
        height: '3px',
        marginRight: '0.75rem',
        backgroundColor: 'gold',
        animation: 'expandWidth 1.2s ease-out forwards',
    },
    title: {
        fontSize: '4rem',
        lineHeight: '1.2',
        fontWeight: '300',
        marginBottom: '2rem',
        animation: 'fadeIn 1s ease-out forwards 0.3s',
        '@media (max-width: 768px)': {
            fontSize: '2.5rem',
        },
    },
    highlight: {
        fontWeight: '600',
        background: 'linear-gradient(to right, #000, goldenrod 50%, #000 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundSize: '200% auto',
        animation: 'shine 2s linear infinite',
    },
    button: {
        display: 'inline-block',
        padding: '1rem 2rem',
        backgroundColor: 'transparent',
        border: '2px solid black',
        color: 'black',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        animation: 'fadeIn 1s ease-out forwards 0.6s',
        '&:hover': {
            backgroundColor: 'goldenrod',
            borderColor: 'goldenrod',
            color: 'white',
        },
    },
};