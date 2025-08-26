import { Modal,Button } from "react-bootstrap";
import { useState } from "react";

const Cake = () => {
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
          <Modal.Title>CAKES </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="https://i.pinimg.com/1200x/5e/9f/3a/5e9f3a713637cf56edf71d73db00f72e.jpg" alt="Cake" className='img-fluid w-50 ' />
          <img src="https://i.pinimg.com/736x/f2/f5/02/f2f5020d5fb1a006529a8c60a9f7a4bc.jpg" alt="red velvet" className='img-fluid w-50 ' />
          <h3>Special Cake</h3>
          <p>Price: Rs. 500  per kg</p>
          <p>Description: A delicious special cake made with the finest ingredients.</p>
          <p>Ingredients: Flour, Sugar, Eggs, Butter, Vanilla Extract</p>
          <h3>All types Cakes Avaliable</h3>
          <ul>
            <li>Chocolate Cake</li>
            <li>Vanilla Cake</li>
            <li>Red Velvet Cake</li>
            <li>Fruit Cake</li>
            <li>Customize Cake</li>
            <li>Pice Cake</li>
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

export default Cake