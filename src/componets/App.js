import React, { Component } from 'react';

import FeedbackOptions from './FeedBackControls/FeedbackOptions';

class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      </>
    );
  }
}

export default App;
