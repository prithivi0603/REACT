import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'

const Cappuccino = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div>
            <Button className="me-2" variant="secondary" onClick={handleShow}>
                View Details
            </Button>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>CAPPUCCINO </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src=" https://i.pinimg.com/1200x/c0/46/2a/c0462aba87c717ea044e5dccacf0f80d.jpg" alt="Cappuccino" className='img-fluid w-50' />
                    <img src=" https://i.pinimg.com/1200x/af/40/b8/af40b8f1f147b2e7498a7692400006b4.jpg " alt="Cappuccino" className='img-fluid w-50' />
                    <h3>Cappuccino</h3>
                    <p>Price: Rs. 300</p>
                    <p>Description: A rich and creamy coffee drink made with espresso and steamed milk, topped with frothy milk foam.</p>
                    <p>Ingredients: Espresso, steamed milk, milk foam, and cocoa powder.</p>
                    <h3>Popular Variations</h3>
                    <ul>
                        <li>Vanilla Cappuccino</li>
                        <li>Mocha Cappuccino</li>
                        <li>Caramel Cappuccino</li>
                        <li>Hazelnut Cappuccino</li>
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

export default Cappuccino