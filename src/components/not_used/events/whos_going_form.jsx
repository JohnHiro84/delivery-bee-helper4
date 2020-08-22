import React from 'react';

import { withRouter } from 'react-router-dom';

class WhosGoingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event : {whos_going: [""]}

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  componentDidMount() {

    this.props.fetchEvent(this.props.match.params.eventId)

    .then(res => this.setState({ 'event': res.event.data }));
    // .then(res => console.log(res.event.data));
    // console.log("this.state");
    // console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.eventId !== this.props.match.params.eventId) {
      this.props.fetchEvent(this.props.match.params.eventId).then(res => this.setState({ 'event': res.event.data }));
      // console.log("this.state");
      // console.log(this.state);
    }
  }


    handleSubmit(e) {
      e.preventDefault();
      let attending = this.state.event.whos_going;

      let attend_array = attending[0].split(" ");
      var arraycontainsuser = (attend_array.indexOf(this.props.currentUser.handle) > -1);

      let new_array = [""];
      if(arraycontainsuser){
        // console.log("array contains user");
        // console.log(attend_array);
        attend_array.forEach(ele => {
            if(ele !== this.props.currentUser.handle){
              new_array.push(ele);
            }
          }
        );
        // console.log(new_array);
        let new_people = new_array.join(" ");
        this.props.updateEvent(this.props.match.params.eventId, new_people);
        this.props.fetchEvent(this.props.match.params.eventId).then(res => this.setState({ 'event': res.event.data }));

        // this.setState({new_person : ""});
      } else {
        // console.log("array doesnt contain user");
        attending.push(this.props.currentUser.handle);
        let joined = attending.join(" ");
        this.props.updateEvent(this.props.match.params.eventId, joined);
        this.props.fetchEvent(this.props.match.params.eventId).then(res => this.setState({ 'event': res.event.data }));

        // this.setState({new_person : ""});
      }

      ///


    }

  render() {
    // const { currentUser } = this.props;
    // console.log(this.props.currentUser.handle);

    let attending = this.state.event.whos_going;
    let attend_array = attending[0].split(" ");
    var arraycontainsuser = (attend_array.indexOf(this.props.currentUser.handle) > -1);
    let going_or_no;
    if(arraycontainsuser){
      going_or_no = " Not able to attend anymore";
    } else {
      going_or_no = "I want to go!";
    }
    // console.log(typeof this.state.event.whos_going[0]);
    let attendees = this.state.event.whos_going[0].split(" ");
    // let attendees = ['1', '2', '3', '4', '5', '6', '7', '8']
    let attendee_list = [];
    attendees.forEach(attend => {
      if(attend !== ""){
        attendee_list.push(
          <div className="avatar-div" key={attend}>
            <img src={ require(`../../assets/images/img_avatar.png`) } alt="Avatar" className="avatar"/>
          <p>{attend}</p>
          </div>
        );
      }
    })
    console.log(attendee_list);
    return (
      <section className="attending-detail">
        <h1>Attending<span>({attendee_list.length})</span>:</h1>
        <div className="attendee-avatars">
        {attendee_list}
        </div>
        <form className="attending-form" onSubmit={this.handleSubmit}>
          <button className="attending-button">{going_or_no}</button>
        </form>
      </section>
    );
  }
}

export default withRouter(WhosGoingForm);
