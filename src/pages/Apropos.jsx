import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import Collapse from '../components/Collapse/Apropos'
import React from 'react';
import AProposImage from '../assets/montagne.png'; // Importez l'image spécifique pour votre page "À propos"



function Apropos () {
    const altText = 'Image de la page À propos';
    return (
        <section>
            <Header />
            <Banner imageUrl={AProposImage} altText={altText} />
            <Collapse />
            <Footer />
        </section>
    )
}

export default Apropos