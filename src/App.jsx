import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./COMPONENT/Header"
import Homepage from './PAGES/Homepage';
import Home from "./PAGES/Home"
import About from "./PAGES/About"
import Chef from "./PAGES/Chef"
import Menu from "./PAGES/Menu"
import Contact from "./PAGES/Contact"
import Footer from './COMPONENT/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Chef" element={<Chef/>}></Route>
            <Route path="/Menu" element={<Menu/>}></Route>
            <Route path="/Contact" element={<Contact />} ></Route>
            <Route path="/Footer" element={<Footer />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App