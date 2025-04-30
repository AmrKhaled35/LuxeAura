import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../Contexts/ProductContext';
import { ChartContext } from '../Contexts/ChartContext';
import '@fontsource/playfair-display';

const Sale = () => {
    const { product, loading, error } = useContext(ProductContext);
    const { addToChart } = useContext(ChartContext);
    const [saleProducts, setSaleProducts] = useState([]);
    const [countdown, setCountdown] = useState({
        days: 3,
        hours: 8,
        minutes: 45,
        seconds: 0
    });

    useEffect(() => {
        if (product.length > 0) {
            const discountedProducts = product.map(item => {
                const discountPercent = Math.floor(Math.random() * 21) + 20;
                const discountedPrice = (item.price * (100 - discountPercent) / 100).toFixed(2);
                return {
                    ...item,
                    originalPrice: item.price,
                    price: discountedPrice,
                    discount: discountPercent
                };
            });
            setSaleProducts(discountedProducts);
        }
    }, [product]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevTime => {
                let { days, hours, minutes, seconds } = prevTime;
                
                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            } else {
                                days = 7;
                            }
                        }
                    }
                }
                
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    if (loading) return (
        <div style={styles.loading}>
            <div style={styles.spinner}></div>
            <p>Loading Sale Items...</p>
        </div>
    );

    if (error) return <div style={styles.error}>{error}</div>;

    return (
        <div style={styles.saleContainer}>
            <div style={styles.hero}>
                <img 
                    src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg"
                    alt="Fashion Model"
                    style={styles.heroImage}
                />
                <div style={styles.heroOverlay}></div>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Winter Collection</h1>
                    <p style={styles.heroSubtitle}>Discover Luxury Fashion at Unbeatable Prices</p>
                </div>
            </div>

            <div style={styles.saleBanner}>
                <h2 style={styles.saleTitle}>Flash Sale</h2>
                <p style={styles.saleSubtitle}>Up to 40% off on selected items</p>
                <div style={styles.countdownContainer}>
                    <p style={styles.countdownTitle}>Hurry Up! Sale Ends In:</p>
                    <div style={styles.countdown}>
                        <div style={styles.countdownItem}>
                            <div style={styles.countdownValue}>{countdown.days}</div>
                            <div style={styles.countdownLabel}>Days</div>
                        </div>
                        <div style={styles.countdownSeparator}>:</div>
                        <div style={styles.countdownItem}>
                            <div style={styles.countdownValue}>{String(countdown.hours).padStart(2, '0')}</div>
                            <div style={styles.countdownLabel}>Hours</div>
                        </div>
                        <div style={styles.countdownSeparator}>:</div>
                        <div style={styles.countdownItem}>
                            <div style={styles.countdownValue}>{String(countdown.minutes).padStart(2, '0')}</div>
                            <div style={styles.countdownLabel}>Minutes</div>
                        </div>
                        <div style={styles.countdownSeparator}>:</div>
                        <div style={styles.countdownItem}>
                            <div style={styles.countdownValue}>{String(countdown.seconds).padStart(2, '0')}</div>
                            <div style={styles.countdownLabel}>Seconds</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.saleProductsContainer}>
                <h2 style={styles.sectionTitle}>Sale Items</h2>
                <div style={styles.productsGrid}>
                    {saleProducts.map(product => (
                        <div key={product.id} style={styles.productCard}>
                            <div style={styles.discountBadge}>-{product.discount}%</div>
                            <div style={styles.productImageContainer}>
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    style={styles.productImage} 
                                />
                            </div>
                            <div style={styles.productDetails}>
                                <h3 style={styles.productTitle}>{product.title}</h3>
                                <div style={styles.productCategory}>{product.category}</div>
                                <div style={styles.priceContainer}>
                                    <span style={styles.salePrice}>${product.price}</span>
                                    <span style={styles.originalPrice}>${product.originalPrice}</span>
                                </div>
                                <button 
                                    style={styles.addToCartButton}
                                    onClick={() => addToChart(product.id, product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={styles.saleTerms}>
                <h3 style={styles.termsTitle}>Sale Terms & Conditions</h3>
                <ul style={styles.termsList}>
                    <li>Sale valid for a limited time only</li>
                    <li>Discounts cannot be combined with other offers</li>
                    <li>All sales are final. No returns or exchanges on sale items</li>
                    <li>Free shipping on orders over $100</li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    saleContainer: {
        paddingTop: '70px',
        position: 'relative',
    },
    hero: {
        position: 'relative',
        height: '80vh',
        width: '100%',
        overflow: 'hidden',
    },
    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    heroOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    heroContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        width: '90%',
        maxWidth: '800px',
    },
    heroTitle: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '4rem',
        marginBottom: '1rem',
        '@media (max-width: 768px)': {
            fontSize: '2.5rem',
        },
    },
    heroSubtitle: {
        fontSize: '1.5rem',
        opacity: 0.9,
        '@media (max-width: 768px)': {
            fontSize: '1.2rem',
        },
    },
    saleBanner: {
        padding: '40px 20px',
        backgroundColor: '#000',
        color: 'white',
        textAlign: 'center',
    },
    saleTitle: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '48px',
        marginBottom: '10px',
        '@media (max-width: 768px)': {
            fontSize: '36px',
        },
    },
    saleSubtitle: {
        fontSize: '20px',
        marginBottom: '30px',
        '@media (max-width: 768px)': {
            fontSize: '16px',
        },
    },
    countdownContainer: {
        maxWidth: '600px',
        margin: '0 auto',
    },
    countdownTitle: {
        fontSize: '18px',
        marginBottom: '15px',
    },
    countdown: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
    },
    countdownItem: {
        textAlign: 'center',
    },
    countdownValue: {
        backgroundColor: 'goldenrod',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
        padding: '15px',
        borderRadius: '5px',
        minWidth: '60px',
    },
    countdownLabel: {
        marginTop: '5px',
        fontSize: '14px',
    },
    countdownSeparator: {
        fontSize: '30px',
        fontWeight: 'bold',
        margin: '0 5px',
        '@media (max-width: 480px)': {
            display: 'none',
        },
    },
    saleProductsContainer: {
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '0 20px',
    },
    sectionTitle: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '36px',
        textAlign: 'center',
        marginBottom: '40px',
        position: 'relative',
    },
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px',
    },
    productCard: {
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
        },
    },
    discountBadge: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: '#ef4444',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: '1',
    },
    productImageContainer: {
        padding: '20px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    productImage: {
        maxHeight: '160px',
        maxWidth: '100%',
        objectFit: 'contain',
    },
    productDetails: {
        padding: '20px',
    },
    productTitle: {
        fontSize: '16px',
        fontWeight: '500',
        marginBottom: '10px',
        minHeight: '48px',
    },
    productCategory: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '10px',
        textTransform: 'uppercase',
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        gap: '10px',
    },
    salePrice: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#ef4444',
    },
    originalPrice: {
        fontSize: '16px',
        color: '#666',
        textDecoration: 'line-through',
    },
    addToCartButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: 'goldenrod',
        },
    },
    saleTerms: {
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
    },
    termsTitle: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '24px',
        marginBottom: '15px',
    },
    termsList: {
        paddingLeft: '20px',
        lineHeight: '1.8',
    },
    loading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    spinner: {
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid goldenrod',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
    error: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#ef4444',
        fontSize: '18px',
    },
};

export default Sale;