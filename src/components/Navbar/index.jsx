import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHeader from '../LogoHeader/index';
import './navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="container-navbar">
            <nav className="nav-header">
                {/* Bouton de menu burger pour mobile */}
                <button className="menu-toggle" onClick={toggleMobileMenu}>
                    ☰
                </button>

                {/* Logo centré */}
                <div className="logo-centered">
                    <LogoHeader />
                </div>

                {/* Conteneur complet du menu (sections gauche et droite) */}
                <div className={`nav-items ${isMobileMenuOpen ? "active" : ""}`}>
                    {/* Section gauche */}
                    <div className="nav-left">
                        <Link className="nav-item" to="/" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-home" style={{ fontSize: '15px', marginRight: '10px' }}></i>Accueil</p>
                        </Link>
                        <Link className="nav-item" to="/about" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-user" style={{ fontSize: '15px', marginRight: '10px' }}></i>AWC</p>
                        </Link>
                        <a className="nav-item" href="https://ldla-mti-web-developer.vercel.app" target="_blank" rel="noreferrer" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-briefcase" style={{ fontSize: '15px', marginRight: '10px' }}></i>Projets</p>
                        </a>
                    </div>

                    {/* Section droite */}
                    <div className="nav-right">
                        <Link className="nav-item" to="/services" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-tags" style={{ fontSize: '15px', marginRight: '10px' }}></i>Packs</p>
                        </Link>
                        <Link className="nav-item" to="/avis" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-star" style={{ fontSize: '15px', marginRight: '10px' }}></i>Avis</p>
                        </Link>
                        <Link className="nav-item" to="/contact" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-envelope" style={{ fontSize: '15px', marginRight: '10px' }}></i>Contact</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;