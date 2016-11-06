import React, {Component} from 'react';
import { View , Text, StyleSheet } from 'react-native';
import MapComponent from '../components/mapComponent';


class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleGeolocation () {

  }
  render() {
    return (
      <View style={styles.registerViewContainer}>
        <MapComponent handleGeolocation={this.handleGeolocation.bind(this)} nearPokemon={"none"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  registerViewContainer: {
    flex: 1,
    borderWidth: 2
  },

});


module.exports = RegisterView;
