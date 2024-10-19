import { useState, useContext } from "react";
import { BsPlus, BsEyeFill, BsHeart, BsHeartFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { ChartContext } from "../Contexts/ChartContext";

export default function Product({ product }) {
    const { id, image, category, title, price } = product;
    const [hover, setHover] = useState(false);
    const [favorite, setFavorite] = useState(false);  
    const { addToChart } = useContext(ChartContext);
    const toggleFavorite = () => {
        setFavorite(!favorite);
    };
    return (
        <div
            style={{
                border: '1px solid #e4e4e4',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out',
                backgroundColor: 'white',
                width: '100%',
                maxWidth: '300px',
                margin: '1rem',
                transform: hover ? 'scale(1.05)' : 'scale(1)',  
                transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Image */}
            <div
                style={{
                    height: '300px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease-in-out',
                    borderBottom: '1px solid #e4e4e4',
                }}
            >
                <div style={{ width: '100%', height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: '200px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={image}
                            alt={title}
                            style={{
                                maxHeight: '160px',
                                transform: hover ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.3s ease-in-out',
                                cursor: "pointer",
                                borderRadius: '8px',
                            }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        display: "flex",
                        flexDirection: "column",
                        gap: '10px',
                        transition: 'all 0.5s ease',
                        opacity: hover ? "1" : "0",
                    }}
                >
                    <button
                        onClick={() => addToChart(id, product)}
                        style={{
                            backgroundColor: "rgb(210 32 32)",
                            border: 'none',
                            cursor: 'pointer',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <BsPlus style={{ fontSize: '1.5rem' }} />
                    </button>
                    <Link
                        to={`/product/${id}`}
                        style={{
                            backgroundColor: 'white',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'black',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <BsEyeFill style={{ fontSize: '.9rem' }} />
                    </Link>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        transition: 'opacity 0.5s ease',
                        opacity: hover ? "1" : "0",
                    }}
                >
                    <button
                        onClick={toggleFavorite}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        {favorite ? (
                            <BsHeartFill style={{ color: 'red', fontSize: '1.5rem' }} />
                        ) : (
                            <BsHeart style={{ color: 'gray', fontSize: '1.5rem' }} />
                        )}
                    </button>
                </div>
            </div>
            <div style={{ padding: '1rem', textAlign: 'center' }}>
                <div
                    style={{
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem',
                        color: '#6B7280',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >
                    {category}
                </div>
                <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: '#1D4ED8' }}>
                    <h4
                        style={{
                            fontSize: '1rem',
                            color: '#000',
                            fontWeight: 'bold',
                            margin: '0',
                            marginBottom: '0.5rem',
                        }}
                    >
                        {title}
                    </h4>
                </Link>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#FF4C4C' }}>
                    ${price}
                </div>
            </div>
        </div>
    );
}
