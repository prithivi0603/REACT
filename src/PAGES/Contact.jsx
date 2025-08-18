import { Container, Col, Row, Button } from "react-bootstrap"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const Contact = () => {
  return (
    <>
    <div>
      <h1 className="text-center mt-5">Contact Us</h1>
      <p className="text-center">We would love to hear from you !</p>
    </div>
      <Container>
        <Row className="mt-5" mb={5}>
          <Col sm={12} md={6} lg={6} className="mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.3337811297442!2d78.1051626737238!3d9.90613357464551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf9249646a6f%3A0x5281384977047d50!2sThe%20Eatery%20Town!5e0!3m2!1sen!2sin!4v1750242232605!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "100%", marginBottom: "10px" }} loading="lazy"
              title="The Eatery Town Location" ></iframe>
          </Col >
          <Col sm={12} md={6} lg={6} mt={5}>
           <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
              <Form.Control type="text" placeholder="name" name="username" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" name="email" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea" label="Tell about your order">
              <Form.Control as="textarea" placeholder="Leave a comment here" name="message" style={{ height: '100px' }} />
            </FloatingLabel>
         <center><Button variant="danger" type="submit" className="mt-3">Message</Button></center>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact