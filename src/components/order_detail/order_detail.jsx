import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/order-details.css';

import ModalMessage from "./order_sub_components/modal_message";

import OrderDetailMap from "./order_detail_map";

import OrderDetailNavigation from "./order_sub_components/order_detail_navigation";

import GeneralInformation from "./order_sub_components/general_information";

import LocationInformation from "./order_sub_components/location_information";
import TravelTime from "./order_sub_components/travel_time";
import MapLink from "./order_sub_components/map_link";

import CommentListContainer from '../comment/comment_list_container';
import CommentComposeContainer from '../comment/comment_compose_container';


import SingleReviewContainer from '../review/single_review_container';


class OrderDetail extends Component {

  constructor(props){

    super(props);
    this.state = {
                order: {
                  _id: "",
                },
                tab: "general_information",
                comments: {}
              };
              this.acceptNotification = this.acceptNotification.bind(this);
              this.acceptOrder = this.acceptOrder.bind(this);
              this.completeOrder = this.completeOrder.bind(this);
  }

  componentDidMount() {

    this.props.fetchSingleOrder(this.props.match.params.orderId)
    .then(res =>  this.setState({'order': res.order.data}));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.orderId !== this.props.match.params.orderId) {
      this.props.fetchSingleOrder(this.props.match.params.orderId)
      .then(res => this.setState({ 'order': res.order.data }));
    }
  }


  acceptNotification(e){
    e.preventDefault();
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }



  acceptOrder(e){
    e.preventDefault();

    ////close modal window
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    //update the order in the database
    this.props.updateOrder(this.props.match.params.orderId, this.props.currentUser.id, this.props.currentUser.handle)
    .then(res => this.props.fetchHelperOrdersAccepted(this.props.currentUser.id))
    .then(res =>  this.props.updateStateNewToast({toast: "helper_accepted"}));

    //push to accepted orders
    setTimeout(() => {
      this.props.history.push('/accepted');
    }, 3500);
  }

  completeOrder(e){

    e.preventDefault();

    this.props.updateOrderCompleted(this.props.match.params.orderId)
    .then(res => this.props.updateStateNewToast({toast: "helper_completed"}));

    setTimeout(() => {
      this.props.history.push('/completed')
    }, 3500);
  }

  updateTab(value) {
    // console.log("updated tab with value");
    // console.log(value);
    this.setState({ tab: value });
  }

  render() {
    // console.log(this.state);

    const {
      _id,
      helper,
      helper_handle,
      distance,
      cost,
      instructions,
      pick_up_lat,
      pick_up_long,
      drop_off_lat,
      drop_off_long,
      pick_up_address,
      drop_off_address,
      createdAt,
      time_accepted,
      time_completed,
      order_completed,
      user_handle,
      final_confirmation
    } = this.state.order;

    const { tab } = this.state;

    // console.log(tab);

    //////////////////////////////////////////////////////////////////// new setup

  let orderDetailMap = (_id !== "") ? (<OrderDetailMap order={this.state.order} />) : (<></>);

  /////////////////////general information

  let generalInformation = (
    <GeneralInformation
      helper={helper}
      cost={cost}
      instructions={instructions}
      createdAt={createdAt}
      time_completed={time_completed}
      time_accepted={time_accepted}
      order_completed={order_completed}
      user_handle={user_handle}
      acceptNotification={this.acceptNotification}
      completeOrder={this.completeOrder}
    />
  );

  ///////////////////////////////////// location information

  let locationInformation = (
    <LocationInformation
      distance={distance}
      pick_up_address={pick_up_address}
      drop_off_address={drop_off_address}
    />
  )

  let travelTime = (
    <TravelTime
      pick_up_lat={pick_up_lat}
      pick_up_long={pick_up_long}
      drop_off_lat={drop_off_lat}
      drop_off_long={drop_off_long}
    />
  )

  let mapLink = (
    <MapLink
      pick_up_lat={pick_up_lat}
      pick_up_long={pick_up_long}
      drop_off_lat={drop_off_lat}
      drop_off_long={drop_off_long}
    />
  )

  ////////////////comments

  let commentsComposeActive = (helper_handle && !final_confirmation) ? (<CommentComposeContainer />):(<></>);

    if(_id){

          return (
            <section className="order-details">

              {orderDetailMap}

              <OrderDetailNavigation tab={tab} updateTab={this.updateTab.bind(this)}/>

              <ModalMessage acceptOrder={this.acceptOrder.bind(this)}/>


              {(tab === "general_information" && time_completed) ? (<SingleReviewContainer />) : (<></>)}
              {(tab === "general_information") ? generalInformation : (<></>)}

              {(tab === "location_information") ? locationInformation : (<></>)}
              {(tab === "location_information" && !order_completed) ? travelTime : (<></>)}
              {(tab === "location_information" && !order_completed) ? mapLink : (<></>)}

              {(tab === "chat_information" && helper_handle) ? (<CommentListContainer />) : (<></>)}
              {(tab === "chat_information" && helper_handle) ? commentsComposeActive : (<></>)}

              {(tab === "chat_information" && !helper_handle) ? (<div className="comments-container"><h3>Available after Accepting Order</h3></div>) : (<></>)}

            </section>
          );

    } else {
      return (<></>);
    }

  }
}

export default withRouter(OrderDetail);
// <CommentListContainer />
// <CommentComposeContainer2 />
