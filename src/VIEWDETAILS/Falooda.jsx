import { Button, Modal } from "react-bootstrap"
import { useState } from "react"

const Falooda = () => {
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
                    <Modal.Title>FALOODA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://i.pinimg.com/736x/40/57/5c/40575c54c1ced8270749d1e7e8137c3d.jpg" alt="falooda" className="img-fluid w-50" />
                    <img src=" https://i.pinimg.com/736x/c4/35/81/c43581fd4c8fef2d5b75ec36f4f2211a.jpg" alt="falooda" className="img-fluid w-50" />
                    <h3>Falooda</h3>
                    <p>Price: Rs. 150</p>
                    <p>Description: A delightful dessert made with vermicelli, sweet basil seeds, and milk, topped with ice cream.</p>
                    <p>Ingredients: Vermicelli, sweet basil seeds, milk, and ice cream.</p>
                    <h3>Popular Variations</h3>
                    <ul>
                        <li>Rose Falooda</li>
                        <li>Mango Falooda</li>
                        <li>Chocolate Falooda</li>
                        <li>Mixed Fruit Falooda</li>
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

export default Falooda