import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { Helmet } from 'react-helmet-async';
import './avis.css';

const Avis = () => {
    /* eslint-disable no-unused-vars */
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Erwan Tibo', rating: 4, comment: 'Satisfait du travail réalisé. Quelques détails à peaufiner, mais l\'essentiel est là. Le rendu final est excellent. Merci à vous pour votre professionnalisme. '},
        { id: 2, name: 'Marie Cassin', rating: 5, comment: 'Service impeccable, rapide et professionnel. Mon projet a été réalisé exactement comme je l\'imaginais, avec même quelques suggestions en plus qui ont fait toute la différence. Je recommande vivement !' },
        { id: 3, name: 'Pierre Lefevre', rating: 4, comment: 'Très bon service et à l’écoute. Le résultat est globalement satisfaisant, quelques petits ajustements nécessaires, mais Ludmilla a réagi rapidement pour les corriger.' },
        { id: 4, name: 'Mélanie Lutino', rating: 5, comment: 'Un travail de grande qualité, tant sur le plan technique que sur le design. Mon site est fluide, esthétique et optimisé. Merci pour ce service au top !' },
        { id: 5, name: 'Vince Delatre', rating: 5, comment: 'Très satisfait du résultat final. Exécution parfaite et dans les délais. Une professionnelle à l\'écoute et qui comprend parfaitement les besoins. Je ferai de nouveau appel à elle sans hésiter.'},
        { id: 6, name: 'Yvon Dufour', rating: 5, comment: 'Un excellent travail. Très bonne communication tout au long du projet. Je suis très content du résultat et du suivi. Je recommande à 100%' },
        { id: 7, name: 'Sophie Marin', rating: 5, comment: 'Je suis ravie de mon site web ! Une personne très à l\'écoute qui a su transformer mes idées en un projet concret. Merci infiniment.' },
        { id: 8, name: 'Lucas Borel', rating: 5, comment: 'Service exceptionnel, très réactive et professionnelle. Mon site est au-delà de mes espérances. Je suis très heureux du résultat !' },
        { id: 9, name: 'Chloé Leblanc', rating: 4, comment: 'Le projet a été bien mené. Quelques ajustements mineurs ont été nécessaires, mais l\'approche était très professionnelle et efficace. Merci beaucoup.' },
        { id: 10, name: 'Antoine Girard', rating: 5, comment: 'Je ne pouvais pas espérer mieux. Un service rapide et efficace, et un rendu final qui a dépassé toutes mes attentes. Merci !' }
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [formError, setFormError] = useState('');


    // Slider automatique
    useEffect(() => {
        if (reviews.length > 0) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
            }, 5000); 

            return () => clearInterval(interval);
        }
    }, [reviews.length]);

    const handleAddReview = () => {
        if (newReview.name && newReview.comment && newReview.rating && captchaVerified) {
            sendEmail(); // Appel de la fonction pour envoyer l'avis par email //
        } else {
            setFormError("Veuillez remplir tous les champs et valider le reCAPTCHA.");
        }
    };

    const sendEmail = () => {
        emailjs.send(
            'service_ni2kr4g',
            'template_f82j7sl',
            {
                name: newReview.name,
                rating: newReview.rating,
                comment: newReview.comment,
            },
            'MMCldRgvGL2OmMHp_' 
        ).then((result) => {
            console.log(result.text);
            alert("Votre avis a été envoyé avec succès !");
            setNewReview({ name: '', rating: 0, comment: '' });
            setShowForm(false);
            setCaptchaValue(null);
            setCaptchaVerified(false);
            setFormError('');
        }).catch((error) => {
            console.log(error.text);
            setFormError("Une erreur s'est produite lors de l'envoi de votre avis.");
        });
    };

    // Gestion de la validation reCAPTCHA //
    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        setCaptchaVerified(!!value); // Convertit en booléen (true si valeur présente) //
    };

    return (
        <>
            {/* SEO avec Helmet */}
            <Helmet>
                <title>Avis clients | Armor Web Creations</title>
                <meta name="description" content="Découvrez les avis de nos clients sur Armor Web Creations. Des témoignages authentiques sur nos services de création de sites web en Bretagne." />
                <meta name="keywords" content="avis clients, témoignages, Armor Web Creations, création de sites web, développeur freelance, Guingamp, Bretagne" />
                <link rel="canonical" href="https://armor-web-creations.vercel.app/#/avis" />

                {/* Open Graph */}
                <meta property="og:title" content="Avis | Armor Web Creations" />
                <meta property="og:description" content="Découvrez les avis de nos clients sur les services de création de sites web proposés par Armor Web Creations." />
                <meta property="og:image" content="https://armor-web-creations.vercel.app/avis-page.png" />
                <meta property="og:url" content="https://armor-web-creations.vercel.app/#/avis" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Avis | Armor Web Creations" />
                <meta name="twitter:description" content="Découvrez les avis de nos clients sur les services de création de sites web proposés par Armor Web Creations." />
                <meta name="twitter:image" content="https://armor-web-creations.vercel.app/avis-page.png" />
            </Helmet>
            <section className="slider-container">
                <i className="fa-solid fa-edit"></i>
                <h1 className="title-avis">Avis vérifiés </h1>
                <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {reviews.map((review) => (
                        <article key={review.id} className="slide">
                            <blockquote className="avis">
                                <h2>{review.name}</h2>
                                <div className="stars">
                                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                </div>
                                <p>{review.comment}</p>
                            </blockquote>
                        </article>
                    ))}
                </div>

                <div className="add-review">
                    <button className="add-button" onClick={() => setShowForm(!showForm)}>+</button>
                </div>

                {showForm && (
                    <div className="review-form">
                        <h3>Ajouter un avis</h3>
                        <form className="form-avis" onSubmit={(e) => { e.preventDefault(); handleAddReview(); }}>
                            <div className="form-group">
                                <label htmlFor="nomprenom">Prénom & Nom </label>
                                <input
                                    type="text"
                                    id="nomprenom"
                                    name="nomprenom"
                                    placeholder="Vos prénom et nom"
                                    value={newReview.name}
                                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                    required
                                />
                                {/* Message d'erreur */}
                                {formError && <p className="error">Vos Prénom et nom sont requis.</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="note">Note</label>
                                <select
                                    id='note'
                                    name="note"
                                    value={newReview.rating}
                                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                                    required
                                >
                                    <option value={0}>Note</option>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <option key={num} value={num}>
                                            {num} étoile{num > 1 ? 's' : ''}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="avis">Commentaire</label>
                                <textarea
                                    id="avis"
                                    name="avis"
                                    placeholder="Votre commentaire"
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                    required
                                />
                                {/* Message d'erreur */}
                                {formError && <p className="error">Votre commentaires est requis.</p>}
                            </div>

                            <div className="form-group">
                                <ReCAPTCHA
                                    sitekey="6LfhfU8qAAAAAAffu8fEUdJEklwFTz15WAEXmy-j" 
                                    onChange={handleCaptchaChange}
                                />
                            </div>

                            {formError && <p className="error">{formError}</p>}

                            <button type="submit" disabled={!captchaVerified} aria-label="Soumettre avis"><span>Ajouter</span></button>
                        </form>
                    </div>
                )}
            </section>
        </>    
    );
};

export default Avis;