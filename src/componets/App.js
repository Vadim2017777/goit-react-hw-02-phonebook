import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactListForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { INITIAL_STATE_APP } from '../componets/helpers/constants';

class App extends Component {
  state = {
    ...INITIAL_STATE_APP,
  };

  addContacts = ({ name, number }) => {
    const contacts = {
      id: uuidv4(),
      name,
      number,
    };
    const overlap = this.state.contacts.some(
      contacts => contacts.name === name,
    );

    if (!overlap) {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contacts],
        };
      });
    } else alert(`${name} is already in contacts`);
  };

  removeContacts = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  changeFilter = ({ target }) => {
    const filter = target.value;
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactListForm onAddContacts={this.addContacts} />
        <h2>Contacts</h2>

        {this.state.contacts.length > 1 && (
          <>
            <h3>Find my contacts</h3>
            <Filter value={filter} onChange={this.changeFilter} />
          </>
        )}

        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemove={this.removeContacts}
          />
        )}
      </div>
    );
  }
}

export default App;
