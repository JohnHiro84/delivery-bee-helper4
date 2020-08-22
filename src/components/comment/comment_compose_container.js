import { connect } from 'react-redux';
import { composeComment } from '../../actions/order_actions';
import CommentCompose from './comment_compose';

const mapStateToProps = (state, events) => {

  return {
    currentUser: state.session.user,
    newComment: state.comments.new,
    order_id: state.orders.single._id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeComment: data => dispatch(composeComment(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentCompose);
