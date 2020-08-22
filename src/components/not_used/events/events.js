// src/components/tweets/tweets.js
import '../../assets/stylesheets/events.css';

import React from 'react';
import { withRouter } from 'react-router-dom';
import EventBox from './event_box';
// import {getEvents} from '../../util/event_api_util';
class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }
  // compoinentWillMount
  componentDidMount() {
    this.props.fetchEvents();
    // console.log(this.state.events);
    // .then(res => this.setState({ events: res }););
    // getEvents().then(res => console.log(res));
  }

// componentDidUPdate
  componentWillReceiveProps(newState) {
    this.setState({ events: newState.events });
  }

  render() {
    // console.log(this.state.events);
    if (this.state.events.length === 0) {
      return (<div>There are no Events</div>)
    } else {
      return (
        <div>

          <div className="eventList">

            {this.state.events.map(event => (
              <EventBox key={event._id} event={event} title ={event.title} description = {event.description} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Event);
