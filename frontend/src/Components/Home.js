import React, { Component } from 'react';
import TitleList from "../containers/TitleList";

/**
 * Home: Landing page for microblog, displays post titles
 */
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome!</h2>
        <TitleList />
      </div>
    )
  }
}

export default Home;
