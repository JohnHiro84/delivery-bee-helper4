


export const zoomHelper = function(distance) {
  let zoom = 12;
  if (0 < distance && distance <= .5){
    zoom = 15;
  } else if (.5 < distance && distance <= 1){
    zoom = 14;
  } else if (1 < distance && distance <= 1.5){
    zoom = 13;
  } else if (1.5 < distance && distance <= 3){
    zoom = 12;
  } else if(3 < distance && distance <= 6 ){
    zoom = 11;
  } else if (6 < distance && distance <= 8){
    zoom = 10;
  } else if (8 < distance && distance <= 14){
    zoom = 9;
  } else if (14 < distance && distance <= 30){
    zoom = 8;
  } else if (30 < distance && distance <= 70){
    zoom = 7;
  } else if (70 < distance && distance <= 140){
    zoom = 6;
  } else if (140 < distance && distance <= 300){
    zoom = 5;
  } else if (300 < distance && distance <= 600){
    zoom = 4;
  } else if (600 < distance && distance <= 1400){
    zoom = 3;
  } else if (1400 < distance && distance <= 2800){
    zoom = 2;
  } else {
    zoom = 1;
  }
  // console.log(distance);
  // console.log(zoom);
  return zoom;
}
