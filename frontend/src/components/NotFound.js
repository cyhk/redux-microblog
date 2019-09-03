import React, { Component } from 'react';
// import "./NotFound.css"

/**
 * NotFound: rendered when page does not match
 * any of the routes
 */
class NotFound extends Component {
  render() {
    return (
      <div className="not-found-block">
        <h3 className="not-found-message">
          Oops, we didn't find what you were looking for...
        </h3>
      </div>
    );
  }
}

export default NotFound;
