import Header from "../components/Header/Header";
import Card from "../components/Card/Home";
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner";
import HomeImage from "../assets/mer.jpg"

function Home (){
    const altText = 'Image de la page À propos';
    const title = "Chez vous, partout et ailleurs"
    return (
        <section>
        <Header />
        <Banner  imageUrl={HomeImage} altText={altText} title={title}/>
        <Card />
        <Footer />
        </section>
    )
}

export default Home