import React from 'react';
import moment from 'moment';

const TimeElapsed = ({time_accepted, time_completed}) => {

  let now =(time_completed) ? moment(time_completed) : moment(new Date());

  // var now = moment(new Date());
  var end = moment(time_accepted);
  var duration = moment.duration(now.diff(end));

  let minutes;

  if(duration._data.minutes === 0 && duration._data.hours > 0){
    minutes = "00";
  }else if(duration._data.minutes < 10 && duration._data.minutes > 0 && duration._data.hours > 0){
    minutes = "0" + duration._data.minutes.toString();
  } else {
    minutes = duration._data.minutes.toString();
  }

  if(duration._data.minutes || duration._data.hours){
    return (
      <h3>
        <span>Time Elapsed: </span>
          <span className={(duration._data.hours) ? "time-elapsed-urgent": "time-elapsed"}>
            {(duration._data.days) ? (<span>{duration._data.days.toString()} days </span>): ""}
            {(duration._data.hours) ? (<span>{duration._data.hours.toString()} hours </span>): ""}
            {<span>{minutes} minutes </span>}
          </span>
      </h3>
    )
  } else {
    return (<></>);
  }
}


export default TimeElapsed;
