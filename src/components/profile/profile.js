import React from 'react';
import './App.css';
import ReviewIndexItem from "../review/review_index_item";
import '../../assets/stylesheets/review-list.css';

import ProfileStatsContainer from "./profile_stats_container";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
        }
        this.renderReviews = this.renderReviews.bind(this);
    }

    componentDidMount() {
        const {currentUser, fetchHelperReviews} = this.props;

        fetchHelperReviews(currentUser.id)
        .then(res => this.setState({reviews: res.reviews.data}));
    }

    // componentWillReceiveProps(newState) {
    //     this.setState({ reviews: newState.reviews });
    // }

    renderReviews(){

      const { reviews } = this.state;

      // console.log(reviews);
      if(reviews.length === 0){

        return (<h3>No reviews yet</h3>);
      }

      let reviewItems = reviews.map(review => (
        <ReviewIndexItem key={review._id} review={review} />
      ))
      return reviewItems;
    }




    render() {
          return (
            <div className="profile-container">
              <h1>Your Profile</h1>
              <ProfileStatsContainer />

              <div className="review-list">
                <h2>Reviews</h2>
                  {this.renderReviews()}
              </div>
            </div>
          );
      }
}

export default Profile;
