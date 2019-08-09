import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import NavBar from "./NavBar";

/**
 * App renders the Shop app
 */
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes />
      </div>)
  }
}

export default App;
