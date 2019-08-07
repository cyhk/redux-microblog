import React, { Component } from 'react';
import PostForm from "./PostForm";

/**
 * PostDetails: renders post
 */
class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }


  handleDelete(evt) {
    // remove post from redux state
    this.props.history.push("/");
  }

  showEditForm() {
    this.setState({
      edit: true
    });
  }

  renderPost() {
    //connected from redux
    let post = this.props.post;
    return (
      <div>
        <div>
          <h3>{post.title}</h3>
          <span>{post.description}</span>
          <button onClick={this.showEditForm}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        <p>{post.body}</p>
      </div>
    );
  }

  renderForm() {
    //also get from redux
    let postId = this.props.post.id;
    return <PostForm history={this.props.history} postId={postId} />;
  }

  render() {
    if (this.state.edit) {
      return this.renderForm();
    }
    return this.renderPost();
  }
}

export default PostDetails;
