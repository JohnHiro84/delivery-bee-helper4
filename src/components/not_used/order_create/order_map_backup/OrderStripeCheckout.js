// import React, {useState, useEffect} from 'react';
// // import './App.css';
//
// import StripeCheckout from "react-stripe-checkout";
//
//
// function OrderStripeCheckout(props) {
//
//   const [order, setOrder] = useState({
//     name: "React from FB",
//     price: 10,
//     productBy: "facebook"
//   })
//
//
//   useEffect(()=> {
//     console.log("useEffect");
//     console.log(props);
//     let order = props.order;
//     // productAndInstructions.instructions = props.instructions;
//     setOrder(order);
//   })
// //
//
//   const makePayment = token => {
//     console.log(token);
//     const body = {
//       token,
//       order
//     }
//     const headers = {
//       "Content-Type": "application/json"
//     }
//
//     return fetch(`http://localhost:5000/payment`, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body)
//     }).then(response => {
//
//       console.log("RESPONSE", response)
//       const {status} = response;
//       console.log("STATUS", status)
//     })
//     .catch(error => console.log(error));
//   }
//
//   console.log(process.env.REACT_APP_KEY);
//   console.log(order);
//
//   return (
//     <div className="App">
//
//     <StripeCheckout
//       stripeKey={process.env.REACT_APP_KEY}
//       token={makePayment}
//       name="Buy React"
//       amount={1000* 100}
//       shippingAddress
//       billingAddress
//     >
//     <button className="btn-large pink">Delievery for $</button>
//     </StripeCheckout>
//     </div>
//   );
// }
//
// export default OrderStripeCheckout;
