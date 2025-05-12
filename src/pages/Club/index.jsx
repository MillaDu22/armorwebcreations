import './club.css';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Club() {
    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 300); // Diffère l'animation pour chaque section
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>Clubs | Armor Web Creations | Création de sites web en Bretagne</title>
                <meta name="description" content="Armor Web Creations collabore avec des clubs pour améliorer leur présence en ligne. Création de sites web sur mesure en Bretagne, Côtes d'Armor." />
                <meta name="keywords" content="clubs, création de site web, Côtes d'Armor, Guingamp, Bretagne, développement web, freelance, partenariat club" />
                <link rel="canonical" href="https://armor-web-creations.vercel.app/#/club" />
                <meta property="og:title" content="Clubs | Armor Web Creations" />
                <meta property="og:description" content="Armor Web Creations aide les clubs à développer leur présence en ligne avec des sites web sur mesure en Bretagne." />
                <meta property="og:image" content="https://armor-web-creations.vercel.app/club-page.png" />
                <meta property="og:url" content="https://armor-web-creations.vercel.app/#/club" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Clubs | Armor Web Creations" />
                <meta name="twitter:description" content="Armor Web Creations aide les clubs à développer leur présence en ligne avec des sites web sur mesure en Bretagne." />
                <meta name="twitter:image" content="https://armor-web-creations.vercel.app/club-page.png" />
            </Helmet>
            <section className="club-section">
                <div className="club-container">
                    <i className="fa fa-futbol"></i>
                    <h1 className="club-title">Création de site internet pour clubs locaux</h1>

                    <div className="club-intro fade-in">
                        <h2>Pourquoi un club a besoin d'un site internet ?</h2>
                        <p>
                            Que vous soyez un club sportif, photo ou astro, un site internet vous permet de promouvoir vos activités, d’attirer de nouveaux membres, et de faciliter la gestion de vos événements. Un site web est un outil central pour créer une communauté autour de vos passions.
                        </p>
                        <ul className="club-benefits">
                            <li><i className="fa fa-users"></i>Accroître la visibilité et recruter de nouveaux membres</li>
                            <li><i className="fa fa-calendar-alt"></i>Organiser et gérer vos événements facilement</li>
                            <li><i className="fa fa-camera"></i>Partager vos activités, photos et moments forts</li>
                            <li><i className="fa fa-trophy"></i>Présenter vos succès et palmarès</li>
                        </ul>
                    </div>

                    <div className="club-process fade-in">
                        <h2>Processus de création de votre site web pour club</h2>
                        <p>
                            Je propose un service complet pour la création de votre site internet, adapté à vos besoins. Voici les étapes du processus :
                        </p>
                        <ul className="process-steps">
                            <li><i className="fa fa-comments"></i>Consultation initiale: Comprendre vos objectifs, vos membres et les activités de votre club.</li>
                            <li><i className="fa fa-paint-brush"></i>Design personnalisé: Création d’un design qui reflète l’esprit et la culture de votre club.</li>
                            <li><i className="fa fa-tools"></i>Développement du site: Intégration des fonctionnalités comme la gestion des événements et des galeries photo.</li>
                            <li><i className="fa fa-check-circle"></i>Livraison et suivi: Livraison de votre site et support continu pour la gestion de votre contenu.</li>
                        </ul>
                    </div>

                    <div className="club-contact fade-in">
                        <h2>Intéressé par un partenariat ?</h2>
                        <p>Contactez-moi pour discuter de la création de votre site web personnalisé pour votre club ou association !</p>
                        <Link className="club-contact-link" to="/contact"><span>Contactez-moi</span></Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Club;
