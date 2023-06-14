import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../App';

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext);
  

    // const loggedInIcons =
    const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );


  return (
    // <Navbar className={styles.NavBar} bg="dark" variant="dark" expand="md" fixed="top">
    <Navbar  className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/">
                <Navbar.Brand >
                    <img className={styles.Logo} src={logo} alt="logo"></img>
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-right text-white ">
                <NavLink
                    exact
                    className={styles.NavLink} activeClassName={styles.Active} to="/">
                    <i className="fas fa-home"></i>
                    Home
                </NavLink>
                    
                </Nav>  
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar