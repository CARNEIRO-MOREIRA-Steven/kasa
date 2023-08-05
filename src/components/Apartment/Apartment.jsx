
import React from "react";



const ApartmentDetails = ({ apartment }) => {



  return (
    <section id="apartment">
      <div >
        <img src={apartment.cover}></img>
        <h2 id="apartment__title">{apartment.title}</h2>
        <h3 id="apartment__location">{apartment.location}</h3>
        <ul id="apartment__tags">
          {apartment.tags.map((tag, index) => (
            <li id="apartment__tags--detail" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div id="apartment__card--profil">
        <p id="apartment__card--profil--name">{apartment.host.name}</p>
        <img
          id="apartment__card--profil--image"
          src={apartment.host.picture}
          alt="profil"
        />
        <div>{apartment.rating}</div>
      </div>

    </section>
  );
};

export default ApartmentDetails;