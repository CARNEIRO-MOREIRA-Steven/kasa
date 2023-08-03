import Logo from '../../assets/LOGO.svg'
import { Link } from 'react-router-dom'
import "../../styles/Header.scss"


function Header (){
    return (
        <div id="header">
            <img id="header_logo" alt="Logo "src={Logo}></img>
        <nav id="header__link">
            <Link id="header__link--acceuil" to="/">Acceuil</Link>
            <Link id="header__link--apropos"to="/apropos">A propos</Link>
        </nav>
        </div>
    )
}

export default Header