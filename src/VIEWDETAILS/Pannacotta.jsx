import { Button,Modal } from "react-bootstrap"
import { useState } from "react"

const Pannacotta = () => {
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
          <Modal.Title>PANNA COTTA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="https://i.pinimg.com/1200x/73/83/8f/73838f707511ba0778042881ff74e973.jpg" alt="pannacotta" className="img-fluid w-50" />
            <img src="https://i.pinimg.com/736x/26/2e/5d/262e5d77dfe40a565ccc6fd6de1308d2.jpg" alt="pannacotta" className="img-fluid w-50" />
            <h3>Panna Cotta</h3>
            <p>Price: Rs. 250</p>
            <p>Description: A creamy Italian dessert made with sweetened cream thickened with gelatin and molded.</p>
            <p>Ingredients: Cream, sugar, gelatin, and vanilla.</p>
            <h3>Popular Toppings</h3>
            <ul>
              <li>Fresh Berries</li>
              <li>Chocolate Sauce</li>
              <li>Caramel Sauce</li>
              <li>Crushed Nuts</li>
              <li>Mint Leaves</li>
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

export default Pannacotta