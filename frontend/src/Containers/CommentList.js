import React, { Component } from 'react';
import Comment from "./Comment";
import { connect } from "react-redux";
import { addComment } from '../actionCreators';
import uuid from "uuid/v4";

/**
 * Comments: takes post id as prop, renders all comments for that post
 * includes form to create new comment
 */
class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // add to redux store
  handleSubmit(evt) {
    evt.preventDefault();
    const commentId = uuid();
    this.props.addComment(this.props.postId, commentId, this.state.comment);
    this.setState({
      comment: ''
    })
  }

  // change local state
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const { postComments, commentsById, postId } = this.props;
    const commentsList = postComments.map(commentId =>
      <Comment
        key={commentId}
        commentId={commentId}
        postId={postId}
        comment={commentsById[commentId]} />
    );

    return (
      <div className="comment-list">
        {commentsList}
        <form onSubmit={this.handleSubmit}>
          <input
            name="comment"
            value={this.state.comment}
            placeholder="Post a comment."
            onChange={this.handleChange} />
          <button disabled={!this.state.comment}>Comment</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.postId;
  return {
    commentsById: state.comments.byId,
    postComments: state.posts.byId[id].comments
  };
}

const mapDispatchToProps = {
  addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
