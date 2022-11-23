import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Do It Now</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/signup">Sign up</Nav.Link>
            <Nav.Link href="/signin">Sign in</Nav.Link>
            <NavDropdown title="menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/aboutus">About us</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/contactus">Contact us</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/aboutus">About us</Nav.Link>
            <Nav.Link eventKey={2} href="/contactus">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;