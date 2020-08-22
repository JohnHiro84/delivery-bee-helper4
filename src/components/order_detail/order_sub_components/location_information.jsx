import React from 'react';
// import moment from 'moment';

import '../../../assets/stylesheets/map-styles.css';

import pin_purple from'../../../assets/icons/location_purple.svg';
import pin_blue from'../../../assets/icons/location_blue.svg';



const LocationInformation = ({
    distance,
    pick_up_address,
    drop_off_address
  }) => {

  return (
    <div className="location-information">
    <h1>Location Information</h1>

    <h3>Pick Up:</h3>
    <img  className="location-icon-text" src={pin_purple} alt="map location icon marker" />
    <ul className="location-information-list">
      {pick_up_address.split(",").map((ele,i) => (<li key={ele + i.toString()}>{ele}</li>))}
    </ul>

    <h3>Drop Off:</h3>
    <img  className="location-icon-text" src={pin_blue} alt="map location icon marker" />
    <ul className="location-information-list">
      {drop_off_address.split(",").map((ele, i) => (<li key={ele + i.toString()}>{ele}</li>))}
    </ul>

    <h3>Total Distance:</h3>
    <ul className="location-information-list">
      <li>{distance} Miles</li>
    </ul>

    </div>
  )
}

export default LocationInformation;
