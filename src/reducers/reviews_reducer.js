
import {
  RECEIVE_REVIEW,
  RECEIVE_HELPER_REVIEWS
} from '../actions/review_actions';

  const ReviewsReducer = (state = { helper: {}, single: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {

      case RECEIVE_REVIEW:
        newState.single = action.review.data;
        return newState;

      case RECEIVE_HELPER_REVIEWS:
        newState.helper = action.reviews.data;
        return newState;

      default:
        return state;
    }
  };

  export default ReviewsReducer;
