import React from 'react';
import moment from 'moment';

import DisplayReviewStars from "./display_review_stars";
import '../../assets/stylesheets/reviews.css';

const ReviewIndexItem = ({review}) => {

  const {user_handle, message, stars, createdAt} = review;

    return (
      <ul className="displayed-review">
        <li><DisplayReviewStars starCount={Number(stars)} /></li>
        <li className="review-message">{message}</li>
        <li className="review-date">{ moment(createdAt).format('MMMM Do YYYY') }</li>
        <li>{user_handle}</li>
      </ul>
    )
}


export default ReviewIndexItem;
