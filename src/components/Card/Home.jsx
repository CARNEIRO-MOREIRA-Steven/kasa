import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Datas from '../../datas/logement.json';
import "../../styles/Card.scss"

function Card() {
  const [apartmentData, setApartmentData] = useState([]);

  useEffect(() => {
    // Charger les données JSON au montage du composant
    setApartmentData(Datas);
  }, []);
 console.log(Datas)
  return (
    <section id="section">
      <div id="section__card">
        {apartmentData.map((apartment, index) => (
          <Link id="section__card--link" to={`/apartment/${apartment.id}`} key={index}>
            <article id="section__card--logement">
              <img alt="apartement" id="section__card--image" src={apartment.cover} />
            </article>
            <p id="section__card--title">{apartment.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Card;