import React, {useState} from 'react';
import moment from 'moment';

import {estimatedTravelTime} from "../../../util/map_util/mapbox_api_util";

import '../../../assets/stylesheets/travel-time.css';

 

const TravelTime = ({pick_up_lat, pick_up_long, drop_off_lat, drop_off_long}) => {

  const [value, setValue] = useState({time: ""});

  function handleChange(event){

    estimatedTravelTime(
      Number(pick_up_lat),
      Number(pick_up_long),
      Number(drop_off_lat),
      Number(drop_off_long),
      event.target.value
    )
    .then(res => {
      setValue({
        time: res.data.durations[1][0]
      });
    });
  }

  function formatTime(seconds){
    var duration = moment.duration(seconds, 'seconds');
    let data = duration._data;

    let days = (data.days) ? (data.days.toString()) + " day" : " ";
    let pluralDays = (data.days > 1) ? days + "s " : days + " ";

    let hours = (data.hours) ? (data.hours.toString()) + " hour" : " ";
    let pluralHours = (data.hours > 1) ? hours + "s " : hours + " ";

    let minutes = (data.minutes) ? (data.minutes.toString()) + " minutes" : "";

    return (pluralDays + pluralHours + minutes);

  }

  return (
    <>
      <form className="travel-time">
        <h3>Estimated Travel Time By:</h3>
        <select
          value={value.selection}
          onChange={handleChange}
          onLoad={handleChange}
          defaultValue="disabled"
        >
          <option value="disabled" disabled={true} defaultValue>select</option>
          <option value="driving">driving</option>
          <option value="cycling">cycling</option>
          <option value="walking">walking</option>
        </select>
        <ul>
          <li>{(value.time) ? formatTime(value.time) : ""}</li>
        </ul>
      </form>
    </>
  )
}


export default TravelTime;
// <option value="disabled" disabled={true} defaultValue>select</option>
