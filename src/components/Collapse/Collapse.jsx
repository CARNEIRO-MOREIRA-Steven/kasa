import React from 'react'
import Arrow from "../../assets/arrow_back.svg"
const Collapse =({liTitle, textDescription}) => {
    return <section id="collapse">
            <li id="li">
            {liTitle}
            <img alt="fleche" id="arrow" src={Arrow}></img>
            </li>
            <p id="description_apropos">{textDescription}</p>
            </section>
}

export default Collapse