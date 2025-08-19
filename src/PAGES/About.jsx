import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'

const About = () => {
  return (
    
      <Container className="mt-5">
        <Row>
         <Col sm={12} md={6} lg={6} className='mt-5'>
         <div data-aos="flip-left">
            <p>READ OUR STORY</p>
            <h2>We've been Making The Delicious Foods Since 1999</h2>
            <br />
            <p>In 1999, we started our journey to bring you the best culinary experiences, and we continue to innovate and delight our customers every day.</p>

            <p>An eatery is a general term for a place serves food, while a cafe is specific type of eatery known for its focus on coffee, tea and light meals liken pastries and sandwiches.
              Thank you.
            </p>
            </div>
          </Col>
        <Col sm={12} md={6} lg={6} className='mt-5'> 
        <div data-aos="flip-right">
            <img src="https://i.pinimg.com/1200x/cd/03/d2/cd03d26b0a536f316e05b36cb1f25284.jpg" alt="About Us" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About