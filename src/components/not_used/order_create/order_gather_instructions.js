// src/components/tweets/tweet_compose.js

import React from 'react';
// import EventBox from './event_box';
import '../../assets/stylesheets/event-compose.css';

// import {fetchAddressInfo} from "../maps/mapbox_api_util";
import { withRouter } from 'react-router-dom';

import {distanceInMiles} from "../maps/distance_helper";
import {costCalculator} from "../maps/cost_helper";

class OrderGatherInstructions extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

            user: "",
            helper: "",
            pick_up_lat: "",
            pick_up_long: "",
            pick_up_address: "",
            pick_up_neighborhood: "",
            drop_off_lat: "",
            drop_off_long: "",
            drop_off_address: "",
            drop_off_neighborhood: "",
            instructions: "please call my cell before you arrive (415)234-2398",
            distance: "",
            cost: "",
            vehicle: "",
            order_completed: "",
            final_confirmation: ""
          }


      this.handleSubmit = this.handleSubmit.bind(this);
      this.addToStateNextScreen = this.addToStateNextScreen.bind(this);
      this.goBack = this.goBack.bind(this);

  }

  componentDidMount(){

    let userId = this.props.currentUser.id;

    if(!this.props.newOrder){

      this.props.history.push(`/orderfrom`);

    } else {
      const {
        pick_up_lat,
        pick_up_long,
        pick_up_address,
        pick_up_neighborhood,
        drop_off_lat,
        drop_off_long,
        drop_off_address,
        drop_off_neighborhood
      } = this.props.newOrder;


      let distance = distanceInMiles(pick_up_lat, pick_up_long, drop_off_lat, drop_off_long);
      console.log(distance);

      // calculate cost
      let cost = costCalculator(distance);
      console.log(cost)

      this.setState({
        pick_up_lat: pick_up_lat,
        pick_up_long: pick_up_long,
        pick_up_address: pick_up_address,
        pick_up_neighborhood: pick_up_neighborhood,
        drop_off_lat: drop_off_lat,
        drop_off_long: drop_off_long,
        drop_off_address: drop_off_address,
        drop_off_neighborhood: drop_off_neighborhood,
        distance: distance,
        cost: cost,
        user: userId
      });
    }
  }

  addToStateNextScreen(){
    console.log("addToStateNextScreen Instructions");
    this.props.updateStateNewOrder(this.state);
    this.props.history.push(`/ordermap`);

  }


  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit ");
    this.props.updateStateNewOrder(this.state);
    this.props.history.push(`/ordermap`);

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }



  goBack(){
    this.props.history.push("/orderto");
  }

  render() {

    if(!this.props.newOrder){
      this.props.history.push(`/orderfrom`);
    }
    // const {drop_off_address} = this.state;

    console.log("order gather instructions")
    console.log(this.state);

    return (
        <div className="session-form-container info-gather">
            <h2>Add Instructions to the Deleivery Staff</h2>
            <form  className="session-form" onSubmit={this.handleSubmit}>
                <div className="event-compose">

                    <input type="textarea"
                        value={this.state.instructions}
                        onChange={this.update('instructions')}
                        placeholder="Enter instructions for the Deleivery staff(i.e. call me when dropping off package at..))"
                    />
                    <input
                      className="button-large-primary"
                      type="submit"
                      value="Add Instructions"
                    />

                    <button
                      id="session-submita"
                      className="button-large-secondary"
                      onClick={this.goBack}
                      >Go Back
                      </button>

                </div>
            </form>
            <br />

        </div>
    )
  }
}

export default withRouter(OrderGatherInstructions);
// <button
//   id="session-submita"
//   className="button-large"
//   onClick={this.addToStateNextScreen}
//   >Add Instructions with onclick = addToStateNextScreen
//   </button>
