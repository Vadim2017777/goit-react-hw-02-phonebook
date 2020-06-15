import React from 'react';
import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onRemove }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onRemove={() => onRemove(id)}
      />
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  onRemove: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.node,
    }),
  ).isRequired,
};
