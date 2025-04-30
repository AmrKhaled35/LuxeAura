import React, { useEffect, useRef, useState } from 'react';
import Home from '../Pages/Home';

const SplashScreen = () => {
    const [showHome, setShowHome] = useState(false);
    const lettersRef = useRef([]);

    useEffect(() => {
        const timeouts = [];

        lettersRef.current.forEach((letter, i) => {
            const timeoutId = setTimeout(() => {
                letter.style.opacity = 1;
            }, i * 300);
            timeouts.push(timeoutId);
        });

        const showHomeTimeoutId = setTimeout(() => {
            setShowHome(true);
        }, lettersRef.current.length * 300 + 1000);
        timeouts.push(showHomeTimeoutId);

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <div id="splash-screen" className="splash-screen">
            <h1 className="letters">
                {'LuxeAura'.split('').map((letter, index) => (
                    <span
                        key={index}
                        className="letter"
                        ref={el => lettersRef.current[index] = el}
                        style={{ opacity: 0 }}
                    >
                        {letter}
                    </span>
                ))}
            </h1>
            {showHome && <Home />}  
        </div>
    );
};

export default SplashScreen;
