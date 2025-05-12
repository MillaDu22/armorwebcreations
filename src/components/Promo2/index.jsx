import React, {useEffect} from 'react';
import PromoMonth from "../../assets/videos/Promo1.mp4";
import PromoBusiness from "../../assets/videos/Promo2.mp4";
import './promo2.css';


function Promo2() {
    useEffect(() => {
        const section = document.querySelector('.container-promo');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('madeInUp');
                }
            });
        }, {
            threshold: 0.2 // Animation déclenchée quand 20% de la section est visible //
        });

        observer.observe(section);

        return () => observer.unobserve(section);
    }, []);
    return(
        <section className="container-promo">
            <i className="fa-solid fa-percent"></i>
            <h2 className="promo-title">Les promotions</h2>
            <div className ="box-promo1">
                <video className="promo-video" autoPlay muted>
                    <source src={PromoMonth} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>
            </div>
            <div className ="box-promo2">
                <video className="promo-video" autoPlay muted>
                    <source src={PromoBusiness} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>
        </div>
    </section>
    )
}
export default Promo2;