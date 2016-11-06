import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';

import TimerMixin from 'react-timer-mixin';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;


function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      position: 'unknown',
      markers: [],
      iconLoaded: false,
      imagePoke: null,
      initLoade: false,
      selectPokemonId: '',
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({initLoade:true});
    }, 3000)	;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
        this.setState({position:position})
      },
        (error) => alert(error.message),
        {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
        var lastPosition = JSON.stringify(position);
        this.setState({lastPosition});
        console.info("watchPosition");
        console.info(this.state.lastPosition);
        this.setState({pokemonPosition: position.coords});
        this.props.handleGeolocation(position.coords);
      });
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  onPressHandler (eventId) {
    this.setState({'selectPokemonId': eventId});
    console.log("press"+"   "+eventId);
  }
  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }
  render() {
    var nearPokemons = this.props.nearPokemon==='undefind'||this.props.nearPokemon==='none'? null : this.props.nearPokemon.pokmons.map(marker => (
      <MapView.Marker
        coordinate={{
          latitude: parseFloat(marker.coords.latitude),
          longitude: parseFloat(marker.coords.longitude)}}
        key={this.state.iconLoaded ? 'markerLoaded'+marker.id : 'marker'+marker.id}
        onPress={this.onPressHandler.bind(this, marker.id)}
      >
        <View style={{width:25,height:25,borderWidth:0,alignItems:'center',justifyContent:'center'}}>
          <Image key={marker.id} source={marker.url} onLoadEnd={() => {if (!this.state.iconLoaded) this.setState({iconLoaded: true});}}/>
        </View>
      </MapView.Marker>
    ));
    var hiddenView = null;
    if(this.props.nearPokemon === 'none') {
      hiddenView = <View style={styles.center}><View style={styles.circle} /></View>
    } else {
      hiddenView = <View style={styles.buttonContainer}>
        <View style={styles.bubble}>
          <Text>{this.state.imagePoke}</Text>
          <Text>Select Pokemon ID</Text>
          <Text>{this.state.selectPokemonId}</Text>
          <Text>Tap to create a marker of random color</Text>
        </View>
      </View>;
    }
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={
            {
              latitude: this.state.position==='unknown'?LATITUDE:this.state.position.coords.latitude,
              longitude: this.state.position==='unknown'?LONGITUDE:this.state.position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }
          }
          region={
            {
              latitude: this.state.position==='unknown'?LATITUDE:this.state.position.coords.latitude,
              longitude: this.state.position==='unknown'?LONGITUDE:this.state.position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }
          }
          showsUserLocation={true}
        >
        {nearPokemons}
        </MapView>
        {hiddenView}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 100/2,
    backgroundColor: 'red'
  },
  center: {
    flex:1,
    justifyContent: "center",
  }
});

module.exports = MapComponent;
