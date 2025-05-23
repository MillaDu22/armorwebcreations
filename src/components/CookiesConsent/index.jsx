import React, { useState, useEffect } from 'react';
import './cookiesConsent.css';

// Fonction pour définir un cookie
const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

// Fonction pour obtenir la valeur d'un cookie
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    useEffect(() => {
        const consent = getCookie('cookieConsent');
        if (!consent) {
            setShowBanner(true); // Afficher le bandeau si le consentement n'a pas encore été donné
        } 
    }, []);

    const handleAccept = () => {
        setCookie('cookieConsent', 'accepted', 365); // Défini le cookie pour 1 an
        setShowBanner(false);
        setCookiesAccepted(true); // Masque le bandeau après acceptation
    };

    const handleDecline = () => {
        setCookie('cookieConsent', 'declined', 365); // Défini le cookie pour 1 an
        setShowBanner(false); // Masque le bandeau après refus
        setCookiesAccepted(false);
    };

    // Ne pas rendre le composant si le bandeau ne doit pas être affiché
    if (!showBanner) return null;

    return (
        <div className="cookies-banner">
            <div className="cookies-banner-content">
                <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site. Acceptez-vous l'utilisation des cookies ?</p>
                <div className="cookies-banner-buttons">
                    <button onClick={handleAccept}>Accepter</button>
                    <button onClick={handleDecline}>Refuser</button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;

