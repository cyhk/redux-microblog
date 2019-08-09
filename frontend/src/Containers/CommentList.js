import React, { Component } from 'react';
import Comment from "./Comment";
import { connect } from "react-redux";
import { addComment } from '../actionCreators';
import "./CommentList.css";

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
    this.props.addComment(this.props.postId, this.state.comment);
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
    const { comments, postId } = this.props;
    const commentsList = comments.map(comment =>
      <Comment
        key={comment.id}
        commentId={comment.id}
        postId={postId}
        comment={comment.text} />
    );

    return (
      <div className="comment-list">
        <h3>Comments</h3>
        {commentsList}
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input
            className="comment-submit-box"
            name="comment"
            value={this.state.comment}
            placeholder="Post a comment."
            onChange={this.handleChange} />
          <button className="comment-submit-button" disabled={!this.state.comment}>Comment</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const postId = ownProps.postId;
  const comments = state.posts[postId].comments;
  return { comments }
}

const mapDispatchToProps = {
  addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
