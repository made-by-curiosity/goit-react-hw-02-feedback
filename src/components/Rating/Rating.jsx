import { FeedbackItem, RatingList } from './Rating.styled';
import PropTypes from 'prop-types';

export const Rating = ({
  ratingList,
  currentRating,
  total,
  positivePercentage,
}) => {
  return (
    <RatingList>
      {ratingList.map(ratingName => {
        return (
          <FeedbackItem key={ratingName}>
            <span>{ratingName}: </span>
            <span>{currentRating[ratingName]}</span>
          </FeedbackItem>
        );
      })}
      <FeedbackItem>
        <span>Total: </span> {total}
      </FeedbackItem>
      <FeedbackItem>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </FeedbackItem>
    </RatingList>
  );
};

Rating.propTypes = {
  ratingList: PropTypes.arrayOf(PropTypes.string),
  currentRating: PropTypes.shape({
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
