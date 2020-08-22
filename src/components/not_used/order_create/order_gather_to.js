// src/components/tweets/tweet_compose.js

import React from 'react';
// import EventBox from './event_box';
import '../../assets/stylesheets/event-compose.css';
import '../../assets/stylesheets/new-styles.css';

import {fetchAddressInfo} from "../maps/mapbox_api_util";
import { withRouter } from 'react-router-dom';

class OrderGatherTo extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

            search_term: "Golden Gate Park, San Francisco, CA",
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
            instructions: "",
            distance: "",
            cost: "",
            vehicle: "",
            order_completed: "",
            final_confirmation: ""
          }


      this.handleSubmit = this.handleSubmit.bind(this);
      this.confirmation_screen = this.confirmation_screen.bind(this);
      this.addToStateNextScreen = this.addToStateNextScreen.bind(this);
      this.goBack = this.goBack.bind(this);

  }

  componentDidMount(){

    if(!this.props.newOrder){

      this.props.history.push(`/orderfrom`);

    } else {

      const {pick_up_lat, pick_up_long, pick_up_address, pick_up_neighborhood} = this.props.newOrder;

      this.setState({
        pick_up_lat: pick_up_lat,
        pick_up_long: pick_up_long,
        pick_up_address: pick_up_address,
        pick_up_neighborhood: pick_up_neighborhood
      });
    }


  }

  addToStateNextScreen(){
    console.log("addToStateNextScreen");
    // this.props.updateStateNewOrder({
    //   "a": 1,
    //   "b":2
    // });
    this.props.updateStateNewOrder(this.state);
    this.props.history.push(`/orderinstructions`);

  }


  handleSubmit(e) {
    e.preventDefault();
    const {search_term} = this.state;
    fetchAddressInfo(search_term)
    // .then(res =>console.log(res))
    .then(res => this.setState({
      drop_off_lat: res.data.features[0].geometry.coordinates[1],
      drop_off_long: res.data.features[0].geometry.coordinates[0],
      drop_off_address: res.data.features[0].place_name,
      drop_off_neighborhood: res.data.features[0].context[0].text
    }));

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }


  confirmation_screen(){

    const {drop_off_address} = this.state;

    let address, address2;

    if(drop_off_address){
      // confirm_screen = (<p>pick up confirmation</p>);
      address = drop_off_address.split(",").map((ele, i) => (<li key={Number(i)+"-to"}>{ele}</li>));
      address2 = [
        address,
        (<li key="confirm-drop-off-location">
          <button className="button-large-primary" onClick={this.addToStateNextScreen}>Confirm Address Drop Off Location</button >
        </li>)
      ]
    }
    return address2;
  }

  goBack(){
    this.props.history.push("/orderfrom");
  }

  render() {

    const {drop_off_address} = this.state;


    console.log(this.state);

    return (
        <div className="session-form-container info-gather">
            <h2>Add Order Drop Off Location</h2>
            <form  className="session-form" onSubmit={this.handleSubmit}>
                <div className="event-compose">

                    <input type="textarea"
                        value={this.state.search_term}
                        onChange={this.update('search_term')}
                        placeholder="Enter an address here (ex: Golden Gate Bridge)"
                    />
                    <input
                      className="button-large-primary"
                      type="submit"
                      value={(drop_off_address) ? "Update Drop Off Address":"Add Drop Off Address"}
                    />
                    <button

                      className="button-large-secondary"
                      onClick={this.goBack}
                      >Go Back
                      </button>

                </div>
            </form>
            <ul className="location-details">
              {this.confirmation_screen()}
            </ul>

            <br />

        </div>
    )
  }
}

export default withRouter(OrderGatherTo);
