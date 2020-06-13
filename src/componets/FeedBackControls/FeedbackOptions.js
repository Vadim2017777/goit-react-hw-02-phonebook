import React from 'react';
import PropTypes from 'prop-types';

import './FeedBackOptions.module.css';

const FeedBackControls = ({ options, onLeaveFeedback }) => (
  <>
    <button type="button" onClick={() => onLeaveFeedback(options.good)}>
      Good
    </button>
    <button type="button" onClick={() => onLeaveFeedback(options.neutral)}>
      Neutral
    </button>
    <button type="button" onClick={() => onLeaveFeedback(options.bad)}>
      Bad
    </button>
  </>
);

FeedBackControls.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackControls;
