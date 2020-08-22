
import { connect } from 'react-redux';
import { fetchHelperReviews } from '../../actions/review_actions';

import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHelperReviews: id => dispatch(fetchHelperReviews(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
