// src/components/tweets/tweet_compose.js

import React from 'react';
// import EventBox from './event_box';
import '../../assets/stylesheets/event-compose.css';
import '../../assets/stylesheets/new-styles.css';

import {fetchAddressInfo} from "../maps/mapbox_api_util";
import { withRouter } from 'react-router-dom';

class OrderGatherFrom extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
            search_term: "ferry building san francisco ca",
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

  }

  componentDidMount(){
    console.log("Mounted");
    fetchAddressInfo("starbucks san francisco")
    .then(res =>console.log(res))

  }

  addToStateNextScreen(){
    console.log("addToStateNextScreen");
    // this.props.updateStateNewOrder({
    //   "a": 1,
    //   "b":2
    // });
    this.props.updateStateNewOrder(this.state);
    this.props.history.push(`/orderto`);

  }


  handleSubmit(e) {
    e.preventDefault();
    const {search_term} = this.state;
    fetchAddressInfo(search_term)
    // .then(res =>console.log(res))
    .then(res => this.setState({
      pick_up_lat: res.data.features[0].geometry.coordinates[1],
      pick_up_long: res.data.features[0].geometry.coordinates[0],
      pick_up_address: res.data.features[0].place_name,
      pick_up_neighborhood: res.data.features[0].context[0].text
    }));

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  confirmation_screen(){

    const {pick_up_address} = this.state;

    let address, address2;

    if(pick_up_address){
      // confirm_screen = (<p>pick up confirmation</p>);
      address = pick_up_address.split(",").map((ele, i) => (<li key={Number(i)+"-from"}>{ele}</li>));
      address2 = [
        address,
        (<li key="confirm-pickup-location">
          <button className="button-large-primary" onClick={this.addToStateNextScreen}>Confirm Address Pick Up Location</button >
        </li>)
      ]
    }

    return address2;
  }

  render() {

    const {pick_up_address} = this.state;

    console.log(this.props.currentUser);
    console.log(this.state);

    return (
        <div className="session-form-container info-gather">
            <h1>Generate a new order </h1>
            <h2>Add Order Pick Up Location</h2>
            <form  className="session-form" onSubmit={this.handleSubmit}>
                <div className="event-compose">
                    <input type="textarea"
                        value={this.state.search_term}
                        onChange={this.update('search_term')}
                        placeholder="Enter an address here (ex: Alamo Square)"

                    />

                    <input className="button-large-primary" type="submit" value={(pick_up_address) ? "Update Pick Up Address":"Add Pick Up Address"} />

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

export default withRouter(OrderGatherFrom);
