import { useContext, useState } from "react";
import { SideBarContext } from "../Contexts/SideBarContext";
import { BsBag } from "react-icons/bs";
import { FiSearch, FiX } from "react-icons/fi";
import { ChartContext } from "../Contexts/ChartContext";
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import '@fontsource/playfair-display';

export default function Header() {
    const { IsOpen, setIsOpen } = useContext(SideBarContext);
    const { ItemAmount } = useContext(ChartContext);
    const [IsActive, SetIsActive] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [hoverNav , SetHoverNav] = useState(false);
    const handleHover=()=>{
        SetHoverNav(!hoverNav)
    }

    window.addEventListener("scroll", () => {
        window.scrollY > 700 ? SetIsActive(false) : SetIsActive(true);
    });

    const StyleH = {
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        position: 'fixed',
        zIndex: 10,
        transition: 'background-color 0.1s ease, box-shadow 0.1s ease, opacity 0.1s ease',
        paddingBottom: '1.5rem',
        opacity: 1
    };

    const StyleF = {
        backgroundColor: 'white',
        paddingBottom: '1.5rem',
        marginBottom: "20px",
        width: '100%',
        position: 'fixed',
        zIndex: 10,
        transition: 'background-color 0.1s ease, box-shadow 0.1s ease, opacity 0.1s ease',
    };

    return (
        <header style={IsActive ? StyleF : StyleH}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Link to="/" style={styles.logo}>
                    <div>Lu<span style={{ color: "goldenrod" }}>x</span>eAu<span style={{ color: "goldenrod" }}>r</span>a</div>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: "20px" }}>
                    <div onClick={() => setIsOpen(!IsOpen)} style={{ cursor: 'pointer', display: 'flex', position: 'relative', maxWidth: "50px", marginRight: "20px" }}>
                        <BsBag style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
                        <div style={{ backgroundColor: '#ef4444', position: 'absolute', right: '-0.5rem', bottom: '-0.5rem', fontSize: '12px', width: '18px', height: '18px', color: 'white', borderRadius: '9999px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {ItemAmount}
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <FiSearch
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            style={{ fontSize: '1.8rem', cursor: 'pointer', position: "relative", top: "6px", right: "101px" }}
                        />
                        {isSearchOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                right: '114px',
                                backgroundColor: 'white',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '8px',
                                padding: '8px',
                                width: '500px',
                                display: 'flex',
                                alignItems: 'center',
                                zIndex: 20,
                                transition: 'opacity 0.3s ease-in-out',
                                opacity: isSearchOpen ? 1 : 0,
                                height: "45px"
                            }}>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        padding: '8px',
                                        width: '100%',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        fontSize: '16px'
                                    }}
                                />
                                <FiX
                                    onClick={() => setIsSearchOpen(false)}
                                    style={{ fontSize: '1.5rem', cursor: 'pointer', marginLeft: '8px' }}
                                />
                            </div>
                        )}
                    </div>
                    <Link to='/Login'>
                        <FaUser style={{ fontSize: "26px", fontWeight: "400", color: "black", position: "absolute", right: "175px", top: "19px" }} />
                    </Link>
                </div>
            </div>
            <nav style={styles.nav}>
                <ul style={styles.navList}>
                    <li onMouseEnter={handleHover} onMouseLeave={handleHover}><Link to="/" style={styles.navLink}>Home</Link></li>
                    <li onMouseEnter={handleHover} onMouseLeave={handleHover}><Link to="/about" style={styles.navLink}>About</Link></li>
                    <li onMouseEnter={handleHover} onMouseLeave={handleHover}><Link to="/sale" style={styles.navLink}>Sale</Link></li>
                    <li onMouseEnter={handleHover} onMouseLeave={handleHover}><Link to="/gallery" style={styles.navLink}>Gallery</Link></li>
                    <li onMouseEnter={handleHover} onMouseLeave={handleHover}><Link to="/Contact" style={styles.navLink}>Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

const styles = {
    logo: {
        fontFamily: 'Playfair Display',
        textDecoration: "none",
        color: "black",
        width: "40px",
        fontSize: "40px",
        marginLeft: "20px",
        display: "flex"
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-20px'
    },
    navList: {
        display: 'flex',
        listStyleType: 'none',
        padding: '0',
        margin: '0'
    },
    navLink: {
        fontFamily: 'Playfair Display',
        textDecoration: 'none',
        color: 'black',
        margin: '0 15px',
        fontSize: '18px',
        fontWeight: '500',
        transition: 'color 0.3s ease',
    }
};
