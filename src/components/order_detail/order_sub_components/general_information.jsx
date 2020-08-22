import React from 'react';
import moment from 'moment';
import TimeElapsed from ".//time_elapsed";

import '../../../assets/stylesheets/buttons.css';
import '../../../assets/stylesheets/order-details.css';

const GeneralInformation = ({
  helper,
  cost,
  instructions,
  createdAt,
  time_completed,
  time_accepted,
  order_completed,
  user_handle,
  acceptNotification,
  completeOrder
}) => {

  let orderCompleted = (time_completed) ? (<><h3>Completed:</h3><p className="green-text">{ moment(time_completed).format('MMMM Do YYYY, h:mma') }</p></>): (<></>);
  let orderAccepted = (time_accepted) ? (<><h3>Accepted:</h3><p className="green-text">{ moment(time_accepted).format('MMMM Do YYYY, h:mma') }</p></>): (<></>);
  let orderCreated = (createdAt) ? (<><h3>Placed:</h3><p>{ moment(createdAt).format('MMMM Do YYYY, h:mma') }</p></>): (<></>);

  let acceptButton = (helper) ? (<></>): (<button className="button-large-primary" onClick={acceptNotification}>Accept This Order</button>);

  let completeButton;

  if(helper && !order_completed){
    completeButton = (<button className="button-large-primary" onClick={completeOrder}>Order Completed</button>);
  } else if (!helper){
    completeButton = "";
  } else if (helper && order_completed){
    completeButton = (<h3 className="green-text">Completed</h3>);
  }

  return (
    <div className="general-information">
      <h1>General Information</h1>

      {acceptButton}
      {completeButton}
      <TimeElapsed time_accepted={time_accepted} time_completed={time_completed}/>

      {orderCompleted}
      {orderAccepted}
      {orderCreated}

      {(user_handle) ? (<h3>Contact: {user_handle}</h3>):(<></>)}

      <h3>Pay:</h3>
      <p>${(cost * .75).toFixed(2)}</p>

      <h3>Instructions:</h3>
      <p>{instructions}</p>

    </div>
  )
}

export default GeneralInformation;
