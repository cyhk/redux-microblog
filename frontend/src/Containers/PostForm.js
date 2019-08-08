import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { addPost, editPost } from "../actionCreators";
import "./PostForm.css";

/**
 * PostForm: A generic form for adding and editing
 */
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.disable = this.disable.bind(this);
  }

  // update post with initial values
  // in form if postId is found
  componentDidMount() {
    if (this.props.postId) {
      const { title, description, body } = this.props.post;
      this.setState({
        title,
        description,
        body
      })
    }
  }
  
  // update state
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  // add or update post in redux store
  handleSubmit(evt) {
    evt.preventDefault();
    const { postId } = this.props;
    const { title, description, body } = this.state;
    let postDetails = {
      title,
      description,
      body
    };
    if (postId) {
      this.props.editPost(postId, postDetails);
    } else {
      this.props.addPost(postDetails);
    }
    this.props.history.push("/");
  }

  // redirect to home
  handleCancel(evt) {
    evt.preventDefault();
    this.props.history.push("/");
  }

  // bans submission when fields are not all filled
  disable() {
    const { title, description, body } = this.state;
    return !title || !description || !body;
  }

  render() {
    const { title, description, body } = this.state;

    return (
      <div>
        <Form className="post-form" onSubmit={this.handleSubmit}>
          <FormGroup className="post-form-group">
            <div className="post-form-label"><Label>Title</Label></div>
            <Input name="title" id="post-form-title" value={title} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="post-form-group">
            <div className="post-form-label"><Label>Description</Label></div>
            <Input name="description" id="post-form-description" value={description} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="post-form-group">
            <div className="post-form-label"><Label >Body</Label></div>
              <Input type="textarea" rows={15} name="body" id="post-form-body" value={body} onChange={this.handleChange} />
          </FormGroup>
          <Button className="post-form-button" disabled={this.disable()}>Save</Button>
          <Button className="post-form-button" onClick={this.handleCancel}>Cancel</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addPost,
  editPost
}

export default connect(null, mapDispatchToProps)(PostForm);
