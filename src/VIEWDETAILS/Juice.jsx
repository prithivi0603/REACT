import { Modal, Button } from "react-bootstrap";
import { useState } from "react";


const Juice = () => {
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
                    <Modal.Title>JUICE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://i.pinimg.com/1200x/28/25/9d/28259d3b47bf8030d3ee57dcd815f1e8.jpg" alt=" juices" className="img-fluid w-50" />
                    <img src="https://i.pinimg.com/1200x/df/5f/52/df5f5252619abfc20bc4230dae3dd142.jpg" alt=" juices" className="img-fluid w-50" />
                    <h3>Fresh juices</h3>
                    <p>Price : Rs. 50 for 500ml</p>
                    <p>Description: A refreshing drink made from fresh fruits and vegetables.</p>
                    <p>Ingredients: Fresh fruits, vegetables, and natural sweeteners.</p>

                    <h1>Fresh Juice are Avaliable</h1>
                    <ul>
                        <li>Apple Juice</li>
                        <li>Mango Juice</li>
                        <li>Watermelon Juice</li>
                        <li>Milkshake</li>
                        <li>RoseMilk</li>
                        <li>BadhamMilk</li>
                        <li>Chocolate Milkshake</li>
                        <li>Mixture juice</li>
                        <li>Customized Jucie</li>
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

export default Juice