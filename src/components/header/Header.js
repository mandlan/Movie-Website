import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Correct import
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const Header = () => { 
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'Gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} /> {}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/watchlist">
              Watchlist
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tvshows">
              TV Shows
            </Nav.Link>
          </Nav>
          <Button variant="outline-info" className="me-2">Login</Button>
          <Button variant="outline-info">Register</Button>
        </Navbar.Collapse>
      </Container>
      <h1>Movie App</h1>
    </Navbar>
  );
};

export default Header; 