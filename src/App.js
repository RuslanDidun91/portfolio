import { ScrollButton } from "./Assets/ScrollButton/ScrollButton";
import { ContactForm } from './ContactForm/ContactForm';
import { MyProjects } from './Projects/Projects';
import { MySkills } from './Skills/MySkills';
import { AboutMe } from './AboutMe/AboutMe';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <ScrollButton />
            <Header />
            <Main />
            <AboutMe />
            <MySkills />
            <MyProjects />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default App;