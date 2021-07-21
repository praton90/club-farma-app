import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';


const CustomNavbar = () => (

  <Navbar bg="dark" variant="dark">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand>Club Farma</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/products">
          <Nav.Link>Productos</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  </Navbar>
)

export default CustomNavbar;