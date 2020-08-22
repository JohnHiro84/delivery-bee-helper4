import React, { Component } from 'react';
import {convertAddressToCoords} from "./mapbox_api_util";
import MapFromData from "./MapFromData";

class PreMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_input_address: "transamerica pyramid, san francisco, ca",
      render_map: false,
      coordinates: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMap = this.renderMap.bind(this);

  }

  // return axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoiYXlhbWJhbyIsImEiOiJja2Q0YXp6a28weGtuMnJwNWltMHhiMjlhIn0.QlhNcW8YbdVv2B0o4jkbpw")

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log(this.state.user_input_address);
    convertAddressToCoords(this.state.user_input_address).then(res =>{
      this.setState({coordinates: res.data.features[0].geometry.coordinates, render_map: true })
      console.log(res.data.features[0].geometry.coordinates)
    });
  }


    renderMap(){
      const { coordinates } = this.state;

      let map;
      if(coordinates.length > 0){
        map = (<MapFromData location_one={this.state.coordinates}/>);
      } else {
        map = "";
      }

      return map;
    }




  render() {
    console.log(this.state)
    return (
      <div><p>PreMap</p>
      <form className="comment-form" onSubmit={ this.handleSubmit }>

          <textarea
            className="comment-text-area"
            ref="user_input_address"
            value={ this.state.user_input_address }
            placeholder="type in an address"
            onChange={ this.update('user_input_address') }
            required />

        <button className="comment-button-form">Add Address</button>
      </form>
      {this.renderMap()}
    </div>
    );
  }

}

export default PreMap;
