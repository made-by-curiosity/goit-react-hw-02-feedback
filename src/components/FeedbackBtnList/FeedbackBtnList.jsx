import { FeebackBtn, FeedbackList } from './FeedbackBtnList.styled';
import PropTypes from 'prop-types';

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

FeedbackBtnList.propTypes = {
  ratingList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
