

export const RECEIVE_NEW_TOAST = "RECEIVE_NEW_TOAST";


export const receiveNewToast = newToast => ({
  type: RECEIVE_NEW_TOAST,
  newToast
})

export const updateStateNewToast = data => dispatch => (
  dispatch(receiveNewToast(data))
);
