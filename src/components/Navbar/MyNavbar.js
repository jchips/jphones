import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-center'>
            <Navbar.Brand href='/'>
              <img
                alt="Logo"
                src="/assets/imgs/appIcon/jphones2.png"
                width="25"
                height="25"
                className="d-inline-block align-center mx-1"
              />{' '}
              jPhones</Navbar.Brand>
            <Nav activeKey={window.location.pathname}>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/compare'>Compare</Nav.Link>
              <NavDropdown title='Companies' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/apple'>Apple</NavDropdown.Item>
                <NavDropdown.Item href='/asus'>Asus</NavDropdown.Item>
                <NavDropdown.Item href='/google'>Google</NavDropdown.Item>
                <NavDropdown.Item href='/nothing'>Nothing</NavDropdown.Item>
                <NavDropdown.Item href='/oneplus'>OnePlus</NavDropdown.Item>
                <NavDropdown.Item href='/samsung'>Samsung</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/about'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MyNavbar;
