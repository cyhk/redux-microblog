import React, { Component } from 'react';
import Comment from "./Comment";

/**
 * Comments: takes post id as prop, renders all comments for that post
 * includes form to create new comment
 */
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault()
    //add comment to redux state !!!!
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
    // get comments for post from redux somehow
    let comments = this.props.comments
    return (
      <div>
        {comments.map(comment =>
          <Comment text={comment} />
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            name="comment"
            value={this.state.comment}
            placeholder="Post a comment."
            onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Comments;
