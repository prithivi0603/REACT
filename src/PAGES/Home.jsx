

const Home = () => {
  return (
    <div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/736x/42/ec/9f/42ec9f3541c98040e80f336d85b0bc7c.jpg"
              className="d-block w-100 img-fluid"
              alt="error"
            />
            <div className="carousel-caption d-none d-md-block text-start h-50 mb-5">
              <h5>EATERY CAFE & RESTAURANT</h5>
              <h1>our mission is to provide an <br />unforgettable experience</h1><br />
              <button type="button" className="btn btn-danger btn-lg">Meet our chef</button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/1200x/10/11/40/101140505d30220fa2784ff56a348dcb.jpg"
              className="d-block w-100 img-fluid"
              alt="error"
            />
            <div className="carousel-caption d-none d-md-block text-start h-50 mb-5">
              <h5>YOUR PERFECT BREAKFAST</h5>
              <h1>The best dining quality can be <br /> here too!</h1><br />
              <button type="button" className="btn btn-danger btn-lg">Discover menu</button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/736x/b7/55/bd/b755bdd0b2eb62a9cb6ab7391b6ec926.jpg"
              className="d-block w-100 img-fluid"
              alt="error"
            />
            <div className="carousel-caption d-none d-md-block text-start h-50 mb-5">
              <h5>NEW RESTAURANT IN TOWN</h5>
              <h1>Enjoy our special menus every <br /> Sunday and Friday</h1><br />
              <button type="button" className="btn btn-danger btn-lg">Reservation</button>
            </div>
          </div>
        </div>

    
    </div>

  );
};

export default Home;
