import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import Collapse from '../components/Collapse/Collapse'
import React from 'react';
import AProposImage from '../assets/montagne.png'; // Importez l'image spécifique pour votre page "À propos"



function Apropos () {
    const altText = 'Image de la page À propos';
    const collapsData = [
        {
          liTitle: 'Fiablilité',
          textDescription: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        },
        {
          liTitle: 'Respect',
          textDescription: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
        },
        {
          liTitle: 'Service',
          textDescription: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
        },
        {
          liTitle: 'Sécurité',
          textDescription: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
      ];
      
    return (
        <section>
            <Header />
            <Banner imageUrl={AProposImage} altText={altText} />
            {collapsData.map((data, index) => (
            <Collapse key={index} liTitle={data.liTitle} textDescription={data.textDescription}/>
             ))}
            <Footer />
        </section>
    )
}

export default Apropos