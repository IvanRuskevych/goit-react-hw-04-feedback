import React, { Component } from 'react';

import Section from './Section/Section ';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const INITIAL_VALUE = Object.freeze({
  good: 0,
  neutral: 0,
  bad: 0,
});

class App extends Component {
  state = INITIAL_VALUE;

  onLeaveFeedback = stateProperty => {
    this.setState(prevState => ({
      [stateProperty]: prevState[stateProperty] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { bad, neutral, good } = this.state;

    return bad + neutral + good;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { bad, neutral, good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section titleText="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section titleText="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
