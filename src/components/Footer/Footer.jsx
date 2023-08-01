import "../../App.scss"
import LogoFooter from "../../assets/logo_footer.png"

function Footer () {
    return (
        <section id="footer">
            <div id="content_footer">
            <img alt="logo footer" id="logofooter"src={LogoFooter}></img>
            <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </section>
    )

}

export default Footer