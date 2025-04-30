import React, { useState } from 'react';
import '@fontsource/playfair-display';
export default function FashionFilter({ onCategorySelect }) {
    const categories = ['All', "men's clothing", "women's clothing","jewelery", "electronics"];
    return (
        <section style={{ padding: '2rem 0', backgroundColor: '#f8f8f8' , height : "300px" }}>
            <div style={{
                textAlign: 'center',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'black',
                textTransform: 'uppercase',
                position : "relative",
                top:"70px",
                marginBottom : "30px",
                fontFamily: 'Playfair Display'

            }}>
                Late<span style={{color : "goldenrod"}}>s</span>t Fashi<span style={{color : "goldenrod"}}>o</span>n Tre<span style={{color : "goldenrod"}}>n</span>ds
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                columnGap: '1rem',
                flexWrap: 'wrap',
                padding: '0 2rem',
                position : 'relative',
                top : "80px"
            }}>
                
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategorySelect(category)}
                        style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#fff',
                            border: '2px solid  black',
                            color : "black" ,
                            borderRadius: '25px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </section>
    );
}
