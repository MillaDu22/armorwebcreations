import React from 'react';
import './logoFooter.css';
import Britain from '../../assets/images/britain-logo.webp';

function Logo() {
    return(
        <div id="home" className = "container-header">
            <a className = "container-containers" href="./">
                <div className="container-title-france">
                    <h2 className="title-app">ARMOR WEB CREATIONS</h2>
                    <div className="bleu-blanc-rouge">
                        <span className="bleu"></span>
                        <span className="blanc"></span>
                        <span className="rouge"></span>
                    </div>
                </div>
                <div className="container-logo-subtitle">
                    <img className ="britain" src = {Britain} alt="Britain-logo"/>
                    <h3 className = "subtitle-app">Ludmilla Marti</h3>
                </div>
            </a>
        </div>
    )
}
export default Logo;