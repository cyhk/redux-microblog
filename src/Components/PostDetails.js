import React, { Component } from 'react';
import PostForm from "./PostForm";
import { connect } from "react-redux";
import CommentList from "./CommentList";
import { deletePost } from "../actionCreators";

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
    //call actioncreator to delete
    //connected from redux
    let id = this.props.match.params.postid;
    this.props.deletePost(id);
    this.props.history.push("/");
  }

  showEditForm() {
    this.setState({
      edit: true
    });
  }

  renderPost() {
    //connected from redux
    let id = this.props.match.params.postid;
    let post = this.props.posts[id];

    return (
      <div>
        <div>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <button onClick={this.showEditForm}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        <p>{post.body}</p>

        <div>
          <CommentList postId={id} />
        </div>
      </div>
    );
  }

  renderForm() {
    //also get from redux
    let id = this.props.match.params.postid;
    let post = this.props.posts[id];
    return <PostForm history={this.props.history} post={post} postId={id}/>;
  }

  render() {
    if (this.state.edit) {
      return this.renderForm();
    }
    return this.renderPost();
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
