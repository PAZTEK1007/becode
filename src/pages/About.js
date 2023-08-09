import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <div className='textmoi'>
            <p>Je m’appelle Mathias Barbier,  j’ai 25 ans et j’éprouve depuis mon plus jeune âge un réel intérêt dans les nouvelles technologies en général mais plus précisément dans l’informatique et les jeux vidéo.</p>
            <p>De nature créatif et aimant découvrir différentes façons d’améliorer les choses qui m’entourent, j’ai administré et developpé différents serveurs de jeux vidéo, ce qui m’a permis de découvrir ce qu’était le MySQL et d’apprendre aussi quelques notions de Python et de Java. </p>
            <p>Appréciant l’art, l’ayant étudié et pratiqué (arts papier et numérique),j’aime que les pages et jeux que j’emploie soient agréables à regarder par leurs styles et par leurs illustrations c’est pour cela que je suscite un intérêt pour le développement en front end mais j’aime également la logique et les connaissances que le back end peut m’apporter.</p>
            <p>J'ai créé ce site simplifié avec les connaissances que j’ai acquises en autodidacte avec react et html afin de vous exprimer mon réel intérêt. </p>
            <p className='text'>Merci pour l’intérêt que vous avez porté à ma présentation.</p>
            </div>
            <Footer />
        </div>
    );
};

export default About;