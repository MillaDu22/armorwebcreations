import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './services.css';
import DetailsPack from '../../components/DetailsPack/index.jsx';
import Promo from '../../components/Promo/index.jsx';

function Services() {
    const [openPack, setOpenPack] = useState(null);

    const handleToggle = (pack) => {
        setOpenPack(openPack === pack ? null : pack);
    };

    useEffect(() => {
        const section = document.querySelector('.container-services');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeInUp');
                }
            });
        }, {
            threshold: 0.1 // Animation déclenchée quand 10% de la section est visible //
        });

        observer.observe(section);

        return () => observer.unobserve(section);
    }, []);

    return (
        <>
            <Helmet>
                <title>Nos Services | Packs de Création de Sites Web</title>
                <meta name="description" content="Découvrez les différents packs de création de sites internet sur mesure proposés par Armor Web Creations : Simple, Basic, Standard et Premium, adaptés à vos besoins." />
                <meta name="keywords" content="création de sites web, pack simple, pack basic, pack standard, pack premium, Guingamp, Côtes-d'Armor, Bretagne, promotions, site vitrine, portfolio, e-commerce, site dynamique, site statique, react, javascript, html, css, sass, frameworks modernes, hébergement, devis gratuit, optimisation SEO, design responsive, design haut de gamme, support technique, multipages, design personnalisé" />
                <link rel="canonical" href="https://armor-web-creations.vercel.app/#/services" />
                {/* Open Graph */}
                <meta property="og:title" content="Services | Armor Web Creations" />
                <meta property="og:description" content="Découvrez les offres et services de création de sites web sur mesure proposés par Armor Web Creations en Bretagne." />
                <meta property="og:image" content="https://armor-web-creations.vercel.app/services-page.png" />
                <meta property="og:url" content="https://armor-web-creations.vercel.app/#/services" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services | Armor Web Creations" />
                <meta name="twitter:description" content="Découvrez les offres et services de création de sites web sur mesure proposés par Armor Web Creations en Bretagne." />
                <meta name="twitter:image" content="https://armor-web-creations.vercel.app/services-page.png" />
            </Helmet>
            <div id="services" className="container-services">
                <i className="fa-solid fa-cubes"></i>
                <h1 className="services-title">Les offres</h1>
                <div className="services-grid">
                <div className={`service-card ${openPack === 'simple' ? 'expanded' : ''}`}>
                    <h2>Pack Simple</h2>
                    <p>Parfait pour les projets simples avec un budget limité.</p>
                    <ul>
                        <li>Site statique de 1 à 3 pages</li>
                        <li>HTML et CSS uniquement</li>
                        <li>Design responsive</li>
                        <li>1 mois de support</li>
                    </ul>
                    <div className="container-buttons">
                        <Link className ="link-devis" to="/contact" aria-label="Obtenir un devis pour le Pack Simple">Obtenir un devis</Link>
                        {/*<div className="price">A partir de 800€</div>*/}
                        <button 
                            className="btn" 
                            onClick={() => handleToggle('simple')}
                            aria-expanded={openPack === 'simple'}
                            aria-label={openPack === 'simple' ? 'Masquer les détails du Pack Simple' : 'Voir les détails du Pack Simple'}>
                            {openPack === 'simple' ? 'Masquer les détails' : 'Voir ce pack'}
                        </button>
                    </div>
                    <DetailsPack 
                        isOpen={openPack === 'simple'}
                        details="Ce Pack Simple inclut la création d'un site statique de 1 à 3 pages avec du HTML et CSS. Ce site est parfait pour les projets simples qui ne nécessitent pas de fonctionnalités dynamiques. Le design est responsive pour assurer la compatibilité avec les appareils mobiles. Domaine et hébergement OVH. Ce pack inclut un mois de support pour toute assistance technique."
                    />
                    </div>
                    <div className={`service-card ${openPack === 'basic' ? 'expanded' : ''}`}>
                        <h2>Pack Basic</h2>
                        <p>Idéal pour les petites entreprises ou les projets personnels.</p>
                        <ul>
                            <li>Site vitrine dynamique de 3 pages</li>
                            <li>HTML, CSS et JavaScript ou React</li>
                            <li>Design responsive</li>
                            <li>Optimisation SEO de base</li>
                            <li>1 mois de support</li>
                        </ul>
                        <div className="container-buttons">
                            <Link className ="link-devis" to="/contact" aria-label="Obtenir un devis pour le Pack Basic">Obtenir un devis</Link>
                            {/*<div className="price">A partir de 1500€</div>*/}
                            <button 
                                className="btn" 
                                onClick={() => handleToggle('basic')}
                                aria-expanded={openPack === 'basic'}
                                aria-label={openPack === 'basic' ? 'Masquer les détails du Pack Basic' : 'Voir les détails du Pack Basic'}>
                                {openPack === 'basic' ? 'Masquer les détails' : 'Voir ce pack'}
                            </button>
                        </div>
                        <DetailsPack 
                            isOpen={openPack === 'basic'}
                            details="Ce pack Basic inclut un site vitrine dynamique de 3 pages avec un design responsive. Nous nous occupons également de l'optimisation SEO de base pour que votre site soit bien référencé. Domaine et hébergement OVH. De plus, vous bénéficiez d'un mois de support pour toute assistance technique."
                        />
                    </div>
                    <div className={`service-card ${openPack === 'standard' ? 'expanded' : ''}`}>
                        <h2>Pack Standard</h2>
                        <p>Parfait pour les entreprises en croissance.</p>
                        <ul>
                            <li>Site dynamique de 5-7 pages</li>
                            <li>HTML, CSS et JavaScript ou React</li>
                            <li>Design personnalisé</li>
                            <li>Optimisation SEO avancée</li>
                            <li>3 mois de support</li>
                        </ul>
                        <div className="container-buttons">
                            <Link className ="link-devis" to="/contact" aria-label="Obtenir un devis pour le Pack Standard">Obtenir un devis</Link>
                            {/*<div className="price">A partir de 4500€</div>*/}
                            <button 
                                className="btn" 
                                onClick={() => handleToggle('standard')}
                                aria-expanded={openPack === 'standard'}
                                aria-label={openPack === 'standard' ? 'Masquer les détails du Pack Standard' : 'Voir les détails du Pack Standard'}>
                                {openPack === 'standard' ? 'Masquer les détails' : 'Voir ce pack'}
                            </button>
                        </div>
                        <DetailsPack 
                            isOpen={openPack === 'standard'}
                            details="Le Pack Standard comprend un site dynamique de 5 à 7 pages avec un design personnalisé selon vos besoins. Ce pack inclut également une optimisation SEO avancée pour améliorer la visibilité de votre site. Domaine et hébergement OVH. Vous bénéficiez de 3 mois de support technique."
                        />
                    </div>
                    <div className={`service-card ${openPack === 'premium' ? 'expanded' : ''}`}>
                        <h2>Pack Premium</h2>
                        <p>Pour les entreprises ayant des besoins spécifiques.</p>
                        <ul>
                            <li>Site sur mesure avec fonctionnalités avancées</li>
                            <li>Design haut de gamme</li>
                            <li>Optimisation SEO complète</li>
                            <li>6 mois de support</li>
                        </ul>
                        <div className="container-buttons">
                            <Link className ="link-devis" to="/contact" aria-label="Obtenir un devis pour le Pack Premium">Obtenir un devis</Link>
                            {/*<div className="price">A partir de 18000€</div>*/}
                            <button 
                                className="btn" 
                                onClick={() => handleToggle('premium')}
                                aria-expanded={openPack === 'premium'}
                                aria-label={openPack === 'premium' ? 'Masquer les détails du Pack Premium' : 'Voir les détails du Pack Premium'}>
                                {openPack === 'premium' ? 'Masquer les détails' : 'Voir ce pack'}
                            </button>
                        </div>
                        <DetailsPack 
                            isOpen={openPack === 'premium'}
                            details="Le Pack Premium offre un site entièrement sur mesure avec des fonctionnalités avancées selon vos besoins spécifiques. Il inclut également un design haut de gamme et une optimisation SEO complète. Domaine et hébergement OVH. Vous bénéficierez de 6 mois de support technique pour toute assistance."
                        />
                    </div>
                </div>
                <Promo />
                <div className="evolution">
                    <i className="fas fa-chart-bar"></i>
                    <h4 className= "title-evolution">Evolution des tarifs</h4>
                    <span className ="price-disclaimer">Les tarifs évoluent en fonction des contraintes techniques et des fonctionnalités souhaitées.</span>
                </div>
                <div className="payment">
                    <i className="fas fa-credit-card"></i>
                    <h4 className= "title-payment">Modalités de paiement</h4>
                    <span className ="mention-payment">Un acompte de 30% est requis à la commande. À l'achèvement de l'implémentation, un second paiement de 40% est dû. Le solde de 30% restant est à régler à la livraison finale.</span>
                </div>
                <div className="time">
                    <i className="fas fa-network-wired"></i>
                    <h4 className= "title-ss-traitance">Sous-traitance pour entreprises</h4>
                    <span className ="mention-ss-traitance">Armor Web Creations propose également des services de sous-traitance pour les entreprises souhaitant externaliser des projets de développement. N'hésitez pas à prendre contact pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.</span>
                </div>
            </div>
        </>    
    );
}

export default Services;