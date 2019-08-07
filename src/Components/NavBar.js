import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

/**
 * NavBar renders the navigation bar
 */
class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <NavLink exact to="/">MICROBLOG</NavLink>
        <NavLink exact to="/new">ADD POST</NavLink>
      </nav>
    )
  }
}

export default NavBar;
