import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import DisplayReviewStars from "./display_review_stars";
import '../../assets/stylesheets/reviews.css';

class SingleReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleReview: ""
    }
  }

  componentDidMount(){
    this.props.fetchSingleOrdersReview(this.props.order_id)
    .then(res => this.setState({singleReview: res.review.data[0]}));
    // .then(res => console.log(res));
  }
  render() {

    const {singleReview} = this.state;

    if(singleReview){

      const {user_handle, message, stars, createdAt} = this.state.singleReview;

      return (

          <ul className="displayed-review">
            <li><h3>Review</h3></li>
            <li><DisplayReviewStars starCount={stars} /></li>
            <li className="review-message">{message}</li>
            <li className="review-date">{ moment(createdAt).format('MMMM Do YYYY') }</li>
            <li>{user_handle}</li>
          </ul>

      )
    } else {
      return (
        <div className="single-review-container">
        </div>
      );
    }
  }
}

export default withRouter(SingleReview);
// <ReviewComposeContainer />
