// src/components/tweets/tweets_container.js

import { connect } from 'react-redux';
import { fetchHelperOrdersCompleted } from '../../actions/order_actions';

import OrderIndex from './order_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    customerOrders: state.orders.customer,
    indexType: "Completed"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (id) => dispatch(fetchHelperOrdersCompleted(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderIndex);
