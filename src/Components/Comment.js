import React, { Component } from 'react';

/**
 * Comment: displays comment text with delete button
 */
class Comment extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt){
    //something redux dispatch delete comment this.props.id
    console.log("delete this")
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>X</button>
        <p>{this.props.comment}</p>
      </div>
    );
  }
}

export default Comment;
