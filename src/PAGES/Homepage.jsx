import Home from './Home';
import About from "./About";
import Chef from "./Chef";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from '../COMPONENT/Footer';

const Homepage = () => {
    return (
        <div>
            <div data-aos="fade-up"> <Home /></div>
            <div data-aos="fade-up"> <About /></div>
            <div data-aos="fade-up"> <Chef /></div>
            <div data-aos="fade-up"> <Menu /></div>
            <div data-aos="fade-up"> <Contact /></div>
            <div data-aos="fade-up"> <Footer /></div>
        </div>
    )
}

export default Homepage