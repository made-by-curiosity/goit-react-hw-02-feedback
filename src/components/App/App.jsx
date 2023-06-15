import React, { Component } from 'react';
import { FeedbackBtnList } from 'components/FeedbackBtnList/FeedbackBtnList';
import { Container } from './App.styled';
import { Rating } from 'components/Rating/Rating';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

const ratingList = ['Good', 'Neutral', 'Bad'];

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleClick = ratingName => {
    this.setState(prevState => {
      return {
        [ratingName]: prevState[ratingName] + 1,
      };
    });
  };

  countTotalRating = () => {
    const currentRating = this.state;

    let total = 0;

    for (const rating in currentRating) {
      total += currentRating[rating];
    }

    return total;
  };

  countPositiveFeedback = () => {
    const currentRating = this.state;

    const total = this.countTotalRating();
    const goodRating = currentRating['Good'];

    if (total === 0) {
      return 0;
    }

    const goodPercentage = (goodRating / total) * 100;

    return goodPercentage.toFixed();
  };

  render() {
    const total = this.countTotalRating();
    const goodRating = this.countPositiveFeedback();

    return (
      <Container>
        <Section titleText="Please leave feedback">
          <FeedbackBtnList
            ratingList={ratingList}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section titleText="Statistics">
          {total < 1 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Rating
              ratingList={ratingList}
              currentRating={this.state}
              total={total}
              positivePercentage={goodRating}
            />
          )}
        </Section>
      </Container>
    );
  }
}
