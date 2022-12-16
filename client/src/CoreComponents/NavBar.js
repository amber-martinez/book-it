import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from "react-redux";
import { displayUser } from './userSlice'

function NavBar() {

  const account = useSelector(state => state.user.account);
  const dispatch = useDispatch();

  console.log(account)

  function onLogoutClick(e) {
    e.preventDefault();

    fetch('/api/signout', {
      method: 'DELETE'
    })
    .then(() => {
        dispatch(displayUser(null))
        window.location.href = '/home'
    })
  }

    return (
    <Navbar collapseOnSelect expand="lg" id='navbar' style={{ backgroundColor: '#eef0f2', color: '#4f564e' }}>
      <Container style={{ fontSize: 13 }}>
        <Navbar.Brand href="/home" style={{ color: '#4d564d' }}><img src='https://i.imgur.com/w2LgVJW.png' id='navbarImg' alt='bookmark' style={{ height: 22, marginRight: 6, marginTop: -2 }}></img>Book It</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown id="collasible-nav-dropdown" title={<img src='https://i.imgur.com/4R2ztKT.png' style={{ height: 22 }} alt='profile icon'></img>}>
                <NavDropdown.Item href="/lists">Lists</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Themes</NavDropdown.Item>
                <NavDropdown.Divider />
                {account ? 
                <NavDropdown.Item onClick={onLogoutClick}>Sign out</NavDropdown.Item>
                :
                <NavDropdown.Item href="signin">Sign in</NavDropdown.Item>
                }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar;