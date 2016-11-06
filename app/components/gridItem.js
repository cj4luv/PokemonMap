import React, {Component} from 'react';
import { View , Text, Image, TextInput, StyleSheet, Dimensions, Navigator } from 'react-native';


var styles = StyleSheet.create({
    photo: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'column',
        height: 70
    }
});

class GridItem extends React.Component {

  render() {
    var distance = null;
    var mylocation = this.props.mylocation;

    var ImageComponet = null;
    var pokemonDistance = null;
    if(this.props.item.url!==''){
      ImageComponet = <Image source={this.props.item.url} />;
      distance = this.props.item.distance;
      if (distance <= 0) {
        distance = Math.round(distance) + " m";
      } else {
        distance = distance + " km";
      }
    }

    return (
      <View style={styles.photo}>
        {ImageComponet}
        <Text>{this.props.item.name}</Text>
        <Text>{distance}</Text>
      </View>
    )
  }
}
module.exports = GridItem;
