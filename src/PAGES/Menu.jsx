import { Col, Container, Row } from "react-bootstrap"
import { Card, Button } from "react-bootstrap"
import Cake from '../VIEWDETAILS/Cake'
import Juice from "../VIEWDETAILS/Juice"
import Browine from "../VIEWDETAILS/Browine"
import Starbuck from "../VIEWDETAILS/Starbuck"
import Pannacotta from "../VIEWDETAILS/Pannacotta"
import Cappuccino from "../VIEWDETAILS/Cappuccino"
import Falooda from "../VIEWDETAILS/Falooda"
import Icecream from "../VIEWDETAILS/Icecream"

const Menu = () => {


  return (
    <>
      <div className="text-center mt-5">
        <h1>Our Menu</h1>
        <p>Explore our delicious offerings below:</p>
      </div>
      <Container className="mt-5 mb-5">
        <Row className="text-center mt-4 d-flex justify-content-space-between mb-5">
          <Col sm={12} md={6} lg={3} className="mb-5 box">
            <Card style={{ width: '16rem' }}>
              <div data-aos="zoom-out-up">
                <Card.Img variant="top" src="https://i.pinimg.com/1200x/35/fc/47/35fc471714a7bc4e48893fe0c3be61be.jpg" />
              </div>
              <Card.Body>
                <Card.Title>Cakes</Card.Title>
                <Cake />
                <Button variant="primary" className="me-2 mt-2">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-5 box">
            <Card style={{ width: '16rem' }}>
              <div data-aos="zoom-out-up">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/93/8e/f1/938ef19d548cf9931368ccc9eda3ff6e.jpg" />
              </div>
              <Card.Body>
                <Card.Title>Fresh Juice</Card.Title>
                <Juice/>
                <Button variant="primary" className="me-2 mt-2">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-5 box">
            <Card style={{ width: '16rem' }}>
              <div data-aos="zoom-out-up">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/2b/bd/8d/2bbd8ddef0efd324f26cadb9b0f4c17d.jpg" />
              </div>
              <Card.Body>
                <Card.Title>Brownies</Card.Title>
                <Browine/>
                <Button variant="primary" className="me-2 mt-2  ">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-5 box">
            <Card style={{ width: '16rem' }}>
              <div data-aos="zoom-out-up">
                <Card.Img variant="top" src="https://i.pinimg.com/1200x/2a/bd/93/2abd93d33194f4f50e1f563f547ebf66.jpg" />
              </div>
              <Card.Body>
                <Card.Title>Starbucks Coffee</Card.Title>
                <Starbuck/>
                <Button variant="primary" className="me-2 mt-2">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-center mt-5 d-flex justify-content-between mb-4">
          <Col sm={12} md={6} lg={3} className="mb-5 box">
            <Card style={{ width: '16rem' }}>
              <div data-aos="zoom-out-up">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/ee/8a/f3/ee8af33f4fa782d924534b4b14b05247.jpg" />
              </div>
              <Card.Body>
                <Card.Title>Panna Cotta</Card.Title>
                <Pannacotta/>
                <Button variant="primary" className="me-2 mt-2" >Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-5 box">
            <Card style={{ width: '16rem' }}>
              <div data-aos="zoom-out-up">
                <Card.Img variant="top" src="https://i.pinimg.com/1200x/c4/73/7e/c4737e013a673e196416210867f9b1f8.jpg" />
              </div>
              <Card.Body>
                <Card.Title>Cappuccino</Card.Title>
                <Cappuccino/>
                <Button variant="primary" className="me-2 mt-2">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-5 box ">
            <Card style={{ width: '16rem' }}>
              <div data-aos="zoom-out-up">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/4b/e0/f7/4be0f761c47b6ff9668baab3590911bb.jpg" />
              </div>
              <Card.Body>
                <Card.Title>Falooda</Card.Title>
                <Falooda/>
                <Button variant="primary" className="me-2 mt-2">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-5 box">
            <Card style={{ width: '16rem' }}>
              <div data-aos="zoom-out-up">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/69/4f/68/694f68f3dc4eef86b9406f61adb486ec.jpg" />
              </div>
              <Card.Body>
                <Card.Title>IceCream</Card.Title>
                <Icecream/>
                <Button variant="primary" className="me-2 mt-2">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Menu