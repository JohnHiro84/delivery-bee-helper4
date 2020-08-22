
import { connect } from 'react-redux';
import { fetchHelperOrders } from '../../actions/order_actions';

import ProfileStats from './profile_stats';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHelperOrders: id => dispatch(fetchHelperOrders(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStats);
