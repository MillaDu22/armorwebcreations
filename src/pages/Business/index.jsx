import './business.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Business() {
    useEffect(() => {
        // Ajoute la classe fade-in après le montage du composant
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
                <title>Page entreprises de Armor Web Creations | page développeur Web en Bretagne pour entreprises</title>
                <meta name="description" content="Armor Web Creations vous accompagne dans la création de sites internet sur mesure pour votre entreprise en Bretagne, Côtes d'Armor. Obtenez une présence en ligne professionnelle."/>
                <meta name="keywords" content="entreprise, développeur web, concepteur site web, Côtes d'Armor, Guingamp, Bretagne, création de site web, freelance"/>
                <link rel="canonical" href="https://armor-web-creations.vercel.app/#/business" />
                {/* Open Graph */}
                <meta property="og:title" content="Entreprises | Armor Web Creations" />
                <meta property="og:description" content="Contactez Armor Web Creations pour discuter de vos projets de création de sites web pour votre entreprise en Bretagne." />
                <meta property="og:image" content="https://armor-web-creations.vercel.app/business-page.png" />
                <meta property="og:url" content="https://armor-web-creations.vercel.app/#/business" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Entreprises | Armor Web Creations" />
                <meta name="twitter:description" content="Contactez Armor Web Creations pour discuter de vos projets de création de sites web pour votre entreprise en Bretagne." />
                <meta name="twitter:image" content="https://armor-web-creations.vercel.app/business-page.png" />
            </Helmet>
            <section className="business-section">
                <div className="business-container">
                    <i className="fa fa-laptop-code"></i>
                    <h1 className="business-title">Création de site internet pour entreprises</h1>

                    <div className="business-intro fade-in">
                        <h2> Pourquoi une entreprise a besoin d'un site internet ?</h2>
                        <p>
                            Avoir un site internet est essentiel pour toute entreprise moderne. Il vous permet non seulement de renforcer votre présence en ligne, mais aussi d'atteindre un public plus large, d'améliorer la communication avec vos clients, et de vous démarquer de vos concurrents.
                        </p>
                        <ul className="biz-benefits">
                            <li><i className="fa fa-chart-line"></i> Amélioration de la visibilité en ligne</li>
                            <li><i className="fa fa-laptop-code"></i>Plateforme accessible 24/7</li>
                            <li><i className="fa fa-rocket"></i>Développement de votre clientèle</li>
                            <li><i className="fa fa-handshake"></i>Interaction renforcée avec vos clients</li>
                        </ul>
                    </div>

                    <div className="business-process fade-in">
                        <h2> Le processus de création de votre futur site web</h2>
                        <p>
                            Chez Armor Web Creations, je vous accompagne tout au long du processus de création de votre site internet, du début à la fin. Voici les étapes clés :
                        </p>
                        <ul className="biz-benefits">
                            <li><i className="fa fa-laptop-code"></i>Phase de consultation : Nous discutons de vos objectifs et cibles pour concevoir un site qui vous ressemble.</li>
                            <li><i className="fa fa-rocket"></i>Conception et développement : Travail sur le design, l’interface utilisateur, et le développement technique.</li>
                            <li><i className="fa fa-handshake"></i>Tests et validation : Le site est testé et optimisé avant la mise en ligne.</li>
                            <li><i className="fa fa-chart-line"></i>Lancement et suivi : Votre site est mis en ligne, et je reste disponible pour la maintenance.</li>
                        </ul>
                    </div>

                    <div className="business-contact fade-in">
                        <h2> Ce que votre entreprise en retirera</h2>
                        <p>
                            Un site internet professionnel vous permet de renforcer votre crédibilité, d'améliorer votre image de marque et de proposer à vos clients une plateforme conviviale. Contactez-moi pour discuter de votre projet.
                        </p>
                        <Link to="/contact" className="business-contact-link"><span>Me Contacter</span></Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Business;
