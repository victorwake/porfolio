import './home.css'
import { NavBar } from '../navBar/NavBar.jsx'
import { About } from '../about/About.jsx'
import { Porfolio } from '../porfolio/Porfolio.jsx'
import { Skills } from '../skills/Skills.jsx'
import { Cv } from '../cv/Cv.jsx'
import { Footer } from '../footer/Footer.jsx'


export function Home () {
    return (
        <div className="home">
            <NavBar />
            <About />
            <Porfolio />
            <Skills />
            <Cv />
            <Footer />
        </div>
    )
}
