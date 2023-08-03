import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/Banner.scss"


const Banner = ({ imageUrl, altText, title }) => {

  return (
    <section>
      <span id="banner">
        <img id="banner__image" src={imageUrl} alt={altText} />
        <p id="banner__title">{title}</p>
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