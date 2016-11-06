import React, {Component} from 'react';
import { View , Text, StyleSheet } from 'react-native';

const Realm = require('realm'); //Realm DB instance create

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    let realm = new Realm({
      schema: [{name:'Dog', properties: {name: 'string'}}] // DB schema
    });

    realm.write(() => {
      realm.create('Dog',{name: 'Rex'});
    });
    
    return (
      <View>
        <Text>Count of Dogs in Realm: {realm.objects('Dog').length}</Text>
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
