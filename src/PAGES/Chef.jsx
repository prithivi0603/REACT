import { Card, Button } from 'react-bootstrap'
import { Col, Container, Row } from 'react-bootstrap'

const Chef = () => {
  return (
    <>
      <div className='text-center mt-5 mb-5'>
        <h1>Meet Our Chefs</h1>
        <p>THEY ARE NICE & FRIENDLY</p>
      </div>
      <Container>
        <Row className='d-flex justify-content-space-between text-center '>
          <Col sm={12} md={6} lg={3} p={5} className="mb-5 box">
            <Card style={{ width: '15rem' }}>
              <div data-aos="zoom-in">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/58/e8/43/58e843c46ee1a413f70fb0f72cdf87a4.jpg" />
              </div>
              <Card.Body>
                <div data-aos="flip-left">
                <Card.Title>Chef Thomsan</Card.Title>
                <Card.Text>
                  Chef Thomsan is known for his delicious pasta dishes and warm personality.
                </Card.Text>
                <Button variant="primary">View profile</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} p={5} g={5} className='mb-5 box'>
            <Card style={{ width: '15rem' }}>
              <div data-aos="zoom-in">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/1b/ec/a0/1beca0c5b7a98e531a80cf8992ce20a7.jpg" />
              </div>
              <Card.Body>
                <div data-aos="flip-right">
                <Card.Title>Chef Maria</Card.Title>
                <Card.Text>
                  Chef Maria is famous for her crazy pizza and charming demeanor.
                </Card.Text>
                <Button variant="primary">View profile</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} g={5} className='mb-5 box'>
            <Card style={{ width: '15rem' }}>
              <div data-aos="zoom-in">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/de/ae/d9/deaed979a64733c0938ab2b887fe6164.jpg" />
              </div>
              <Card.Body>
                <div data-aos="flip-left">
                <Card.Title>Chef John</Card.Title>
                <Card.Text>
                  Chef John is known for his innovative dishes and dessert dishes to detail.
                </Card.Text>
                <Button variant="primary">View profile</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} g={5}>
            <Card style={{ width: '15rem' }} className="mb-5 box">
              <div data-aos="zoom-in">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/b5/36/56/b53656d4c13bcb7cdf13bf5c49430873.jpg" />
              </div >
              <Card.Body>
                <div data-aos="flip-right">
                <Card.Title>Chef Lisa</Card.Title>
                <Card.Text>
                  Chef Lisa is known for her vibrant salads and dedication to fresh ingredients.
                </Card.Text>
                <Button variant="primary">View profile</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Chef