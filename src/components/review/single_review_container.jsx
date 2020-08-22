
import { connect } from 'react-redux';
import SingleReview from './single_review';

import { fetchSingleOrdersReview } from '../../actions/review_actions';

// import { commentsByOrderId } from '../../reducers/selectors';
// import { fetchOrderComments } from '../../actions/order_actions';


const mapStateToProps = (state) => {

  return {
    order_id: state.orders.single._id,
    currentUser: state.session.user,
    handle: state.session.user.handle,
    single_review: state.reviews.single

  }
};

const mapDispatchToProps = dispatch => ({
  fetchSingleOrdersReview: id => dispatch(fetchSingleOrdersReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleReview);
