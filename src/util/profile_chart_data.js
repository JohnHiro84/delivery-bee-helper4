export const formatData = function(total,ontime,late){
  let data ={
            datasets: [{
                data: [0,0],
                backgroundColor: [
                  "green",
                  "orange"
                ],
                hoverBackgroundColor: [
                  'darkgreen',
                  '#FF4D00'
                ]
            }],
            labels: [
                "On Time",
                "Late"
            ]
        };


        if(total > 0){
          data.datasets[0].data = [ontime, late];
          data.labels = [
            ("OnTime: " + ((ontime/total)* 100).toFixed(0).toString()) + "%",
            ("Late: " + ((late/total)* 100).toFixed(0).toString())+ "%"
          ];
        } else {
          data.datasets[0].data = [1, 0];
          data.labels = [
            "OnTime",
            "Late"
          ];
        }


        return data;
}


// let data ={
//           datasets: [{
//               data: [5,5],
//               backgroundColor: [
//                 "green",
//                 "orange"
//               ],
//               hoverBackgroundColor: [
//                 'darkgreen',
//                 '#FF4D00'
//               ]
//           }],
//
//           // These labels appear in the legend and in the tooltips when hovering different arcs
//           labels: [
//               "On Time",
//               "Late"
//           ]
//       };
//
//       data.datasets[0].data = [ontime, late];
//       // const {ontimepercent, latepercent} = this.state;
//
//       data.labels = [
//         ("OnTime: " + ((ontime/total)* 100).toFixed(0).toString()) + "%",
//         ("Late: " + ((late/total)* 100).toFixed(0).toString())+ "%"
//       ]
