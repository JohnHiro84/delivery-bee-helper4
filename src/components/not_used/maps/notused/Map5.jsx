import React, {Component} from 'react';
// import ReactMapGL from "react-map-gl";
import ReactMapGL, { Marker } from "react-map-gl";
import location from'./location.svg';
import './MapStyles.css';

class Map extends Component {
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
                userLocation: {}
              };
  }

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
       let setUserLocation = {
           lat: position.coords.latitude,
           long: position.coords.longitude
        };
       let newViewport = {
          height: "100vh",
          width: "400px",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 10
        };
        this.setState({
          viewport: newViewport,
          userLocation: setUserLocation
       });
    });
  };



  render() {
    console.log(this.state)
    return (
      <>
      <button onClick={this.setUserLocation}>MyLocation</button>
      <div>
        <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={(viewport => this.setState({viewport}))}
        mapboxApiAccessToken={process.env.REACT_APP_KEY_MAPBOX}
        >
        <Marker
          latitude={37.7749}
          longitude={-122.4194}
        >
        <p>DownTown SF</p>
        <img className="location-icon" src={location} alt="map location icon" />
        </Marker>


        <Marker
          latitude={37.7958}
          longitude={-122.3938}
        >
        <p>Ferry Building</p>
        <img className="location-icon" src={location} alt="map location icon" />
        </Marker>


        {Object.keys(this.state.userLocation).length !== 0 ? (
          <Marker
            latitude={this.state.userLocation.lat}
            longitude={this.state.userLocation.long}
          >
            <img className="location-icon" src={location} alt="map location icon" />
          </Marker>
        ) : (
           <div></div>
        )}
        </ReactMapGL>
      </div>
      </>
    )
  }
}


export default Map;
