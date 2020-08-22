// import React, { Component } from 'react';
//
// //this one was all 3d
//
// import ReactMapGL, {
//   Marker,
//   FullscreenControl,
//   GeolocateControl,
//   Source,
//   Layer,
//   SVGOverlay,
//   HTMLOverlay,
//   NavigationControl,
//   LinearInterpolator,
//   CanvasOverlay,
//   Popup
// } from 'react-map-gl';
// const geojson = {
//   type: 'FeatureCollection',
//   features: [
//     { type: 'Feature', geometry: { type: 'Point', coordinates: [73.05625599999999, 33.644543999999996] } }
//   ]
// };
//
// export default class MapSix extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       markerLat: 33.644543999999996,
//       markerlng: 73.05625599999999,
//       showPopup: true,
//       viewport: {
//         width: window.innerWidth,
//         height: window.innerHeight,
//         latitude: 41.8662,
//         longitude: -87.61694,
//         zoom: 15.99,
//         pitch: 40,
//         bearing: 20,
//         antialias: true
//       }
//     };
//     this.re = React.createRef();
//   }
//
//   componentDidMount(){
//    // window.addEventListener("resize", this.resize.bind(this));
//     const map = this.reactMap.getMap();
//    // console.log('map object',map.on)
//     map.on('load', function() {
//
//      //add the GeoJSON layer here
//     map.addLayer({
//       'id': 'room-extrusion',
// 'type': 'fill-extrusion',
// 'source': {
// // GeoJSON Data source used in vector tiles, documented at
// // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
// 'type': 'geojson',
// 'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson'
// },
// 'paint': {
// // See the Mapbox Style Specification for details on data expressions.
// // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions
//
// // Get the fill-extrusion-color from the source 'color' property.
// 'fill-extrusion-color': ['get', 'color'],
//
// // Get fill-extrusion-height from the source 'height' property.
// 'fill-extrusion-height': ['get', 'height'],
//
// // Get fill-extrusion-base from the source 'base_height' property.
// 'fill-extrusion-base': ['get', 'base_height'],
//
// // Make extrusions slightly opaque for see through indoor walls.
// 'fill-extrusion-opacity': 1
// }
//     })
//     })
//   }
//   resize() {
//     //alert(window.innerWidth);
//     this.setState({
//       viewport: {
//         width: window.innerWidth,
//         height: window.innerHeight
//       }
//     }, () => {
//       //  console.log(this.state.viewport.width)
//     });
//   }
//
//   render() {
//     var markerLat = this.state.markerLat;
//     var markerlng = this.state.markerlng
//     return (
//       <div>
//         <ReactMapGL
//           {...this.state.viewport}
//           ref={(reactMap) => this.reactMap = reactMap}
//           // transitionDuration={1000}
//           //transitionInterpolator={new LinearInterpolator()}
//           mapboxApiAccessToken={process.env.REACT_APP_KEY_MAPBOX}
//           onViewportChange={(viewport) => {
//             // console.log('viewprt' , viewport)
//             this.setState({
//               viewport: viewport
//             }, () => {
//               // console.log(this.state.viewport.width)
//             });
//           }}
//         >
//           <div style={{ position: 'absolute', right: 10, top: 10 }}>
//             <FullscreenControl container={document.querySelector('body')} />
//           </div>
//           {/*  <GeolocateControl
//           positionOptions={{enableHighAccuracy: true}}
//           trackUserLocation={true}
//           showUserLocation={true}
//         />
//   <Marker
//         latitude={this.state.markerLat}
//         longitude={this.state.markerlng}
//         offsetLeft={-20} offsetTop={-10}
//         draggable ={true}
//
//       onDragEnd={(x)=>{
//         console.log('event ',x)
//         this.setState({
//           markerLat:x.lngLat[0],
//           markerlng:x.lngLat[1]
//         })
//       }}
//         >
//   <p style={{
//     background:'#000',
//     fontSize:20,
//     padding:5,
//     alignSelf:'center',
//     fontWeight:'bold',
//     borderRadius:'50%',
//     lineHeight:.5
//   }}><span>&nbsp;</span></p>
//         </Marker>
//
//         {this.state.showPopup && <Popup
//           latitude={this.state.markerLat}
//           longitude={this.state.markerlng}
//           closeButton={true}
//           closeOnClick={false}
//           onClose={() => this.setState({showPopup: false})}
//           anchor="bottom"
//           tipSize={10} >
//           <div>You are here</div>
//         </Popup>*/}
//
//
//           <div style={{ position: 'absolute', bottom: 30 }}>
//             <NavigationControl />
//           </div>
//         </ReactMapGL>
//       </div>
//     );
//   }
// }
