import {  useContext,useState, useEffect } from 'react';
import { BsBag } from 'react-icons/bs';
import { FiSearch, FiX, FiMenu } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '@fontsource/playfair-display';
import './style/header.css';
import { SideBarContext } from "../Contexts/SideBarContext";
import { ChartContext } from "../Contexts/ChartContext";

export default function Header() {
    const { IsOpen, setIsOpen } = useContext(SideBarContext);
    const [isActive, setIsActive] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [activeLink, setActiveLink] = useState('/');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { ItemAmount } = useContext(ChartContext);
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 70 ? setIsActive(false) : setIsActive(true);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const path = window.location.pathname;
        setActiveLink(path);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={isActive ? 'header-fixed' : 'header-scrolled'}>
            <div className="header-container">
                <Link to="/" className="logo">
                    <div className="logo-text">
                        Lu<span className="highlight">x</span>eAu<span className="highlight">r</span>a
                    </div>
                </Link>
                
                <button 
                    className="mobile-menu-button"
                    onClick={toggleMobileMenu}
                >
                    <FiMenu size={24} />
                </button>
                
                <nav className={`nav ${isMobileMenuOpen ? 'nav-mobile-open' : 'nav-mobile-closed'}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className={activeLink === '/'? 'nav-link' : 'nav-link' }>Home</Link></li>
                        <li><Link to="/about" className={activeLink === '/about'? 'nav-link' : 'nav-link' }>About</Link></li>
                        <li><Link to="/sale" className={activeLink === '/sale' ? 'nav-link' : 'nav-link'}>Sale</Link></li>
                        <li><Link to="/gallery" className={activeLink === '/gallery' ? 'nav-link' : 'nav-link'}>Gallery</Link></li>
                        <li><Link to="/Contact" className={activeLink === '/Contact' ? 'nav-link' : 'nav-link'}>Contact Us</Link></li>
                    </ul>
                </nav>

                <div className="actions">
                    <div className='cart-button' onClick={() => setIsOpen(!IsOpen)}>
                        <BsBag  className="cart-icon" />
                        <div className="cart-badge">{ItemAmount}</div>
                    </div>
                    <div className="search-container">
                        <FiSearch
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="search-icon"
                        />
                        {isSearchOpen && (
                            <div className="search-dropdown">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    className="search-input"
                                />
                                <FiX
                                    onClick={() => {
                                        setIsSearchOpen(false);
                                        setSearchInput('');
                                    }}
                                    className="close-icon"
                                />
                            </div>
                        )}
                    </div>

                    <Link to='/Login' className="user-icon-link">
                        <FaUser className="user-icon" />
                    </Link>
                </div>
            </div>
        </header>
    );
}