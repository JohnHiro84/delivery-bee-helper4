import React, { Component } from 'react';

import ReactMapGL from "react-map-gl";
import '../../assets/stylesheets/map-styles.css';
// import '../../assets/stylesheets/new-styles.css';


import {zoomHelper} from "../../util/map_util/zoom_helper";
import {midPointHelper} from "../../util/map_util/coordinate_mid_point_helper";
import LocationMarker from "./order_sub_components/location_marker";

class OrderDetailMap extends Component {

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
        order: {
          pick_up_address: ""
        },
        estimatedTravelTime: "",
        comments: {}
      };
    this.setUserLocation = this.setUserLocation.bind(this);
    }

  setUserLocation(){

      const {
        pick_up_lat,
        pick_up_long,
        drop_off_lat,
        drop_off_long,
        distance
      } = this.props.order;

      let midPoints = midPointHelper(
        Number(pick_up_lat),
        Number(pick_up_long),
        Number(drop_off_lat),
        Number(drop_off_long)
      );



      let calculatedZoom = zoomHelper(distance);

      let setUserLocation = {
           lat: midPoints[1],
           long:  midPoints[0]
      };

      let newViewport = {
          height: "400px",
          width: "100vw",
          latitude: midPoints[1],
          longitude: midPoints[0],
          zoom: calculatedZoom
      };

        this.setState({
          viewport: newViewport,
          userLocation: setUserLocation,
          order: this.props.order
       });

  };

  componentDidMount() {
    this.setUserLocation();
  }


  render() {

    // console.log(this.props)

    const {
      pick_up_address,
      pick_up_lat,
      pick_up_long,
      drop_off_lat,
      drop_off_long,

    } = this.props.order;

    let marker_from = "";
    let marker_to = "";

    if(pick_up_address){

        marker_from = (<LocationMarker
          latitude={Number(pick_up_lat)}
          longitude={Number(pick_up_long)}
          location="pick_up"
        />);

        marker_to = (<LocationMarker
          latitude={Number(drop_off_lat)}
          longitude={Number(drop_off_long)}
          location="drop_off"
        />);

          return (
            <section className="order-details-map">
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

            </section>
          );
    } else {
      return (<h1>not available</h1>);
    }

  }
}

export default OrderDetailMap;
