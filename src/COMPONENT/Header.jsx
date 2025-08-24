// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav, Navbar, Container, Button } from 'react-bootstrap'
// import { ImSpoonKnife } from "react-icons/im";
// import { FaPhoneAlt } from "react-icons/fa";

// const Header = () => {

//   const form = () => {
//     <form >
//       <input type="text" placeholder='Name' id='username' />
//       <input type="password" placeholder='Password' id='pass' />
//       <button onClick={login}>Login </button>
//     </form>
//   }

//   const login = () => {
//     let a = document.getElementById("username").value
//     let b = document.getElementById("pass").value

//     var name = "admin"
//     var pass = 12345

//     if (a === name && b === pass) {
//       alert("Login Sucessful")
//     } else {
//       alert("Login Failed")
//     }
//   }

//   return < >
//     <Navbar expand="lg" className='sticky-top' id="nav">
//       <Container>
//         <Navbar.Brand href="/Homepage">Easter <ImSpoonKnife />  Cafe</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="Home">HOME</Nav.Link>
//             <Nav.Link href="About">ABOUT</Nav.Link>
//             <Nav.Link href="Chef">CHEF</Nav.Link>
//             <Nav.Link href="Menu">MENU</Nav.Link>
//             <Nav.Link href="Contact">CONTACT</Nav.Link>
//           </Nav>
//           <Nav className="ms-auto">
//             <Nav.Link href="Footer">CALL NOW ! <FaPhoneAlt /> 010 020 030 </Nav.Link>
//             <Button variant="danger" onClick={form}>Reserve a table</Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   </>
// }

// export default Header


import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Nav, Navbar, Container, Button, Modal, Form } from 'react-bootstrap';
import { ImSpoonKnife } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const login = (e) => {
    e.preventDefault();

    const adminName = "admin";
    const adminPass = "12345";

    if (username === adminName && password === adminPass) {
      alert("Login Successful");
      handleClose();
    } else {
      alert("Login Failed");
    }
  };

  return (
    <>
      <Navbar expand="lg" className='sticky-top' id="nav">
        <Container>
          <Navbar.Brand href="/Homepage">Easter <ImSpoonKnife /> Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="Home">HOME</Nav.Link>
              <Nav.Link href="About">ABOUT</Nav.Link>
              <Nav.Link href="Chef">CHEF</Nav.Link>
              <Nav.Link href="Menu">MENU</Nav.Link>
              <Nav.Link href="Contact">CONTACT</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="Footer">CALL NOW ! <FaPhoneAlt /> 010 020 030</Nav.Link>
              <Button variant="danger" onClick={handleShow}>Reserve a table</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal Form */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login to Reserve a Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={login}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
