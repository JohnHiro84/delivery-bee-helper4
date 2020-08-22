import React from 'react';
import '../../assets/stylesheets/reviews.css';

const DisplayReviewStars = ({starCount}) => {

  return (
    <div>
      <span id="star-display-review-1" className={(starCount >= 1)?"fa fa-star fa-2x star-checked": "fa fa-star fa-2x"}></span>
      <span id="star-display-review-2" className={(starCount >= 2)?"fa fa-star fa-2x star-checked": "fa fa-star fa-2x"}></span>
      <span id="star-display-review-3" className={(starCount >= 3)?"fa fa-star fa-2x star-checked": "fa fa-star fa-2x"}></span>
      <span id="star-display-review-4" className={(starCount >= 4)?"fa fa-star fa-2x star-checked": "fa fa-star fa-2x"}></span>
      <span id="star-display-review-5" className={(starCount >= 5)?"fa fa-star fa-2x star-checked": "fa fa-star fa-2x"}></span>
    </div>
  )
}

export default DisplayReviewStars;
