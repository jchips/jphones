import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    }
  }

  setTheme = (getTheme) => {
    this.setState({ theme: getTheme.matches ? 'dark' : 'light' }) // set carousel indicator color
  }

  componentDidMount() {
    // Fetch color scheme for carousel indicators
    const getTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.setTheme(getTheme);
    getTheme.addEventListener('change', () => this.setTheme(getTheme)); // watch for changes
    return () => getTheme.removeEventListener('change', () => this.setTheme(getTheme));
  }

  setLogoTheme = () => {
    let theme;
    if (this.state.theme === 'light') {
      theme = '/assets/imgs/appIcon/jphones2.png';
    } else {
      theme = '/assets/imgs/appIcon/jphones_dark2.png';
    }
    return theme;
  }

  render() {
    return (
      <Navbar bg={this.state.theme} expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-center'>
            <Navbar.Brand href='/'>
              <img
                alt="Jphones logo - a phone in the middle of a circle"
                src={this.setLogoTheme()}
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
                <NavDropdown.Item href='/motorola'>Motorola</NavDropdown.Item>
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
