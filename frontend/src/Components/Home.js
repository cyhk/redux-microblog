import React, { Component } from 'react';
import TitleList from "../Containers/TitleList";

/**
 * Home: Landing page for microblog, displays post titles
 */
class Home extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to Microblog!</h3>
        <TitleList />
      </div>
    )
  }
}

export default Home;
