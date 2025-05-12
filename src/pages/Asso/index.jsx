import './asso.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Asso() {
    useEffect(() => {
        // Ajoute la classe fade-in après le montage du composant //
        const sections = document.querySelectorAll('.fade-in');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 300); // Diffère l'animation pour chaque section //
        });
    }, []);
    return (
        <>
            <Helmet>
                <title>Associations | Armor Web Creations | Création de sites web en Bretagne</title>
                <meta name="description" content="Armor Web Creations collabore avec des associations pour améliorer leur présence en ligne. Création de sites web sur mesure en Bretagne, Côtes d'Armor."/>
                <meta name="keywords" content="associations, création de site web, Côtes d'Armor, Guingamp, Bretagne, développement web, freelance, partenariat association" />
                <link rel="canonical" href="https://armor-web-creations.vercel.app/#/asso" />
                {/* Open Graph */}
                <meta property="og:title" content="Associations | Armor Web Creations" />
                <meta property="og:description" content="Armor Web Creations aide les associations à développer leur présence en ligne avec des sites web sur mesure en Bretagne." />
                <meta property="og:image" content="https://armor-web-creations.vercel.app/asso-page.png" />
                <meta property="og:url" content="https://armor-web-creations.vercel.app/#/asso" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Associations | Armor Web Creations" />
                <meta name="twitter:description" content="Armor Web Creations aide les associations à développer leur présence en ligne avec des sites web sur mesure en Bretagne." />
                <meta name="twitter:image" content="https://armor-web-creations.vercel.app/asso-page.png" />
            </Helmet>
            <section className="association-section">
                <div className="association-container">
                    <i className="fa fa-users"></i>
                    <h1 className="association-title">Création de site internet pour associations</h1>

                    <div className="association-intro fade-in">
                        <h2> Pourquoi une association a besoin d'un site internet ?</h2>
                        <p>
                            Un site internet permet à votre association de partager vos activités, vos missions, et vos événements avec un public plus large. C'est un outil essentiel pour communiquer avec vos membres, recruter de nouveaux bénévoles, et attirer des donateurs.
                        </p>
                        <ul className="association-benefits">
                            <li><i className="fa fa-globe"></i>Visibilité accrue pour vos projets</li>
                            <li><i className="fa fa-users"></i>Facilite la communication avec les membres et les bénévoles</li>
                            <li><i className="fa fa-calendar-alt"></i>Gestion des événements et des inscriptions en ligne</li>
                            <li><i className="fa fa-hand-holding-heart"></i>Facilitation des dons et du soutien financier</li>
                        </ul>
                    </div>

                    <div className="association-process fade-in">
                        <h2> Processus de création de votre site web associatif</h2>
                        <p>
                            Mon approche pour la création de sites web pour les associations est conçue pour répondre à vos besoins spécifiques. Voici les étapes que nous suivrons :
                        </p>
                        <ul className="process-steps">
                            <li><i className="fa fa-comments"></i>Phase de consultation: Comprendre vos objectifs, votre public et vos missions.</li>
                            <li><i className="fa fa-paint-brush"></i>Design personnalisé: Création d’un design qui reflète votre identité et vos valeurs.</li>
                            <li><i className="fa fa-tools"></i>Développement: Mise en place des fonctionnalités, telles que les formulaires d'adhésion et les systèmes de dons.</li>
                            <li><i className="fa fa-check-circle"></i>Lancement et suivi: Mise en ligne du site et maintenance pour assurer son bon fonctionnement.</li>
                        </ul>
                    </div>

                    <div className="association-contact fade-in">
                        <h2> Ce que votre association en retirera</h2>
                        <p>
                            Un site internet professionnel vous permettra de communiquer plus facilement avec vos membres et d’attirer de nouveaux bénévoles et partenaires. Contactez-moi pour en savoir plus sur la manière dont je peux vous aider.
                        </p>
                        <Link to="/contact" className="association-contact-link"><span>Me Contacter</span></Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Asso;
