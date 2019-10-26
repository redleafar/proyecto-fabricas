import LoginScreen from "./src/screens/LoginScreen";

export default LoginScreen;
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { Marker } from 'react-native-maps';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: '100%',
//     width: '100%',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//  });

//  var marker =
//   {
//     latitude: 4.684335,
//     longitude: -74.165654,
//     title: 'Foo Place1',
//     subtitle: '1234 Foo Drive'
//   };

//   var marker2 =
//   {
//     latitude: 4.684355,
//     longitude: -74.165664,
//     title: 'Foo Place2',
//     subtitle: '1234 Foo Drive'
//   };

//   var marker3 =
//   {
//     latitude: 4.684375,
//     longitude: -74.165694,
//     title: 'Foo Place3',
//     subtitle: '1234 Foo Drive'
//   };

//   var markers = [marker, marker2, marker3];

// export default () => (
//   <View style={styles.container}>
//     <MapView
//       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//       style={styles.map}
//       region={{
//         latitude: 4.684335,
//         longitude: -74.165654,
//         latitudeDelta: 0.015,
//         longitudeDelta: 0.0121,
//       }}
//     >
//     {markers.map(marker => (
//       <Marker
//         coordinate={{
//           latitude: marker.latitude,
//           longitude: marker.longitude}}
//         title={marker.title}
//         description={marker.description}
//         key = {marker.title}
//       />
//     ))}
//       <Marker coordinate={{
//             latitude: marker.latitude,
//             longitude: -74.165654}}>
//       </Marker>
//     </MapView>
//   </View>
// );
