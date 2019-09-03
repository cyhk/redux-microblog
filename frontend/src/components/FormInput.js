import React, { Component } from 'react';
import { FormGroup, Label, Input } from "reactstrap";

/**
 * FormInput: Generic input box
 */
class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // update post with initial values
  // in form if postId is found
  componentDidUpdate() {
    const { value } = this.props;
    this.setState({
      value: value === undefined ? '' : value
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value || this.props.value !== nextProps.value;
  }

  // update state
  handleChange(evt) {
    this.setState({
      value: evt.target.value
    })
    this.props.handleChange(evt);
  }

  render() {
    const { name, type, rows } = this.props;
    return (
      <div>
        <FormGroup className="post-form-group">
          <div className="post-form-label"><Label>{name[0].toUpperCase() + name.slice(1)}</Label></div>
          <Input name={name} type={type} rows={rows} id={`post-form-${name}`} value={this.state.value} onChange={this.handleChange} />
        </FormGroup>
      </div>
    )
  }
}

export default FormInput;