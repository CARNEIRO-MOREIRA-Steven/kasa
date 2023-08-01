import React from 'react';
import Banner from './Banner';
import imageUrl from '../../assets/mer.jpg'

const BannerHomepage = () => {
  const altText = 'Image de la page d\'accueil';

  return (
    <section id="content">
        <span id="image_banner">
        <Banner imageUrl={imageUrl} altText={altText} />
        <p id="p">Chez vous, partout et ailleurs</p>
        </span>
    </section>
  );
};

export default BannerHomepage