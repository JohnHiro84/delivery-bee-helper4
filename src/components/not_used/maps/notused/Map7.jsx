// import React, { Component } from 'react';
// import ReactMapGL, {
//   Marker,
//   polylineGeoJSON,
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
//
// class MapPage extends Component {
//   constructor(props) {
//     super(props);
//      this.state = {
//       viewport: {
//        latitude: 38.63738602787579,
//        longitude: -121.23576311149986,
//        zoom: 6.8,
//        bearing: 0,
//        pitch: 0,
//        dragPan: true,
//        width: 600,
//        height: 600
//      }
//     };
//    }
//
// render() {
//   const { viewport } = this.state;
//
//   return (
//     <ReactMapGL
//       {...viewport}
//       mapboxApiAccessToken={process.env.REACT_APP_KEY_MAPBOX}
//       onViewportChange={newViewport => {
//         this.setState({ viewport: newViewport });
//       }}
//     >
//       <Source id='polylineLayer' type='geojson' data={polylineGeoJSON}>
//         <Layer
//           id='lineLayer'
//           type='line'
//           source='my-data'
//           layout={{
//            'line-join': 'round',
//            'line-cap': 'round',
//           }}
//           paint={{
//            'line-color': 'rgba(3, 170, 238, 0.5)',
//             'line-width': 5,
//           }}
//         />
//       </Source>
//     </ReactMapGL>
//   );
//  }
// }
//
// export default MapPage;
