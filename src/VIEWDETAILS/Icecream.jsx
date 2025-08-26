import { Button, Modal } from "react-bootstrap"
import { useState } from "react"

const Icecream = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <Button className="me-2" variant="secondary" onClick={handleShow}>
                View Details
            </Button>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>ICECREAM</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://i.pinimg.com/736x/0b/c1/77/0bc1778d4c186e6d054c0172d243e6b9.jpg" alt="icecreame" className="img-fluid w-50" />
                    <img src="https://i.pinimg.com/736x/e5/09/c2/e509c20a87278438034cbc636ebfc175.jpg" alt="icecreame" className="img-fluid w-50" />
                    <h3>Ice Cream</h3>
                    <p>Price: Rs. 200</p>
                    <p>Description: A creamy and delicious ice cream made with the finest ingredients.</p>
                    <p>Ingredients: Milk, cream, sugar, and natural flavors.</p>
                    <h3>Popular Flavors</h3>
                    <ul>
                        <li>Vanilla</li>
                        <li>Chocolate</li>
                        <li>Strawberry</li>
                        <li>Mango</li>
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

export default Icecream