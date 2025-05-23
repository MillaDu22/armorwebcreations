import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Cookies from 'js-cookie';
import Modal from '../../components/Modal/index.jsx';
import { Helmet } from 'react-helmet-async';
import ReCAPTCHA from 'react-google-recaptcha';

import './contact.css';

function Contact({ cookiesAccepted }) {
    const [formData, setFormData] = useState({
        nom: cookiesAccepted ? Cookies.get('nom') || '' : '',
        prenom: cookiesAccepted ? Cookies.get('prenom') || '' : '',
        email: cookiesAccepted ? Cookies.get('email') || '' : '',
        mobile: cookiesAccepted ? Cookies.get('mobile') || '' : '',
        objet: cookiesAccepted ? Cookies.get('objet') || '' : '',
        message: cookiesAccepted ? Cookies.get('message') || '' : ''
    });

    const [errors, setErrors] = useState({});
    const [modalInfo, setModalInfo] = useState({ show: false, title: '', message: '' });
    const [captchaValue, setCaptchaValue] = useState(null); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Stocke dans les cookies seulement si le consentement est donné
        if (cookiesAccepted) {
            Cookies.set(name, value, { expires: 7 });
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({});

        // Check for errors
        let formErrors = {};
        if (!formData.nom) formErrors.nom = 'Le nom est requis';
        if (!formData.prenom) formErrors.prenom = 'Le prénom est requis';
        if (!formData.email) {
            formErrors.email = 'L\'email est requis';
        } else if (!validateEmail(formData.email)) {
            formErrors.email = 'L\'email n\'est pas valide';
        }
        if (!formData.mobile) formErrors.mobile = 'Le numéro de mobile est requis';
        if (!formData.objet) formErrors.objet = 'L\'objet est requis';
        if (!formData.message) formErrors.message = 'Le message est requis';
        if (!captchaValue) formErrors.captcha = 'Veuillez valider le Captcha';

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        emailjs.send('service_ni2kr4g', 'template_f82j7sl', formData, 'MMCldRgvGL2OmMHp_')
            .then((result) => {
                setModalInfo({
                    show: true,
                    title: 'Succès',
                    message: 'Message envoyé avec succès !'
                });

                if (cookiesAccepted) {
                    console.log('Suppression des cookies');
                    Object.keys(formData).forEach(field => Cookies.remove(field));
                }
            }, (error) => {
                setModalInfo({
                    show: true,
                    title: 'Erreur',
                    message: 'Une erreur est survenue, veuillez réessayer.'
                });
            });

        setFormData({
            nom: '',
            prenom: '',
            email: '',
            mobile: '',
            objet: '',
            message: ''
        });
        setCaptchaValue(null);
    };

    const closeModal = () => {
        setModalInfo({ show: false, title: '', message: '' });
    };

    useEffect(() => {
        const section = document.querySelector('.container-contact');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeInUp');
                }
            });
        }, {
            threshold: 0.2 // Animation déclenchée quand 20% de la section est visible //
        });

        observer.observe(section);

        return () => observer.unobserve(section);
    }, []);

    return (
        <>
            <Helmet>
                <title>Formulaire de contact de Armor Web Creations | Contact développeur Web Freelance en Bretagne</title>
                <meta name="description" content="Contactez Armor Web Creations, concepteur de sites web à Guingamp, Côtes d'Armor. Parlons de votre projet dès aujourd'hui !"/>
                <meta name="keywords" content="contact, développeur web, concepteur site web, Côtes d'Armor, Guingamp, Bretagne, création de site web, freelance"/>
                <link rel="canonical" href="https://armor-web-creations.vercel.app/#contact" />
                {/* Open Graph */}
                <meta property="og:title" content="Contact | Armor Web Creations" />
                <meta property="og:description" content="Contactez Armor Web Creations pour discuter de vos projets de création de sites web sur mesure en Bretagne." />
                <meta property="og:image" content="https://armor-web-creations.vercel.app/contact-page.png" />
                <meta property="og:url" content="https://armor-web-creations.vercel.app/#/contact" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact | Armor Web Creations" />
                <meta name="twitter:description" content="Contactez Armor Web Creations pour discuter de vos projets de création de sites web sur mesure en Bretagne." />
                <meta name="twitter:image" content="https://armor-web-creations.vercel.app/contact-page.png" />
            </Helmet>

            <div id="contact" className="container-contact">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <h1 id="title-form-contact" className="title-contact">Contactez-moi</h1>
                <h2 className="subtitle-contact">Prêt à donner vie à votre projet de site web ? Nous allons le concrétiser. Parlons-en dès aujourd'hui !</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="nom">Votre nom</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                            aria-describedby="nom-error"
                        />
                        {errors.nom && <p id="nom-error" className="error-message">{errors.nom}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Votre prénom</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                            aria-describedby="prenom-error"
                        />
                        {errors.prenom && <p id="prenom-error" className="error-message">{errors.prenom}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Votre email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            autoComplete='none'
                            onChange={handleChange}
                            required
                            aria-describedby="email-error"
                        />
                        {errors.email && <p id="email-error" className="error-message">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Votre n° de mobile</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            aria-describedby="mobile-error"
                        />
                        {errors.mobile && <p id="mobile-error" className="error-message">{errors.mobile}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="objet">Objet de votre demande</label>
                        <input
                            type="text"
                            id="objet"
                            name="objet"
                            value={formData.objet}
                            onChange={handleChange}
                            required
                            aria-describedby="object-error"
                        />
                        {errors.objet && <p id="object-error" className="error-message">{errors.objet}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Votre message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            aria-describedby="message-error"
                        ></textarea>
                        {errors.message && <p id="message-error" className="error-message">{errors.message}</p>}
                    </div>

                    <div className="form-group">
                        <div className="recaptcha-container">
                            <ReCAPTCHA
                                sitekey="6LfhfU8qAAAAAAffu8fEUdJEklwFTz15WAEXmy-j" // clé de site reCAPTCHA //
                                onChange={handleCaptchaChange}
                                data-theme="dark light"
                                aria-describedby="captcha-error"
                            />
                        </div>
                        {errors.captcha && <p id="captcha-error" className="error-message">{errors.captcha}</p>}
                    </div>

                    <button type="submit" className="submit-button">Envoyer</button>
                </form>
                <Modal
                    show={modalInfo.show}
                    onClose={closeModal}
                    title={modalInfo.title}
                    message={modalInfo.message}
                />
            </div>
        </>
    );
}

export default Contact;