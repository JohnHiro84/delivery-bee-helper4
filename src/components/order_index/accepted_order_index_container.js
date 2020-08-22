
import { connect } from 'react-redux';
import { fetchHelperOrdersAccepted } from '../../actions/order_actions';

import OrderIndex from './order_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    customerOrders: state.orders.customer,
    indexType: "Accepted"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (id) => dispatch(fetchHelperOrdersAccepted(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderIndex);
