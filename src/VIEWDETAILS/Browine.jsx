import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'

const Browine = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className="me-2" variant="secondary" onClick={handleShow}>
                    View Details
                  </Button>
                  <Modal show={show} onHide={handleClose} animation={true}>
                    <Modal.Header closeButton>
                      <Modal.Title>BROWINES </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.pinimg.com/1200x/57/91/ed/5791edc7671745a98b1ecb263f65d831.jpg" alt="Browines" className='img-fluid w-50' />
                      <img src="https://i.pinimg.com/1200x/fb/94/8c/fb948c4a258d11fc9926c6928308cec7.jpg  " alt="Browines" className='img-fluid w-50' />
                      <h3>All Types of Browines Avaliable</h3>
                      <p>Price: Rs.500 for per kg </p>
                      <p>Description: A rich, chocolatey dessert made with butter, sugar, eggs, and flour.</p>
                      <p>Ingredients: Cocoa powder, flour, sugar, butter, eggs, and vanilla extract.</p>
                      <h3>All Types of Browines Avaliable</h3>
                      <ul>
                        <li>Classic Brownie</li>
                        <li>Walnut Brownie</li>
                        <li>Chocolate Chip Brownie</li>
                        <li>Blondie</li>
                        <li>Cheesecake Brownie</li>
                      </ul>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                

        </div>
    )
}

export default Browine