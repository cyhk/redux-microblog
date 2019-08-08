import React, { Component } from 'react';
import PostForm from "./PostForm";
import { connect } from "react-redux";
import CommentList from "./CommentList";
import { deletePost } from "../actionCreators";
import NotFound from "./NotFound";

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


  // delete from redux store
  handleDelete(evt) {
    let id = this.props.match.params.postid;
    this.props.deletePost(id);
    this.props.history.push("/");
  }

  // set edit flag to true to render
  // form component
  showEditForm() {
    this.setState({
      edit: true
    });
  }

  // renders post when not in edit mode
  renderPost() {
    let id = this.props.match.params.postid;
    let post = this.props.post;

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

  // renders edit form when in edit mode
  renderForm() {
    let id = this.props.match.params.postid;
    let post = this.props.post;
    
    return <PostForm history={this.props.history} post={post} postId={id}/>;
  }

  render() {
    let post = this.props.post;
    if (!post) {
      return <NotFound />
    }
    return this.state.edit ? this.renderForm() : this.renderPost()
  }
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.postid;
  return {
    post: state.posts.byId[id]
  }
}

const mapDispatchToProps = {
  deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
