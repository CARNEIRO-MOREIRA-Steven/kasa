import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Datas from '../../datas/logement.json';


function Card() {
  const [apartmentData, setApartmentData] = useState([]);

  useEffect(() => {
    // Charger les données JSON au montage du composant
    setApartmentData(Datas);
  }, []);
 console.log(Datas)
  return (
    <section id="section">
      <div id="card">
        {apartmentData.map((apartment, index) => (
          <Link id="link" to={`/apartment/${apartment.id}`} key={index}>
            <article id="logement">
              <img alt="apartement" id="image_card" src={apartment.cover} />
            </article>
            <p id="title">{apartment.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Card;