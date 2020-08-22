// src/reducers/orders_reducer.js

import {
  RECEIVE_ORDER,
  // RECEIVE_CUSTOMER_ORDERS,
  RECEIVE_HELPER_ORDERS,
  RECEIVE_ORDERS,
  // RECEIVE_USER_ORDERS,
  RECEIVE_NEW_ORDER
} from '../actions/order_actions';

  const OrdersReducer = (state = {
    all: {},
    user: {},
    helper: {},
    single: {},
    new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_ORDERS:
        newState.all = action.orders.data;
        return newState;

      // case RECEIVE_CUSTOMER_ORDERS:
      //   newState.customer = action.orders.data;
      //   return newState;

      case RECEIVE_HELPER_ORDERS:
        newState.helper = action.orders.data;
        return newState;

      case RECEIVE_ORDER:
        newState.single = action.order.data;
        return newState;

      // case RECEIVE_USER_ORDERS:
      //   newState.user = action.orders.data;
      //   return newState;

      case RECEIVE_NEW_ORDER:
        console.log(action);
        newState.new = action.neworder
        return newState;

        // newState.new = action.neworder.data
        // return newState;
      default:
        return state;
    }
  };

  export default OrdersReducer;
