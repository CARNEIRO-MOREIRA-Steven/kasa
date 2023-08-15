import "../../styles/Apartment.scss";
import React from "react";
import Carousel from "../Carousel/Carousel";
import Collapse from "../Collapse/Collapse";
import starFilled from '../../assets/star-filled.svg';
import starEmpty from '../../assets/star-empty.svg'

const ApartmentDetails = ({ apartment }) => {
  const collapsData = [
    {
      liTitle: "Description",
    },
    {
      liTitle: "Equipements",
    }
  ];

  const renderStars = (rating) => {
    const maxRating = 5;
    const starRating = Math.round(rating);
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const starImageSrc = i <= starRating ? starFilled : starEmpty; // Image d'étoile pleine ou vide
      stars.push(
        <img className="star__ratting--image" key={i} src={starImageSrc} alt={`${i} star`}/>
      );
    }
  
    return stars;
  };

  return (
    <section id="apartment">
  <article id="apartment__section">
<Carousel pictures={apartment.pictures} />
        
        <article id="apartment__content">
        <article id="apartment__content--description">
        <h2 id="apartment__title">{apartment.title}</h2>
        <h3 id="apartment__location">{apartment.location}</h3>
        <ul id="apartment__tags">
          {apartment.tags.map((tag, index) => (
            <li id="apartment__tags--detail" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </article>
      <article id="apartment__content--profil">
  <div id="apartment__content--profil--user">
    <p id="apartment__card--profil--name">{apartment.host.name}</p>
    <img
      id="apartment__card--profil--image"
      src={apartment.host.picture}
      alt="profil"
    />
  </div>
  <div className="star__rating">{renderStars(apartment.rating)}</div>
</article>
      </article>
      <section id="apartment__collapse">
  <Collapse liTitle={collapsData[0].liTitle} textDescription={apartment.description} />
  <Collapse liTitle={collapsData[1].liTitle}>
    {apartment.equipments.map((equipment, index) => (
      <p key={index}>{equipment}</p>
    ))}
  </Collapse>
</section>
        </article>
    </section>
  );
};

export default ApartmentDetails;