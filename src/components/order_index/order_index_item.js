import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/order-index-item.css';
import moment from 'moment';

import TimeElapsed from "../order_detail/order_sub_components/time_elapsed";


class OrderIndexItem extends React.Component {

  render() {

    const {
      _id,
      createdAt,
      distance,
      pick_up_address,
      drop_off_address,
      time_accepted,
      time_completed
    } = this.props.order;

    return (
        <div className="order-index-item">

          <Link to={`/api/orders/${_id}`}>

            <h3 className="order-date">Posted: { moment(createdAt).format('MMMM Do YYYY, h:mm:ss a') }</h3>

            <h3>From: {pick_up_address}</h3>
            <h3>To: {drop_off_address}</h3>
            <h3>{distance} Miles</h3>
            {(time_accepted)? (<h3>Time Accepted:{ moment(time_accepted).format('MMMM Do YYYY, h:mma') }</h3>): (<></>) }
            {(time_completed)? (<h3>Time Completed:{ moment(time_completed).format('MMMM Do YYYY, h:mma') }</h3>): (<></>) }

            <TimeElapsed time_accepted={time_accepted} time_completed={time_completed} />

          </Link>
        </div>
    );
  }
}

export default OrderIndexItem;
