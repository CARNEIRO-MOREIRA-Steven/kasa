import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Datas from '../../datas/logement.json';
import '../../styles/Card.scss';

function Card() {
  const [apartmentData, setApartmentData] = useState([]);
  const [displayedApartments, setDisplayedApartments] = useState([]);

  useEffect(() => {
    // Charger les données JSON au montage du composant
    setApartmentData(Datas);
  }, []);

  useEffect(() => {
    // Mettre à jour les logements affichés lorsque les données changent
    setDisplayedApartments(apartmentData.slice(0, 12));
  }, [apartmentData]);

  return (
    <section id="section">
      <div id="section__card">
        {displayedApartments.map((apartment, index) => (
          <Link
            id="section__card--link"
            to={`/apartment/${apartment.id}`}
            key={index}
          >
            <article id="section__card--logement">
              <img
                alt="apartement"
                id="section__card--image"
                src={apartment.cover}
              />
            </article>
            <p id="section__card--title">{apartment.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Card;