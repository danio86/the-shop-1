import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      const { data } = await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };



//   das wird der add irgendwas link der wird später woanders eingesetzt
  const addPostIcon = (
  <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/posts/create">
    <i className="fas fa-plus-circle"></i>Add posts
  </NavLink> );
//   das (oben) wird der add irgendwas link der wird später woanders eingesetzt

  const loggedInIcons = <>
  <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/feed">
    <i className="fas fa-comments"></i>Feed
  </NavLink>
  <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/liked">
    <i className="far fa-thumbs-up"></i>Liked
  </NavLink>
  <NavLink
        to="/"
        className={styles.NavLink}
        // activeClassName={styles.Active}
        onClick ={handleSignOut}
        >
        <i className="fas fa-sign-out"></i>Logout
  </NavLink>
  <NavLink
        to={`/profile/${currentUser?.profile_id}`}
        className={styles.NavLink}
        activeClassName={styles.Active}
        >
        < img className={styles.Avatar} src={currentUser?.profile_image} text="Profile"/>Profile
  </NavLink>
  </>;

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
        activeClassName={styles.Active}>
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>

        {currentUser && addPostIcon}
        {/* shows add link only when user is loggedin */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;