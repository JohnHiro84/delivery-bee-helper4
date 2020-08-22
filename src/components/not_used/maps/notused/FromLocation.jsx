import React, { Component } from 'react';
import {convertAddressToCoords} from "./mapbox_api_util";
// import MapFromData from "./MapFromData";
import ToLocation from "./ToLocation";


class FromLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_address_from: "transamerica pyramid, san francisco, ca",
      received_from_coords: false,
      from_place_name: "",
      from_coordinates: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }


  handleSubmit(e) {

    e.preventDefault();

    // console.log(this.state);
    // console.log(this.state.user_address_from);

    convertAddressToCoords(this.state.user_address_from).then(res =>{

      console.log(res);
      console.log(res.data.features[0].place_name);

      this.setState({
        from_coordinates: res.data.features[0].geometry.coordinates,
        received_from_coords: true,
        from_place_name: res.data.features[0].place_name
      });
      // console.log(res.data.features[0].geometry.coordinates)
    });
  }


  render() {

    const {from_coordinates, received_from_coords, from_place_name} = this.state;

    let toLocation = (received_from_coords) ? (<ToLocation from_coordinates={from_coordinates} from_place_name={from_place_name} />) : (<p>To Location n/a yet</p>);
    return (
      <>
        <div>
          <p>From Location</p>
          <form className="comment-form" onSubmit={ this.handleSubmit }>

            <textarea
              className="comment-text-area"
              ref="user_address_from"
              value={ this.state.user_address_from }
              placeholder="type in an address"
              onChange={ this.update('user_address_from') }
              required
            />

            <button className="comment-button-form">Add From Address</button>
          </form>
        </div>
        {toLocation}
      </>
    );
  }

}

export default FromLocation;
