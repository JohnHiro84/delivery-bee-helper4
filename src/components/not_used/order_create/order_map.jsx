import React, {Component} from 'react';

import {orderFormatter} from "../maps/coordinate_mid_point_helper";
import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/new-styles.css';

import OrderDetailMap from "../order_detail/order_detail_map";
import OrderCheckout from "./order_checkout_container";

import OrderInformation from "../order_detail/order_information";

class OrderMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      order: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }



  componentDidMount(){

    // if(!this.state.order){
    //   this.props.history.push(`/orderfrom`);
    // }

    let formattedOrder = orderFormatter(this.props.newOrder);

    this.setState({ order: formattedOrder });

  }


  handleSubmit(e) {
    e.preventDefault();
  }

  goBack(){
    this.props.history.push("/orderinstructions");
  }

  render() {

    // if(!this.state.order){
    //   this.props.history.push(`/orderfrom`);
    //   return (<></>);
    // }


    const {
      pick_up_address,
      drop_off_address,
      distance,
      instructions,
      cost
    } = this.props.newOrder;

    console.log(this.state.order)

    return (
      <>

      {(this.props.newOrder) ? (<OrderDetailMap order={this.props.newOrder} />) : (<></>)}

      <div className="confirm-details">
        <h1>Confirm Details</h1>

        <OrderInformation
          distance={distance}
          cost={cost}
          instructions={instructions}
          pick_up_address={pick_up_address}
          drop_off_address={drop_off_address}
          />

        <OrderCheckout />

        <button
          id="session-submita"
          className="button-large-secondary"
          onClick={this.goBack}
        >Go Back
        </button>
      </div>
      </>
    )
  }
}


export default withRouter(OrderMap);
