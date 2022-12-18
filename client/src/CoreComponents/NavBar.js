import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from "react-redux";
import { displayUser } from './userSlice'
import { toggleViewMode, setEmoji, setIcon } from './viewSlice';

function NavBar() {

  const account = useSelector(state => state.user.account);
  const viewMode = useSelector(state => state.view.viewMode);
  const emoji = useSelector(state => state.view.emoji);
  const icon = useSelector(state => state.view.icon);
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
            <Nav.Link href="https://github.com/amber-martinez/book-it" className={viewMode} id='navlink' target="_blank" rel="noopener noreferrer">Github</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={<img src={icon ? 'https://i.imgur.com/4R2ztKT.png' : 'https://i.imgur.com/zfUMzuD.png'} style={{ height: 22 }} alt='profile icon'></img>}>
                <NavDropdown.Item href="/lists" className={viewMode} id='dropdownItem'>Lists</NavDropdown.Item>
                <button onClick={(() => {
                  dispatch(setEmoji())
                  if (emoji == false) {
                    dispatch(toggleViewMode('dark'));
                    dispatch(setIcon());
                  } else {
                    dispatch(toggleViewMode('light'));
                    dispatch(setIcon());
                  }
                })} style={{ backgroundColor: 'transparent', border: 'none', marginLeft: 11 }}>{emoji ? '☁️' : '☀️'}</button>
                <NavDropdown.Divider className={viewMode} id='divider'/>
                {account ? 
                <NavDropdown.Item onClick={onLogoutClick} className={viewMode} id='dropdownItem'>Sign out</NavDropdown.Item>
                :
                <NavDropdown.Item href="signin" className={viewMode} id='dropdownItem'>Sign in</NavDropdown.Item>
                }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar;