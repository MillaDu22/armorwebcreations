import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/index.jsx';
import Intro from '../../components/Intro/index.jsx';
import Timeline from '../../components/Timeline/index.jsx';
import CookiesConsent from '../../components/CookiesConsent/index.jsx';
import './home.css';

function Home() {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);
    const pageRef = useRef();

    useEffect(() => {
        const consent = document.cookie
        .split('; ')
        .find(row => row.startsWith('cookieConsent='))
        ?.split('=')[1];
    
        if (consent === 'accepted') {
            setCookiesAccepted(true);
    
        // Vérifiez si le script GTM est déjà chargé
        if (!window.dataLayer) {
            // Création et insertion du script Google Tag Manager
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=GTM-K2D59TZV`;
            script.async = true;
            document.body.appendChild(script);
        
            script.onload = () => {
                // Initialisation de Google Analytics
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GTM-K2D59TZV');
            };
        }
    }
    }, []);

    
    return (
        <div className="container-home">
            <div className="home" ref={pageRef}>
                <React.Fragment>
                    <Helmet>
                        {/* Meta Tags */}
                        <title>Création de sites internet en Côtes d'Armor | Armor Web Creations</title>
                        <meta name="description" content="Armor Web Creations, concepteur de sites web à Guingamp (22). Création de sites internet en Bretagne. Devis gratuit pour entreprises et associations." />
                        <link rel="canonical" href="https://armor-web-creations.vercel.app" />
                        <meta name="keywords" content="développeur web, développeur logiciel, concepteur sites web, création de sites internet, 
                        Guingamp, Lannion, Saint-Brieuc, Loudéac, Rennes, Brest, Côtes d'Armor 22, Bretagne, France, services web, sites internet sur mesure, 
                        offres de création de site, promotions, développement personnalisé, sites vitrines, optimisation SEO, responsive design, 
                        application mobile, API, services numériques, services du digital, projets personnels, projets professionnels, HTML, CSS, 
                        JavaScript, React, SASS, frameworks modernes, développement front-end, développement back-end, intégration web, 
                        maintenance de sites web, audit SEO, création de contenu, e-commerce, sites portfolio, développement d'applications web, 
                        hébergement web, site web statique, site web dynalique, créateur sites internet, codeur, encodeur, réferencement local, 
                        projets de transformation digitale, refonte de site internet, sites de commerce électronique, applications web sur mesure,
                        projets de branding digital, solutions de marketing digital, sous-traitance développement web, partenaire digital, agence digitale, 
                        collaboration projet web, freelance pour agence, meilleur développeur web à Guingamp, développeur web freelance en Bretagne, web design, visiblité internet" />

                        {/*Open Graph tags for Social Media sharing*/}
                        <meta property="og:title" content="Armor Web Creations" />
                        <meta property="og:description" content="Armor Web Créations, votre expert en création ou refonte de sites web en Bretagne. Nous offrons des solutions sur mesure pour vos projets personnels et professionnels, avec des offres et promotions attractives." />
                        <meta property="og:image" content="https://armor-web-creations.vercel.app/homepage.png" />
                        <meta property="og:url" content="https://armor-web-creations.vercel.app" />
                        <meta property="og:type" content="website" />
                        <meta property="og:site_name" content="Armor Web Creations" />
                        <meta property="fb:app_id" content="361249267080709" />
                
                        {/*Twitter Card tags for sharing on Twitter*/}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Armor Web Creations" />
                        <meta name="twitter:description" content="Armor Web Créations, votre expert en création ou refonte de sites web en Bretagne. Nous offrons des solutions sur mesure pour vos projets personnels et professionnels." />
                        <meta name="twitter:image" content="https://armor-web-creations.vercel.app/homepage.png" />
                    </Helmet>
                    <CookiesConsent setCookiesAccepted={setCookiesAccepted} />
                    <Header />
                    <Intro />
                    <Timeline />
                </React.Fragment>
            </div>
        </div>  
    )
}
export default Home;