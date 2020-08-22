import { getSingleOrdersReview, getHelperReviews } from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_HELPER_REVIEWS = "RECEIVE_HELPER_REVIEWS";


export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveHelperReviews = reviews => ({
  type: RECEIVE_HELPER_REVIEWS,
  reviews
});


export const fetchSingleOrdersReview = (id) => dispatch => (

  getSingleOrdersReview(id)
    .then(review => dispatch(receiveReview(review)))
    .catch(err => console.log(err))
);


export const fetchHelperReviews = (id) => dispatch => (

  getHelperReviews(id)
    .then(reviews => dispatch(receiveHelperReviews(reviews)))
    .catch(err => console.log(err))
);
