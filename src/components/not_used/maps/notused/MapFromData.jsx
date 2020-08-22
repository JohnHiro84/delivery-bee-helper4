import React, {Component} from 'react';
// import ReactMapGL from "react-map-gl";
import ReactMapGL, { Marker } from "react-map-gl";
import location from'./location.svg';
import './MapStyles.css';

import {distanceInMiles} from "./distance_helper";
import {costCalculator} from "./cost_helper";

import StripeApp from "../stripe/StripeApp";


class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
                viewport: {
                  width: "400px",
                  height: "400px",
                  latitude: 37.7749,
                  longitude: -122.4194,
                  zoom: 12
                },
                userLocation: {},
                from_coordinates: this.props.from_coordinates || "",
                to_coordinates: this.props.to_coordinates || "",
                distance_calculated: 0,
                cost: 0,
                instructions: "",
                purchase: {}
              };
              this.setUserLocation = this.setUserLocation.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
  }


    setUserLocation(){

        const {from_coordinates, to_coordinates, from_place_name, to_place_name} = this.props;

         let setUserLocation = {
             lat: from_coordinates[1],
             long:  from_coordinates[0]
          };
         let newViewport = {
            height: "400px",
            width: "400px",
            latitude: from_coordinates[1],
            longitude: from_coordinates[0],
            zoom: 12
          };


          //calculate distance
          let distance = distanceInMiles(from_coordinates[1], from_coordinates[0], to_coordinates[1], to_coordinates[0]);
          console.log(distance);

          // calculate cost
          let cost = costCalculator(distance);

          // package purchase

          let purchase = {

            from_coordinates: from_coordinates,
            from_place_name: from_place_name,
            to_coordinates: to_coordinates,
            to_place_name: to_place_name,
            distance_calculated: distance,
            cost_calculated: cost
          }

          this.setState({
            viewport: newViewport,
            userLocation: setUserLocation,
            distance_calculated: distance,
            cost: cost,
            purchase: purchase
         });

    };

  componentDidMount(){
    console.log("did mount");
    const {from_coordinates, to_coordinates, from_place_name, to_place_name} = this.props;
    console.log(from_coordinates);
    console.log(to_coordinates);
    console.log(from_place_name);
    console.log(to_place_name);

    this.setUserLocation();
  }


    handleSubmit(e) {

      e.preventDefault();

    }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }


  render() {

    const {distance_calculated, instructions, cost} = this.state;
    const {from_coordinates, to_coordinates, from_place_name, to_place_name} = this.props;

    console.log(this.state)

    let marker_from = "";
    let marker_to = "";

    if(this.state){

      marker_from = (
        <Marker
          latitude={from_coordinates[1]}
          longitude={from_coordinates[0]}
        >
        <img className="location-icon" src={location} alt="map location icon" />

        </Marker>
      )

      marker_to = (
        <Marker
          latitude={to_coordinates[1]}
          longitude={to_coordinates[0]}
        >
        <img className="location-icon" src={location} alt="map location icon" />
        </Marker>
      )
    }



    return (
      <>
      <div>
        <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={(viewport => this.setState({viewport}))}
        mapboxApiAccessToken={process.env.REACT_APP_KEY_MAPBOX}
        >

        {marker_from}
        {marker_to}

        </ReactMapGL>
      </div>
      <div>
      <h1>Confirm Details</h1>
      <h3>Distance in Miles:</h3>
      <p>{distance_calculated}</p>

      <h3>Price:</h3>
      <p>${cost}</p>

      <h3>Pick Up At:</h3>
      {from_place_name.split(",").map(ele => (<p>{ele}</p>))}
      <h3>Drop Off At:</h3>
      {to_place_name.split(",").map(ele => (<p>{ele}</p>))}
      <h3>Instructions</h3>
      <p>{instructions}</p>


      <form className="comment-form" onSubmit={ this.handleSubmit }>
        <label>Add instructions for the Delivery Bee</label>
        <textarea
          className="comment-text-area"
          ref="user_address_from"
          value={ this.state.instructions }
          placeholder="type in instructions for the delievery bee!"
          onChange={ this.update('instructions') }
          required
        />

      </form>
      <StripeApp purchase={this.state.purchase} instructions={this.state.instructions}/>
      </div>
      </>
    )
  }
}


export default Map;

// <button onClick={this.setUserLocation}>MyLocation</button>
