import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../styles/Error.scss"
import { Link } from 'react-router-dom';

function Error (){
return (
    <div>
    <Header />
    <div id="error">
    <h1 id="error__numero">404</h1>
    <h2 id="error__numero--description">Oups! La page que vous demandez n'existe pas.</h2>
    <Link id="error__acceuil" to="/">Retourner à la page d'accueil</Link>
    </div>
    <Footer/>
</div>
)}

export default Error