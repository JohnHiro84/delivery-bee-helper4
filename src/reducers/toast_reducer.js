// src/reducers/tweets_reducer.js

import { RECEIVE_NEW_TOAST } from '../actions/toast_actions';

  const ToastReducer = (state = { new: {} }, action) => {

    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {

      case RECEIVE_NEW_TOAST:
      
        newState.new = action.newToast.toast
        return newState;
      default:
        return state;
    }
  };

  export default ToastReducer;
