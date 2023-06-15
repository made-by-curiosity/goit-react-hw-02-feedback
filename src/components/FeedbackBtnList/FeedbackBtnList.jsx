import { FeebackBtn, FeedbackList } from './FeedbackBtnList.styled';

export const FeedbackBtnList = ({ ratingList, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {ratingList.map(rating => {
        return (
          <li key={rating}>
            <FeebackBtn type="button" onClick={() => onLeaveFeedback(rating)}>
              {rating}
            </FeebackBtn>
          </li>
        );
      })}
    </FeedbackList>
  );
};
