/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { AppRegistry } from 'react-native';
import PokemonMap from './app';


// class PokemonMap extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <GoogleMap style={styles.map} />
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   map: {
//     height: 300,
//     width: 300
//   }
// });

AppRegistry.registerComponent('PokemonMap', () => PokemonMap);
