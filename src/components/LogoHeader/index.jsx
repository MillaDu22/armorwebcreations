import React from 'react';
import './logoHeader.css';
import Logo from '../../assets/videos/LogoHeader.mp4'; 

const LogoHeader = () => {
    return (
        <div className="logo-container">
            <video className="logo-video" autoPlay muted>
                <source src={Logo} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
            </video>
        </div>
    );
};

export default LogoHeader;