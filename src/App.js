import './App.scss';
import {Header} from './Header/Header'
import {Main} from './Main/Main'
import {AboutMe} from './AboutMe/AboutMe'
import {MySkills} from './Skills/MySkills'
import {MyProjects} from './Projects/Projects'
import {ContactForm} from './ContactForm/ContactForm'
import {Footer} from './Footer/Footer'
import {ScrollButton} from "./Assets/ScrollButton/ScrollButton"

const App = () => {
    return (
        <div className="App">
            <ScrollButton/>
            <Header/>
            <Main/>
            <AboutMe/>
            <MySkills/>
            <MyProjects/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default App