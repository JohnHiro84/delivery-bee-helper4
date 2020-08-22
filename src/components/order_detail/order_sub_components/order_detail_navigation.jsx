import React from 'react';
// import moment from 'moment';

const OrderDetailNavigation = ({tab, updateTab}) => {

  return (
    <>
    <ul className="order-details-nav">
      <li
        className={(tab === "general_information") ? "active-tab" : "inactive-tab"}
        onClick={() => updateTab("general_information")}
      >Information</li>
      <li
        className={(tab === "location_information") ? "active-tab" : "inactive-tab"}
        onClick={() => updateTab("location_information")}
        >Location</li>
      <li
        className={(tab === "chat_information") ? "active-tab" : "inactive-tab"}
        onClick={() => updateTab("chat_information")}
        >Chat</li>
    </ul>

    </>
  )
}

export default OrderDetailNavigation;
