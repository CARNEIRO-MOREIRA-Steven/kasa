import React from "react";
import Collapse from "./Collapse";

const CollapseApropos = () => {
    const Fiabilite = "Fiabilité";
    const DescriptionFiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
    const Respect = "Respect";
    const DescriptionRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraînera une exclusion de notre plateforme."
    const Service = "Service";
    const DescriptionService ="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraînera une exclusion de notre plateforme."
    const Securite = "Securité"
    const DescriptionSecurite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logementcorrespond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'aulocataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisonségalement des ateliers sur la sécurité domestique pour nos hôtes."
    return(
        <nav id="collapse">
            <Collapse liTitle={Fiabilite} textDescription={DescriptionFiabilite}/>
            <Collapse liTitle={Respect} textDescription={DescriptionRespect}/>
            <Collapse liTitle={Service} textDescription={DescriptionService}/>
            <Collapse liTitle={Securite} textDescription={DescriptionSecurite}/>
        </nav>
    )
        
}
export default CollapseApropos