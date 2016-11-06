import React, {Component} from 'react';
import { View , Text, Image, TextInput, StyleSheet, Dimensions, Navigator } from 'react-native';
import _ from 'underscore';
import MapComponent from '../components/mapComponent';

import GridItem from '../components/gridItem';
import GridView from 'react-native-grid-view';

const window = Dimensions.get('window');


class NearView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      mylocation: 'unknown',
    };
    this.handleGeolocation = this.handleGeolocation.bind(this);
    this.calcDistance = this.calcDistance.bind(this);
  }
  _renderItem(item) {
    return <GridItem key={item.id} mylocation={this.state.mylocation} item={item}/>
  }
  calcDistance(lat1, lon1, lat2, lon2) {
    var EARTH_R, Rad, radLat1, radLat2, radDist;
    var distance, ret;

    EARTH_R = 6371000.0;
    Rad = Math.PI / 180;
    radLat1 = Rad * lat1;
    radLat2 = Rad * lat2;
    radDist = Rad * (lon1 - lon2);

    distance = Math.sin(radLat1) * Math.sin(radLat2);
    distance = distance + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radDist);
    ret = EARTH_R * Math.acos(distance);

    var rtn = Math.round(Math.round(ret) / 1000);

    // if (rtn <= 0) {
    //   rtn = Math.round(ret) + " m";
    // } else {
    //   rtn = rtn + " km";
    // }

    return rtn;
  }
  onEndReached() {
    var that = this;
    var oldArr;

    for (var i = 0; i < 11; i++) {
        oldArr = that.state.dataSource;
        oldArr.push(i);
    }

    this.setState({
        dataSource: oldArr
    });
  }
  handleGeolocation(value) {
    console.log("handle value")
    console.log(value);
    this.setState({mylocation: value});
  }
  render() {

    var nearPokemon = {
      "pokmons": [
        { id: '0', name: '파이리', code: '001', coords: { latitude: '37.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/1.png') },
        { id: '1', name: '꼬부기', code: '005', coords: { latitude: '37.5763982', longitude: '129' }, url: require('../img/icons/5.png') },
        { id: '2', name: '이상해씨', code: '002', coords: { latitude: '37.5763982', longitude: '128' }, url: require('../img/icons/2.png') },
        { id: '3', name: '피카츄', code: '004', coords: { latitude: '33.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/4.png') },
        { id: '4', name: '피죤', code: '003', coords: { latitude: '35.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/3.png') },
        { id: '5', name: '라이츄', code: '006', coords: { latitude: '32.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/6.png') },
        { id: '6', name: '어니부기', code: '008', coords: { latitude: '30.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/8.png') },
        { id: '7', name: '뮤', code: '007', coords: { latitude: '31.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/7.png') },
        { id: '8', name: '뮤츠', code: '009', coords: { latitude: '35.5763982', longitude: '121.00209410000002' }, url: require('../img/icons/9.png') }
      ]
    }


    var nearPokemon1 = {
      "pokmons": [
        { id: '0', name: '파이리', code: '001', coords: { latitude: '37.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/1.png') },
        { id: '1', name: '꼬부기', code: '005', coords: { latitude: '37.5763982', longitude: '129' }, url: require('../img/icons/5.png') },
        { id: '2', name: '이상해씨', code: '002', coords: { latitude: '37.5763982', longitude: '128' }, url: require('../img/icons/2.png') },
        { id: '3', name: '피카츄', code: '004', coords: { latitude: '33.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/4.png') },
        { id: '4', name: '피죤', code: '003', coords: { latitude: '35.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/3.png') },
        { id: '5', name: '라이츄', code: '006', coords: { latitude: '32.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/6.png') },
        { id: '6', name: '어니부기', code: '008', coords: { latitude: '30.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/8.png') },
        { id: '7', name: '뮤', code: '007', coords: { latitude: '31.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/7.png') },
        { id: '8', name: '뮤츠', code: '009', coords: { latitude: '35.5763982', longitude: '121.00209410000002' }, url: require('../img/icons/9.png') },
      ]
    }


    if(this.state.mylocation!=='unknown') {
      nearPokemon1.pokmons.map((obj)=>{

        var objDistance = this.calcDistance(this.state.mylocation.latitude, this.state.mylocation.longitude, obj.coords.latitude  , obj.coords.longitude);
        obj.distance=objDistance;
        
      });
    }


    var gridLineCheack = nearPokemon1.pokmons.length%4;

    if(gridLineCheack!=0){
      var emptyGridLine = 4-gridLineCheack;
      for(var i =0;i<=emptyGridLine;i++){
        nearPokemon1.pokmons.push({ id: nearPokemon1.pokmons.length+i, name: '', code: '', coords: {latitude: '', longitude: ''}, url: '' });
      }
    }

    console.log(_.sortBy(nearPokemon1.pokmons, 'distance'));
    return (
      <View style={styles.nearViewContainer}>
        <View style={styles.map}>
          <MapComponent handleGeolocation={this.handleGeolocation.bind(this)} nearPokemon={nearPokemon} />
        </View>
        <View style={styles.list}>
          <GridView
           items={_.sortBy(nearPokemon1.pokmons, 'distance')}
           itemsPerRow={4}
           renderItem={this._renderItem.bind(this)}
           style={styles.listView}
           onEndReached={this.onEndReached.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 6
  },
  list: {
    flex: 4
  },
  nearViewContainer: {
    flex: 1,
    borderWidth: 2
  },


});


module.exports = NearView;
