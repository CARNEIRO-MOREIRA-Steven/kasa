import React, { useEffect } from 'react';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ApartmentDetails from "../components/Apartment/Apartment"
import { useParams, useNavigate } from 'react-router-dom';
import Datas from '../datas/logement.json'; 


function PageApartment() {
  const { id } = useParams();
  const navigate = useNavigate();
 
  const selectedApartment = Datas.find(apartment => apartment.id === id);

  useEffect(() => {
    if (!selectedApartment) {
      navigate('/error');
    }
  }, [selectedApartment, navigate]);

  return (
    <section>
      <Header />
      {selectedApartment && (
        <ApartmentDetails apartment={selectedApartment} />
      )}
      <Footer />
    </section>
  );
}

export default PageApartment;