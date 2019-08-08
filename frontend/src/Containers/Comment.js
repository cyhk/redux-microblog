import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteComment } from '../actionCreators';

/**
 * Comment: displays comment text with delete button
 */
class Comment extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // delete from redux store
  handleClick(evt){
    const { postId, commentId, deleteComment } = this.props;
    deleteComment(postId, commentId);
  }

  render() {
    if (!this.props.commentId) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <button onClick={this.handleClick}>X</button>
        <span>{this.props.comment}</span>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteComment
}

export default connect(null, mapDispatchToProps)(Comment);
