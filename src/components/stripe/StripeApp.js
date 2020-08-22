import React, {useState, useEffect} from 'react';
// import './App.css';

import StripeCheckout from "react-stripe-checkout";


function StripeApp(props) {

  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook"
  })


  useEffect(()=> {
    console.log("useEffect");
    console.log(props);
    let productAndInstructions = props.purchase;
    productAndInstructions.instructions = props.instructions;
    setProduct(productAndInstructions);
  })


  const makePayment = token => {
    console.log(token);
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {

      console.log("RESPONSE", response)
      const {status} = response;
      console.log("STATUS", status)
    })
    .catch(error => console.log(error));
  }

  console.log(process.env.REACT_APP_KEY);

  console.log(product);

  return (
    <div className="App">
    <p>Current Product is: {product.from_place_name} to {product.to_place_name } for ${product.cost_calculated}</p>

    <StripeCheckout
      stripeKey={process.env.REACT_APP_KEY}
      token={makePayment}
      name="Buy React"
      amount={product.price * 100}
      shippingAddress
      billingAddress
    >
    <button className="btn-large pink">Delievery for ${product.cost_calculated}</button>
    </StripeCheckout>
    </div>
  );
}

export default StripeApp;
