import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'

const Starbuck = () => {
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
          <Modal.Title>STARBUCKS </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="https://i.pinimg.com/736x/08/8d/cf/088dcf534d50435c9e6172a63b0e17b1.jpg" alt="Starbucks" className='img-fluid w-50' />
          <img src="https://i.pinimg.com/736x/98/d1/19/98d1198f0693d7f3125e7ff2ab48214e.jpg" alt="Starbucks" className='img-fluid w-50' />
          <h3>Starbucks</h3>
          <p>price : Rs. 300</p>
          <p>Description: A popular coffeehouse chain known for its specialty coffee drinks, pastries, and cozy atmosphere.</p>
          <p>Ingredients: Coffee, milk, sugar, and various flavorings.</p>
          <h3>Popular Starbucks Drinks</h3>
          <ul>
            <li>Espresso</li>
            <li>Latte</li>
            <li>Cappuccino</li>
            <li>Frappuccino</li>
            <li>Cold Brew</li>
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

export default Starbuck