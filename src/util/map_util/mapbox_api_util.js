
//////util functions used by Customer

import axios from 'axios';

export const getEvents = () => {
  return axios.get('/api/events')
};

export const convertAddressToCoords = term => {

  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${term}.json?access_token=${process.env.REACT_APP_KEY_MAPBOX}`)

};

export const fetchAddressInfo = term => {

  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${term}.json?access_token=${process.env.REACT_APP_KEY_MAPBOX}`)

};

export const estimatedTravelTime = (lat1, long1, lat2, long2, travelMethod) =>{
  return axios.get(`https://api.mapbox.com/directions-matrix/v1/mapbox/${travelMethod}/${long1},${lat1};${long2},${lat2}?access_token=${process.env.REACT_APP_KEY_MAPBOX}`)
}
