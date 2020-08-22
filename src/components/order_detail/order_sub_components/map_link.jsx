import React, {useState} from 'react';
// import { Link } from 'react-router-dom'
// import moment from 'moment';
import googleMapsIcon from'../../../assets/icons/google-maps-icon.png';
import '../../../assets/stylesheets/google-maps-link-styles.css';


const MapLink = ({pick_up_lat, pick_up_long, drop_off_lat, drop_off_long}) => {

  const [yourPosition, setYourPosition] = useState("");

  if(!yourPosition){
    navigator.geolocation.getCurrentPosition((res) => {
      setYourPosition([res.coords.latitude, res.coords.longitude]);
    })
  }

  let theMapLink = `https://www.google.com/maps/dir/${yourPosition[0]},${yourPosition[1]}/${Number(pick_up_lat)},${Number(pick_up_long)}/${Number(drop_off_lat)},${Number(drop_off_long)}`;

  return (
    <>
      <a href={theMapLink} className="google-maps-icon" target="_blank" rel="noopener noreferrer">
        <img
          src={googleMapsIcon}
          alt="google maps icon"
        />
        <span>Google Maps Directions</span>
      </a>

    </>
  )
}


export default MapLink;
