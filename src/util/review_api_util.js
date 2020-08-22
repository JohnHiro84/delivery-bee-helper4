import axios from 'axios';

export const getStuff = () => {
  return axios.get('https://immense-ridge-65848.herokuapp.com/api/reviews/')
};

export const getSingleOrdersReview = id => {
  return axios.get(`https://immense-ridge-65848.herokuapp.com/api/orders/${id}/reviews`)
};

export const getHelperReviews = id => {
  return axios.get(`https://immense-ridge-65848.herokuapp.com/api/reviews/helper/${id}`)
};
