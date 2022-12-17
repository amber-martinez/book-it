import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from "react-redux";
import { displayUser } from './userSlice'
import { toggleViewMode, setEmoji } from './viewSlice';

function NavBar() {

  const account = useSelector(state => state.user.account);
  const viewMode = useSelector(state => state.view.viewMode);
  const emoji = useSelector(state => state.view.emoji);
  const dispatch = useDispatch();

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
    <Navbar collapseOnSelect expand="lg" className={viewMode} id='navbar'>
      <Container style={{ fontSize: 13 }}>
        <Navbar.Brand href="/home" className={viewMode} id='brand'><img src='https://i.imgur.com/w2LgVJW.png' id='navbarImg' alt='bookmark' style={{ height: 22, marginRight: 6, marginTop: -2 }}></img>Book It</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features" className={viewMode} id='navlink'>Features</Nav.Link>
            <Nav.Link href="#pricing" className={viewMode} id='navlink'>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown id="collasible-nav-dropdown" title={<img src='https://i.imgur.com/4R2ztKT.png' style={{ height: 22 }} alt='profile icon'></img>}>
                <NavDropdown.Item href="/lists">Lists</NavDropdown.Item>
                <button onClick={(() => {
                  dispatch(setEmoji())
                  if (emoji == false) {
                    dispatch(toggleViewMode('dark'))
                  } else {
                      dispatch(toggleViewMode('light'))
                  }
                })} style={{ backgroundColor: 'transparent', border: 'none', marginLeft: 11 }}>{emoji ? '☁️' : '☀️'}</button>
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