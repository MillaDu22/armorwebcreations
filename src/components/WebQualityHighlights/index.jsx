import React from "react";
import "./WebQualityHighlights.css";

const highlights = [
    {
        title: "Code 100% sur mesure",
        description:
        "Le développement de votre site entièrement encodé, sans utiliser de CMS. Cela garantit un site réellement personnalisé, plus sécurisé, mieux optimisé et sans coûts d’entretien superflus à long terme. Vous êtes propriétaire à 100 % de votre solution.",
        image: "/src/assets/images/code-react.webp",
    },
    {
        title: "Accessibilité numérique",
        description:
        "Votre site est pensé pour être accessible à tous, y compris aux personnes en situation de handicap. J’applique les bonnes pratiques (contrastes, navigation clavier, structure claire) pour une expérience inclusive et conforme aux standards actuels.",
        image: "/src/assets/images/accessibilite.webp",
    },
    {
        title: "Référencement naturel (SEO)",
        description:
        "Une intégration dès la conception des principes du référencement naturel. Il ne s'agit pas de publicités payantes, mais d’un positionnement durable et progressif dans les résultats de recherche, pour une visibilité à long terme sans frais mensuels.",
        image: "/src/assets/images/seo.webp",
    },
    {
        title: "Performance et rapidité",
        description:
        "Votre site se charge rapidement sur tous les appareils, grâce à un code optimisé, des fichiers allégés et une structure pensée pour l’efficacité. C’est un véritable atout pour le confort de vos visiteurs, la compatibilité mobile et votre positionnement sur Google.",
        image: "/src/assets/images/perf.webp",
    },
];

const WebQualityHighlights = () => {
    return (
        <section className="highlight-section">
        <div className="highlight-grid">
            {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
                <img src={item.image} alt={item.title} className="highlight-image" />
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default WebQualityHighlights;
