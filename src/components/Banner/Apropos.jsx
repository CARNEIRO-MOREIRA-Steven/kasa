import React from 'react';
import Banner from './Banner';
import imageUrl from '../../assets/montagne.png'

function BannerMontagne () {
    const altText = 'Image de la page à propos'
    return (
        <section id="content">
        <span id="image_banner">
        <Banner imageUrl={imageUrl} altText={altText} />
        </span>
        </section>
    )
}

export default BannerMontagne