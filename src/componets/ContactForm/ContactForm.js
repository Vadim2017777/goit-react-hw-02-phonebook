import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { INITIAL_STATE_FORM } from '../helpers/constants';

import './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    ...INITIAL_STATE_FORM,
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { onAddContacts } = this.props;
    e.preventDefault();
    onAddContacts({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE_FORM });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            value={number}
            name="number"
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onRemove: PropTypes.func,
};
