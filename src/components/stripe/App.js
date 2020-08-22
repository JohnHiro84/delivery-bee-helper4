import React, {useState} from 'react';
// import './App.css';

import StripeCheckout from "react-stripe-checkout";


function App() {

  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook"
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

  function setGoogleProduct(){
    setProduct({
      name: "Angular from Google",
      price: 15,
      productBy: "google"
    })

  }

  function setFacebookProduct(){
    setProduct({
      name: "React from FB",
      price: 10,
      productBy: "facebook"
    })
  }

  function setVueProduct(){
    setProduct({
      name: "Vue",
      price: 18,
      productBy: "Vue.js"
    })

  }

  console.log(product);


  return (
    <div className="App">
    <p>Current Product is: {product.name} for ${product.price} by {product.productBy}</p>
    <button onClick={()=> setGoogleProduct()}>Set Google Product</button>
    <button onClick={()=> setFacebookProduct()}>Set Facebook Product</button>
    <button onClick={()=> setVueProduct()}>Set Vue Product</button>

    <StripeCheckout
      stripeKey={process.env.REACT_APP_KEY}
      token={makePayment}
      name="Buy React"
      amount={product.price * 100}
      shippingAddress
      billingAddress
    >
    <button className="btn-large pink">Buy {product.name} for ${product.price}</button>
    </StripeCheckout>
    </div>
  );
}

export default App;
