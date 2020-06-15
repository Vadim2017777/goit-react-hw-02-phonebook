import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => (
  <input type="text" value={filter} onChange={onChange} />
);

export default Filter;

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
