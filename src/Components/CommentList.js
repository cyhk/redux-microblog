import React, { Component } from 'react';
import Comment from "./Comment";
import { connect } from "react-redux";
import { addComment } from '../actionCreators';

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

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.addComment(this.props.postId, this.state.comment);
    this.setState({
      comment: ''
    })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }



  render() {
    const { comments, postId } = this.props;
    console.log(comments);
    console.log()
    return (
      <div className="comment-list">
        {comments[postId].map((comment, index) =>
          <Comment postId={postId} index={index} comment={comment} />
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            name="comment"
            value={this.state.comment}
            placeholder="Post a comment."
            onChange={this.handleChange} />
            <button>Comment</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

const mapDispatchToProps = {
  addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
