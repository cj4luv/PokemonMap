import React, {Component} from 'react';
import { View , Text, StyleSheet } from 'react-native';
import _ from 'underscore';

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View style={styles.map}>
        <Text>searchView</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: 300,
    backgroundColor: 'white',
  }
});


module.exports = SearchView;
