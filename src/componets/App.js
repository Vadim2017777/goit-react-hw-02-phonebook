import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { contacts } = this.state;
    const { name } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm value={name} onIput={this.handleInputContacts} /> */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={name} onChange={this.handleInputContacts} />
          <button type="submit">Добавить телефон</button>
        </form>
        <h2>Contacts</h2>
        {/* <Filter ... />
      <ContactList ... /> */}
      </div>
    );
  }
}

export default App;
