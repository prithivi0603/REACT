import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../COMPONENT/Header'
// import Footer from '../COMPONENT/Footer'
import {Outlet} from 'react-router-dom'

const Mylayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Mylayout

