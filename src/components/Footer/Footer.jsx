import "../../styles/Footer.scss"
import LogoFooter from "../../assets/logo_footer.png"

function Footer () {
    return (
        <section id="footer">
            <div id="footer__content">
            <img alt="footer__content--logo" id="logofooter"src={LogoFooter}></img>
            <p id="footer__content--copyright">© 2020 Kasa. All rights reserved</p>
            </div>
        </section>
    )

}

export default Footer