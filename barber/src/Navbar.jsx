import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="my-navbar align-items-center">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="#barber">Barber</Nav.Link>
        <Nav.Link href="#artist">Artist</Nav.Link>
        <Nav.Link href="#teacher">Teacher</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavBar;