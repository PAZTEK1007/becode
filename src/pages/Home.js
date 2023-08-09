import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <div className='textmotivation'>
            <p>Actuellement à la recherche d'une opportunité de formation pour devenir Junior Developer, j'ai réalisé ce site web afin de vous adresser ma candidature pour intégrer votre programme de formation.</p>
            <p>Cependant, je suis conscient qu'il me reste encore beaucoup à apprendre pour devenir un développeur compétent et polyvalent , c’est pour cela que votre programme de formation de Junior Developer m'intéresse particulièrement en raison de sa réputation et de son approche pratique de l'apprentissage. Je suis convaincu que votre formation me permettra de combler mes lacunes et de développer les compétences nécessaires pour devenir un professionnel accompli dans le domaine du développement informatique.</p>
            <p>Intégrer votre formation en tant que Junior Developer représente pour moi une opportunité unique d'acquérir une expertise solide et de progresser dans ma carrière professionnelle. Je suis prêt à m'investir pleinement dans cette formation et à relever tous les défis qui se présenteront à moi.</p>
            <p className='caption'>Je vous remercie vivement de considérer ma candidature. Je reste à votre disposition pour toute information complémentaire.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;