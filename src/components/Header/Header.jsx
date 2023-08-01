import Logo from '../../assets/LOGO.svg'
import { Link } from 'react-router-dom'
import "../../App.scss"




function Header (){
    return (
        <div id="header">
            <img id="header_logo" alt="Logo "src={Logo}></img>
        <nav id="header_link">
            <Link id="acceuil_link" to="/">Acceuil</Link>
            <Link id="apropos_link"to="/apropos">A propos</Link>
        </nav>
        </div>
    )
}

export default Header