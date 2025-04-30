import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../Contexts/ProductContext';
import '@fontsource/playfair-display';

const Gallery = () => {
    const { product, loading, error } = useContext(ProductContext);
    const [galleryImages, setGalleryImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const luxuryImages = [
        {
            id: 101,
            url: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Luxury Fashion Show'
        },
        {
            id: 102,
            url: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Designer Watch Collection'
        },
        {
            id: 103,
            url: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Haute Couture Jewelry'
        },
        {
            id: 104,
            url: 'https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Premium Fashion Accessories'
        },
        {
            id: 105,
            url: 'https://images.pexels.com/photos/977908/pexels-photo-977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Exclusive Boutique Collection'
        },
        {
            id: 106,
            url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Runway Fashion'
        },
        {
            id: 107,
            url: 'https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Designer Clothing Line'
        },
        {
            id: 108,
            url: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Luxury Bag Collection'
        }
    ];

    useEffect(() => {
        if (product.length > 0) {
            const combinedImages = [
                ...product.map(item => ({
                    id: item.id,
                    url: item.image,
                    title: item.title,
                    size: getRandomSize()
                })),
                ...luxuryImages.map(item => ({
                    ...item,
                    size: getRandomSize()
                }))
            ];
            setGalleryImages(combinedImages);
        }
    }, [product]);
    const getRandomSize = () => {
        const sizes = ['small', 'medium', 'large'];
        return sizes[Math.floor(Math.random() * sizes.length)];
    };
    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    if (loading) return (
        <div style={styles.loading}>
            <div style={styles.spinner}></div>
            <p>Loading Gallery...</p>
        </div>
    );

    if (error) return <div style={styles.error}>{error}</div>;

    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <span style={styles.highlight}>G</span>allery
            </div>
            
            <div style={styles.galleryIntro}>
                <h2 style={styles.galleryTitle}>Our Collection Showcase</h2>
                <p style={styles.galleryDescription}>
                    Explore our exclusive collection of luxury items. Each piece is carefully crafted to bring elegance and sophistication to your everyday life.
                </p>
            </div>

            <div style={styles.masonryContainer}>
                {galleryImages.map((image) => (
                    <div 
                        key={image.id} 
                        style={{
                            ...styles.imageItem,
                            ...(image.size === 'small' ? styles.small : 
                               image.size === 'medium' ? styles.medium : styles.large)
                        }}
                        onClick={() => openLightbox(image)}
                    >
                        <div style={styles.imageWrapper}>
                            <img 
                                src={image.url} 
                                alt={image.title} 
                                style={styles.image}
                            />
                            <div style={styles.imageOverlay}>
                                <p style={styles.imageTitle}>{image.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div style={styles.lightbox} onClick={closeLightbox}>
                    <span style={styles.closeButton}>&times;</span>
                    <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={selectedImage.url} 
                            alt={selectedImage.title} 
                            style={styles.lightboxImage} 
                        />
                        <p style={styles.lightboxTitle}>{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

const styles = {
    section: {
        paddingTop: '128px',
        paddingBottom: '64px',
        position: 'relative',
    },
    header: {
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
    highlight: {
        color: 'goldenrod'
    },
    galleryIntro: {
        maxWidth: '800px',
        margin: '240px auto 40px',
        textAlign: 'center',
        padding: '0 20px'
    },
    galleryTitle: {
        fontFamily: 'Playfair Display',
        fontSize: '36px',
        marginBottom: '20px',
        position: 'relative',
        display: 'inline-block'
    },
    galleryDescription: {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#666'
    },
    masonryContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gridAutoRows: '10px',
        gridGap: '15px',
        padding: '0 20px'
    },
    imageItem: {
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)'
        }
    },
    small: {
        gridRowEnd: 'span 25'
    },
    medium: {
        gridRowEnd: 'span 35'
    },
    large: {
        gridRowEnd: 'span 45'
    },
    imageWrapper: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease'
    },
    imageOverlay: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px',
        transform: 'translateY(100%)',
        transition: 'transform 0.3s ease',
    },
    imageTitle: {
        margin: '0',
        fontSize: '14px',
        textAlign: 'center'
    },
    lightbox: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
    },
    closeButton: {
        position: 'absolute',
        top: '20px',
        right: '30px',
        color: 'white',
        fontSize: '40px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    lightboxContent: {
        maxWidth: '80%',
        maxHeight: '80%',
        position: 'relative',
    },
    lightboxImage: {
        maxWidth: '100%',
        maxHeight: '80vh',
        objectFit: 'contain',
        border: '2px solid white',
        borderRadius: '4px',
    },
    lightboxTitle: {
        color: 'white',
        textAlign: 'center',
        margin: '20px 0 0',
        fontSize: '18px',
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
    }
};

export default Gallery;