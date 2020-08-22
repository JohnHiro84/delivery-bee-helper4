


export const midPointHelper = function(lat1, long1, lat2, long2) {

  let lat_diff = Math.abs((Math.abs(lat1) - Math.abs(lat2))/2);
  let long_diff = Math.abs((Math.abs(long1) - Math.abs(long2))/2);

  let lat_mid_point;
  let long_mid_point;

  let smaller_lat = Math.min(lat1, lat2);
  let smaller_long = Math.min(long1, long2);


  if(lat1 < 0 && lat2 < 0){
    lat_mid_point = smaller_lat + lat_diff;
  } else {
    lat_mid_point = smaller_lat + lat_diff;
  }

  if(long1 < 0 && long2 < 0){
    long_mid_point = smaller_long + long_diff;
  } else {
    long_mid_point = smaller_long + long_diff;
  }

  return [long_mid_point, lat_mid_point];

}

export const orderFormatter = function(order){
  console.log(order)

  let copyOrder = order;
  copyOrder.pick_up_lat = copyOrder.pick_up_lat.toString();
  copyOrder.pick_up_long = copyOrder.pick_up_long.toString();
  copyOrder.drop_off_lat = copyOrder.drop_off_lat.toString();
  copyOrder.drop_off_long = copyOrder.drop_off_long.toString();
  copyOrder.final_confirmation = false;
  copyOrder.order_completed = false;

  console.log(copyOrder);
  return copyOrder;
}
