import React, {Component} from 'react';
import { View , Text, StyleSheet } from 'react-native';

import Tabs from 'react-native-tabs';
class TabsComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Tabs
          selected={this.props.pageState}
          style={styles.tabbar}
          selectedStyle={{color:'red'}}  onSelect={this.props.onClick}
        >
          <Text name="0">Near</Text>
          <Text name="1">Search</Text>
          <Text name="2">Register</Text>
          <Text name="3">Notify</Text>
          <Text name="4">Profile</Text>
        </Tabs>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  },

});

module.exports = TabsComponet;
