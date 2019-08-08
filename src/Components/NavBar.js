import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import "./NavBar.css";

/**
 * NavBar renders the navigation bar
 */
class NavBar extends Component {
  render() {
    return (
      <Nav className="nav-bar">
        <NavLink className="nav-bar-home" exact to="/">MICROBLOG</NavLink>
        <NavLink className="nav-bar-new" exact to="/posts/new">NEW POST</NavLink>
      </Nav>
    )
  }
}

export default NavBar;
