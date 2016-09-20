const { Navbar, Nav, NavItem } = require('react-bootstrap')

class NavbarInstance extends React.Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">About</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href="#">Sign up</NavItem>
            <NavItem eventKey={3} href="#">Register</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
