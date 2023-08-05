import React from 'react';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ApartmentDetails from "../components/Apartment/Apartment"
import { useParams } from 'react-router-dom';
import Datas from '../datas/logement.json'; 

function PageApartment () {
  const { id } = useParams();

 
  const selectedApartment = Datas.find(apartment => apartment.id === id);

  return (
    <section>
      <Header />
      {selectedApartment && (
        <>
          <ApartmentDetails apartment={selectedApartment} />
        </>
      )}
      <Footer />
    </section>
  );
}

export default PageApartment;