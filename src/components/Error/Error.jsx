import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../styles/Error.scss"

function Error (){
return (
    <div>
    <Header />
    <div id="error">
    <h1 id="error__numero">404</h1>
    <h2 id="error__numero--description">Oups! La page que vous demandez n'existe pas.</h2>
    <p>Retourner à la page d'acceuil</p>
    </div>
    <Footer/>
</div>
)}

export default Error