import React from 'react'
import Arrow from "../../assets/arrow_back.svg"
const Collapse =({liTitle, textDescription}) => {
    return <section>
            <li id="li">
            {liTitle}
            <img id="arrow" src={Arrow}></img>
            </li>
            <p id="description_apropos">{textDescription}</p>
            </section>
}

export default Collapse