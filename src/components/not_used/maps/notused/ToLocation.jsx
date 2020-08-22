import React, { Component } from 'react';
import {convertAddressToCoords} from "./mapbox_api_util";
import MapFromData from "./MapFromData";

class ToLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      from_coordinates: this.props.from_coordinates || "",
      from_place_name: this.props.from_place_name || "",
      user_address_to: "golden gate bridge, san francisco, ca",
      to_coordinates: "",
      to_place_name: "",
      render_map: false,
      coordinates: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMap = this.renderMap.bind(this);

  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }


  handleSubmit(e) {
    e.preventDefault();

    convertAddressToCoords(this.state.user_address_to).then(res =>{
      console.log(res);
      console.log(res.data.features[0].place_name);

      this.setState({
        to_coordinates: res.data.features[0].geometry.coordinates,
        render_map: true,
        to_place_name: res.data.features[0].place_name
      })
      // console.log(res.data.features[0].geometry.coordinates)
    });
  }


    renderMap(){

      const { to_coordinates, from_coordinates, from_place_name, to_place_name } = this.state;

      let map;
      if(to_coordinates.length > 0 && from_coordinates.length > 0){
        console.log("both coordinate pairs exist!")
        map = (
          <MapFromData
            from_coordinates={from_coordinates}
            to_coordinates={to_coordinates}
            from_place_name={from_place_name}
            to_place_name={to_place_name}
          />
        );
      } else {
        map = "";
      }

      return map;
    }




  render() {

    console.log(this.state)

    return (
      <>
      <div><p>To Location</p>
      <form className="comment-form" onSubmit={ this.handleSubmit }>

          <textarea
            className="comment-text-area"
            ref="user_address_to"
            value={ this.state.user_address_to }
            placeholder="type in an address"
            onChange={ this.update('user_address_to') }
            required
          />

        <button className="comment-button-form">To Address</button>
      </form>
    </div>
    {this.renderMap()}
    </>
    );
  }

}

export default ToLocation;
