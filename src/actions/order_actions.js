import {
  getAvailableOrders,
  getHelperOrders,
  getHelperOrdersAccepted,
  getHelperOrdersCompleted,
  getSingleOrder,
  updateOrderHelper,
  updateOrderCompletedUtil,
  getOrderComments,
  writeComment
  // getAllOrders,
  // getCustomerOrders,
} from '../util/order_api_util';


export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";

// export const RECEIVE_USER_ORDERS = "RECEIVE_USER_ORDERS";
export const RECEIVE_NEW_ORDER = "RECEIVE_NEW_ORDER";
export const RECEIVE_HELPER_ORDERS = "RECEIVE_HELPER_ORDERS";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";

// export const RECEIVE_CUSTOMER_ORDERS = "RECEIVE_CUSTOMER_ORDERS";

export const receiveNewOrder = neworder => ({
  type: RECEIVE_NEW_ORDER,
  neworder
})

export const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
});

// export const receiveCustomerOrders = orders => ({
//   type: RECEIVE_CUSTOMER_ORDERS,
//   orders
// });

export const receiveHelperOrders = orders => ({
  type: RECEIVE_HELPER_ORDERS,
  orders
});

export const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});


export const fetchSingleOrder = (id) => dispatch => (
  getSingleOrder(id)
    .then(order => dispatch(receiveOrder(order)))
    .catch(err => console.log(err))
);


export const fetchHelperOrders = (id) => dispatch => (

  getHelperOrders(id)
    .then(orders => dispatch(receiveHelperOrders(orders)))
    .catch(err => console.log(err))
);

export const fetchHelperOrdersAccepted = (id) => dispatch => (

  getHelperOrdersAccepted(id)
    .then(orders => dispatch(receiveHelperOrders(orders)))
    .catch(err => console.log(err))
);

export const fetchHelperOrdersCompleted = (id) => dispatch => (

  getHelperOrdersCompleted(id)
    .then(orders => dispatch(receiveHelperOrders(orders)))
    .catch(err => console.log(err))
);

export const fetchAvailableOrders = () => dispatch => (
  getAvailableOrders()
    .then(orders => dispatch(receiveOrders(orders)))
    .catch(err => console.log(err))
);


//used when a helper accepts an order
export const updateOrder = (id, helper, handle) => dispatch => (
  updateOrderHelper(id, helper, handle)
  // .then(recipe => dispatch(receiveSingleRecipe(recipe)))
);

//used when a helper completes an order
export const updateOrderCompleted = (id) => dispatch => (
  updateOrderCompletedUtil(id)
  // .then(order => dispatch(receiveOrder(order)))
);



////////////////////////////////////////////////////comments



export const receiveComments = comments => ({
type: RECEIVE_COMMENTS,
comments
});


export const receiveNewComment = comment => ({
type: RECEIVE_NEW_COMMENT,
comment
})


export const fetchOrderComments = (id) => dispatch => (
getOrderComments(id)
  .then(comments => dispatch(receiveComments(comments)))
  .catch(err => console.log(err))
);


export const composeComment = data => dispatch => (
writeComment(data)
  .then(comment => dispatch(receiveNewComment(comment)))
  .catch(err => console.log(err))
);


// export const fetchAllOrders = () => dispatch => (
//   getAllOrders()
//     .then(orders => dispatch(receiveOrders(orders)))
//     .catch(err => console.log(err))
// );


// export const receiveUserOrders = orders => ({
//   type: RECEIVE_USER_ORDERS,
//   orders
// });

// export const fetchCustomerOrders = (id) => dispatch => (
//
//   getCustomerOrders(id)
//     .then(orders => dispatch(receiveCustomerOrders(orders)))
//     .catch(err => console.log(err))
// );



// export const fetchCustomerOrders = id => dispatch => (
//   getCustomerOrders(id)
//     .then(orders => dispatch(receiveUserOrders(orders)))
//     .catch(err => console.log(err))
// );
//
// export const composeOrder = data => dispatch => (
//   writeOrder(data)
//     .then(neworder => dispatch(receiveNewOrder(neworder)))
//     .catch(err => console.log(err))
// );
//
