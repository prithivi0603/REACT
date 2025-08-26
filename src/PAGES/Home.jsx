import Carousel from 'react-bootstrap/Carousel';
import food1 from '../IMAGES/food1.gif'
import food2 from '../IMAGES/food2.gif'
import food from '../IMAGES/food.jpg'

function Home() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={food1} className="d-block w-100 img-fluid bg" alt="error" />
        <Carousel.Caption className='text-start h-50 mb-5 d-none d-md-block'>
          <h5>EATERY CAFE & RESTAURANT</h5>
          <h1>Our mission is to provide an unforgettable experience</h1>
          <button className='btn btn-danger btn-lg '>Meet our Chef</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={food2} className="d-block w-100 img-fluid bg" alt="error" />
        <Carousel.Caption className='text-start h-50 mb-5 d-none d-md-block'>
          <h5>YOUR PERFECT BREAKFAST</h5>
          <h1>The best dining quality can be here too!</h1>
          <button className='btn btn-danger btn-lg'>Discover menu</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={food} className='d-block  w-100 img-fluid bg' alt='error' />
        <Carousel.Caption className='text-end h-50 mb-5 d-none d-md-block'>
          <h5>NEW RESTAURANT IN TOWN</h5>
          <h1>Enjoy our special menus every Sunday and Friday</h1>
          <button className='btn btn-danger btn-lg'>Reservation</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
