import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl, Container} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">MERN_PROJECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="ml-sm-2"
              />
            </Form>
          </nav>
          <Nav className="">
            <Nav.Link href="/mynotes">My Notes</Nav.Link>

            <NavDropdown title="Poonam More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
