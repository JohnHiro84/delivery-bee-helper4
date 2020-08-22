import { connect } from 'react-redux';
import CommentList from './comment_list';

import { commentsByOrderId } from '../../reducers/selectors';

import { fetchOrderComments } from '../../actions/order_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    handle: state.session.user.handle,
    comments: commentsByOrderId(state)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchOrderComments: id => dispatch(fetchOrderComments(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
