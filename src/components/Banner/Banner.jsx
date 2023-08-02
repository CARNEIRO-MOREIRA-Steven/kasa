import React from 'react';
import PropTypes from 'prop-types';


const Banner = ({ imageUrl, altText, title }) => {

  return (
    <section id="content">
      <span id="image_banner">
        <img id="image" src={imageUrl} alt={altText} />
        <p id="p">{title}</p>
      </span>
    </section>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Banner;