// src/components/tweets/tweet_compose_container.js

import { connect } from 'react-redux';
import {updateStateNewOrder} from "../../actions/order_actions";
import OrderCheckout from './order_checkout';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newEvent: state.events.new,
    order: state.orders.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStateNewOrder: data => dispatch(updateStateNewOrder(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderCheckout);
