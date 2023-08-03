import React, { useState } from 'react';
import Arrow from '../../assets/arrow_back.svg';
import '../../styles/Collapse.scss';
import '../../styles/Style.css';

const Collapse = ({ liTitle, textDescription }) => {
  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleArrowClick = () => {
    setIsContentOpen((prevState) => !prevState);
  };

  return (
    <section id="collapse">
      <li id="collapse__liste" onClick={handleArrowClick}>
        {liTitle}
        <img
          alt="arrow"
          id="collapse__liste--arrow"
          className={`arrow ${isContentOpen ? 'rotated-out' : 'rotated-in'}`}
          src={Arrow}
        />
      </li>
      <p id="collapse__description" className={isContentOpen ? 'open' : 'closed'}>
        {textDescription}
      </p>
    </section>
  );
};

export default Collapse;