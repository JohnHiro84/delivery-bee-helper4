import React, {Component} from 'react';
// import ReactMapGL from "react-map-gl";


import ReactMapGL, { Marker } from "react-map-gl";
import location_pin from'../maps/location.svg';
import '../maps/MapStyles.css';
import {midPointHelper, orderFormatter} from "../maps/coordinate_mid_point_helper";
import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/new-styles.css';


import OrderCheckout from "./order_checkout_container";
// import OrderStripeCheckout from "./OrderStripeCheckout";



class OrderMap extends Component {
  constructor(props){
    super(props);
    this.state = {
                viewport: {
                  width: "100vw",
                  height: "400px",
                  latitude: 37.7749,
                  longitude: -122.4194,
                  zoom: 12
                },
                userLocation: {},
                order: "",
                purchase: {}
              };
              this.setUserLocation = this.setUserLocation.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
              this.goBack = this.goBack.bind(this);


  }


    setUserLocation(){

        const {
          pick_up_lat,
          pick_up_long,
          drop_off_lat,
          drop_off_long
        } = this.props.newOrder;

        console.log(this.props.newOrder)

        let midPoints = midPointHelper(pick_up_lat, pick_up_long, drop_off_lat, drop_off_long);

         let setUserLocation = {
             lat: midPoints[1],
             long:  midPoints[0]
          };
         let newViewport = {
            height: "400px",
            width: "100vw",
            latitude: midPoints[1],
            longitude: midPoints[0],
            zoom: 12
          };

          let formattedOrder = orderFormatter(this.props.newOrder);

          this.setState({
            viewport: newViewport,
            userLocation: setUserLocation,
            order: formattedOrder
         });

    };

  componentDidMount(){

    console.log(this.props.newOrder)
    if(!this.props.newOrder){
      this.props.history.push(`/orderfrom`);
    }

    this.setUserLocation();
  }


  handleSubmit(e) {
    e.preventDefault();
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  goBack(){
    this.props.history.push("/orderinstructions");
  }

  render() {
    // if(this.props.newOrder === undefined){
    //   this.props.history.push(`/orderfrom`);
    // }

    const {
      pick_up_lat,
      pick_up_long,
      pick_up_address,
      drop_off_lat,
      drop_off_long,
      drop_off_address,
      distance,
      instructions,
      cost
    } = this.props.newOrder;

    console.log(this.state.order)

    let marker_from = "";
    let marker_to = "";
    // let stripeComponent;

    if(this.state){

      marker_from = (
        <Marker
          latitude={Number(pick_up_lat)}
          longitude={Number(pick_up_long)}
        >
          <img className="location-icon" src={location_pin} alt="map location icon" />
        </Marker>
      )

      marker_to = (
        <Marker
          latitude={Number(drop_off_lat)}
          longitude={Number(drop_off_long)}
        >
          <img className="location-icon" src={location_pin} alt="map location icon" />
        </Marker>
      )

      // stripeComponent = (<OrderCheckout order={this.state.newOrder}/>);

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

      <div className="confirm-details">
        <h1>Confirm Details</h1>

        <h3>Distance in Miles:</h3>
        <p>{distance}</p>

        <h3>Price:</h3>
        <p>${cost}</p>

        <h3>Instructions for Bee</h3>
        <p>{instructions}</p>

        <h3>Pick Up Location:</h3>
        {pick_up_address.split(",").map(ele => (<p>{ele}</p>))}

        <h3>Drop Off Location:</h3>
        {drop_off_address.split(",").map(ele => (<p>{ele}</p>))}

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


// <OrderStripeCheckout order={this.props.newOrder}/>
