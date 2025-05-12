import React from 'react';
import './logo3.css';
import logo3Video from '../../assets/videos/LogoHero.mp4'; 

const Logo3 = () => {
    return (
        <div className="logo3-container">
            <video className="logo3-video" autoPlay muted>
                <source src={logo3Video} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
            </video>
        </div>
    );
};

export default Logo3;
