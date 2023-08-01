import React from 'react';
const Banner = ({ imageUrl, altText }) => {
  return <img id="image"src={imageUrl} alt={altText} />;
};

export default Banner;