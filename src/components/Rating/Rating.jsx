import { FeedbackItem, RatingList } from './Rating.styled';

export const Rating = ({
  ratingList,
  currentRaring,
  total,
  positivePercentage,
}) => {
  return (
    <RatingList>
      {ratingList.map(ratingName => {
        return (
          <FeedbackItem key={ratingName}>
            <span>{ratingName}: </span>
            <span>{currentRaring[ratingName]}</span>
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
