
import React from 'react';
import { Marker } from "react-map-gl";
import pin_purple from'../../../assets/icons/location_purple.svg';
import pin_blue from'../../../assets/icons/location_blue.svg';


const LocationMarker = ({latitude, longitude, location}) => {

  return (

    <Marker
      latitude={Number(latitude)}
      longitude={Number(longitude)}
      location={location}

    >
      <img
        className="location-icon-map"
        src={(location ==="pick_up") ? pin_purple: pin_blue}
        alt="map location icon marker"
      />
    </Marker>
  )
}


export default LocationMarker;
