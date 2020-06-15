import React from 'react';
import PropTypes from 'prop-types';

import './ContactListItem.module.css';

const TaskListItem = ({ name, number, onRemove }) => (
  <li>
    <p>
      {name}:{number}
    </p>

    <button type="button" onClick={onRemove}>
      Delete
    </button>
  </li>
);

export default TaskListItem;

TaskListItem.defaultProps = {
  contacts: [],
};

TaskListItem.propTypes = {
  onRemove: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
