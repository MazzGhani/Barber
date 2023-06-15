import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/esm/Button";
import {BsInstagram, BsFacebook, BsYoutube, BsTwitter} from "react-icons/bs"

function NavBar() {

  return (
    <Navbar bg="light" expand="lg" className="my-navbar align-items-center">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="/#"><BsFacebook /></Nav.Link>
        <Nav.Link href="/" >Barber</Nav.Link>
        <Nav.Link href="https://www.instagram.com/"><BsInstagram /> </Nav.Link>
        <Nav.Link href="/artist" id="artist" >Artist</Nav.Link>
        <Nav.Link href="#"><BsYoutube /></Nav.Link>
        <Nav.Link href="/teacher" >Teacher</Nav.Link>
        <Nav.Link href="#"><BsTwitter /></Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>

        
      </Nav>

    </Navbar.Collapse>

  </Navbar>
  );
}

export default NavBar;