import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // probably connect to redux??
    this.props.history.push("/");
  }

  handleCancel(evt) {
    evt.preventDefault();
    this.props.history.push("/");
  }

  render() {
    const { title, description, body } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <div><Label>Title</Label></div>
            <Input name="title" id="post-form-title" value={title} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <div><Label>Description</Label></div>
            <Input name="description" id="post-form-description" value={description} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <div><Label>Body</Label></div>
            <Input type="textarea" name="body" id="post-form-body" value={body} onChange={this.handleChange}/>
          </FormGroup>
          <Button>Save</Button>
          <Button onClick={this.handleCancel}>Cancel</Button>
        </Form>
      </div>
    )
  }
}

export default PostForm;
