import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "../App.css"
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer mt-5'>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <h1>Find us</h1>
                        <p>123 nulla a curus rhlncus, agevsem vivere 10293 id  ultrices  sapien</p>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h1>Resercation</h1>
                        <p> 090-080-0650 | 090-070-0430</p>
                        <p>info@company.com.line</p>
                        <p>eastery 24/7</p>
                    </Col>
                    <Col sm={12} md={6} lg={3} id='hour'>
                        <h1>Open Hours</h1>
                        <p> Monday:Closed</p>

                        <h5>Tuesday to Friday</h5>
                        <p>7:00 AM - 9.00 PM</p>

                        <h5>Saturday to Sunday</h5>
                        <p>11:00 AM - 10:00 PM</p>
                    </Col>
                    <Col sm={12} md={6} lg={3} mb={5}>
                        <a className="me-3" href="https://www.facebook.com/"><FaFacebook /></a>
                        <a className="me-3" href="https://www.whatsapp.com/"><FaWhatsapp /></a>
                        <a className="me-3" href="https://www.instagram.com/"><FaInstagram /></a>
                        <a className="me-3" href="https://www.linkedin.com/"><FaLinkedin /></a>
                        <a className="me-3" href="https://twitter.com/"><FaTwitter /></a>
                        <br />
                        <br />
                        <p>Copyright © 2024 All rights reserved</p>
                    
                        <h6 className='mb-5'>Eastery Cafe</h6>
                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Footer