import { connect } from 'react-redux';

import OrderDetail from './order_detail';
import {
  fetchSingleOrder,
  fetchHelperOrdersAccepted,
  fetchHelperOrdersCompleted,
  updateOrder,
  updateOrderCompleted
} from '../../actions/order_actions';

import {updateStateNewToast} from "../../actions/toast_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    singleOrder: state.orders.single
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleOrder: id => dispatch(fetchSingleOrder(id)),
  fetchHelperOrdersAccepted: (id) => dispatch(fetchHelperOrdersAccepted(id)),
  updateOrder: (id, helper, handle) => dispatch(updateOrder(id, helper, handle)),
  updateOrderCompleted: (id) => dispatch(updateOrderCompleted(id)),
  fetchOrdersCompleted: (id) => dispatch(fetchHelperOrdersCompleted(id)),
  updateStateNewToast: data => dispatch(updateStateNewToast(data))

});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
