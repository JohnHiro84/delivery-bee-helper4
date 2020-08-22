// src/util/tweet_api_util.js

import axios from 'axios';


export const getSingleOrder = id => {
  return axios.get(`https://immense-ridge-65848.herokuapp.com/api/orders/${id}`)
};

// export const getAllOrders = () => {
//   return axios.get('/api/orders')
// };


///for the helper finding and getting orders
export const getAvailableOrders = () => {
  return axios.get('https://immense-ridge-65848.herokuapp.com/api/orders/helper/available')
};

export const getHelperOrders = id => {
  return axios.get(`https://immense-ridge-65848.herokuapp.com/api/orders/helper/${id}`)
};

export const getHelperOrdersCompleted = id => {
  return axios.get(`https://immense-ridge-65848.herokuapp.com/api/orders/helper/completed/${id}`)
};

export const getHelperOrdersAccepted = id => {
  return axios.get(`https://immense-ridge-65848.herokuapp.com/api/orders/helper/accepted/${id}`)
};


///////when a helper accepts an order
export const updateOrderHelper = (id, helper, handle) => {

  return axios.put(`https://immense-ridge-65848.herokuapp.com/api/orders/${id}`,
    {
      helper: helper,
      time_accepted: Date.now(),
      helper_handle: handle
    }
  )
  // .then(response => {
  //   console.log(response);
  // })
  .catch(error => {
    console.log(error);
  });
}

//when a helper completes an order
export const updateOrderCompletedUtil = (id) => {

  return axios.put(`https://immense-ridge-65848.herokuapp.com/api/orders/completed/${id}`,
    {
      order_completed: true,
      time_completed: Date.now()
    }
  )
  // .then(response => {
  //   console.log(response);
  // })
  .catch(error => {
    console.log(error);
  });
}


///////////////////////////////////comments

export const getOrderComments = id => {
  return axios.get(`https://immense-ridge-65848.herokuapp.com/api/orders/${id}/comments`)
};

export const writeComment = data => {
  return axios.post('https://immense-ridge-65848.herokuapp.com/api/comments/', data)
}


///////////////////customer

//
// export const getCustomerOrders = id => {
//   return axios.get(`/api/orders/customer/${id}`)
// };
//
// export const writeOrder = data => {
//   return axios.post('/api/orders/', data)
// }
