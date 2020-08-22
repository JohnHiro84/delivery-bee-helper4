import React, { Component} from "react";
import {Pie} from "react-chartjs-2";
import '../../assets/stylesheets/profile-chart-time.css';
import moment from 'moment';
import {formatData} from "../../util/profile_chart_data";

class ProfileStats extends Component{
  constructor(props){
    super(props);
    this.state = {
      orders:{},
      rawGenderData: {},
      ontimepercent: "66%",
      latepercent: "33%",
      data:{
          datasets: [{
              data: [10, 20],
              backgroundColor: [
                "green",
                "orange"
              ],
              hoverBackgroundColor: [
                'darkgreen',
                '#FF4D00'
              ]
          }],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
              "On Time",
              "Late"
          ]
      }

    }
    this.fetchData = this.fetchData.bind(this);

  }

  componentDidMount(){

    const {currentUser, fetchHelperOrders} = this.props;

    let total_orders = 0;
    let ontime_orders = 0;
    let late_orders = 0;

    fetchHelperOrders(currentUser.id).then(res => {

      res.orders.data.forEach(function (e) {

        if(e.time_accepted && e.time_completed){

          let now = moment(e.time_completed);
          let end = moment(e.time_accepted);
          let duration = moment.duration(now.diff(end));
          let min = duration._data.minutes;
          let days = duration._data.days;
          let hours = duration._data.hours;

          if(min > 60 || days || hours){
            late_orders +=1;
          } else {
            ontime_orders +=1;
          }
          total_orders +=1;

        }

      });

      this.fetchData(total_orders, ontime_orders, late_orders);

    });
  }


  fetchData(total, ontime, late){

    let data = formatData(total, ontime, late);

    this.setState({data: data});
  }



  render(){

    return (
      <div className="profile-chart-time-container">
        <Pie
          data={this.state.data}
          width={250}
          height={250}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: false,
              text: 'On Time Orders'
            },
            cutoutPercentage: 50,
            legend: {
              display: true,
              position: 'bottom',
              fontSize: 25

            }
          }}
        />
        <h2>On Time Percentage</h2>
      </div>
    )
  }
}

export default ProfileStats;
