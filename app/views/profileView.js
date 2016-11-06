import React, {Component} from 'react';
import { View , Text, StyleSheet } from 'react-native';


class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View>
        <Text>profileView!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: 300
  }
});


module.exports = ProfileView;
