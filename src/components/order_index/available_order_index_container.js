// src/components/tweets/tweets_container.js

import { connect } from 'react-redux';
import { fetchAvailableOrders } from '../../actions/order_actions';

import OrderIndex from './order_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    customerOrders: state.orders.customer,
    indexType: "Available"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchAvailableOrders())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderIndex);
