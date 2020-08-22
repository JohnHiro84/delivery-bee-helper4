
import { connect } from 'react-redux';

import ToastNotification from './toast_notification';
import {updateStateNewToast} from "../../actions/toast_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    toast: state.toast
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStateNewToast: data => dispatch(updateStateNewToast(data))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastNotification);
