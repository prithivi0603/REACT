import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./PAGES/Home"
import About from "./PAGES/About"
import Chef from "./PAGES/Chef"
import Menu from "./PAGES/Menu"
import Contact from "./PAGES/Contact"
import Footer from './COMPONENT/Footer';
import Mylayout from "./LAYOUT/Mylayout"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  element={<Mylayout />}>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Chef" element={<Chef/>}></Route>
            <Route path="/Menu" element={<Menu/>}></Route>
            <Route path="/Contact" element={<Contact />} ></Route>
            <Route path="/Footer" element={<Footer />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App