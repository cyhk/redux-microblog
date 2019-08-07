import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Nav, NavItem, Navbar } from "reactstrap";
import "./NavBar.css";

/**
 * NavBar renders the navigation bar
 */
class NavBar extends Component {
  render() {
    return (
      // <Navbar expand="md">
        <Nav className="nav-bar">
          {/* <NavItem> */}
            <NavLink className="nav-bar-home" exact to="/">MICROBLOG</NavLink>
          {/* </NavItem> */}
          {/* <NavItem> */}
            <NavLink className="nav-bar-new" exact to="/new">ADD POST</NavLink>
          {/* </NavItem> */}
        </Nav>
      // </Navbar>
    )
  }
}

export default NavBar;
