// app/index.js

import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Dimensions } from 'react-native';
import Tabs from 'react-native-tabs';
import MainContainer from './views/mainContainer';
import TabsComponet from './components/tabsComponet';
const window = Dimensions.get('window');

export default class PokemonMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: '0',
    };
  }
  handleClick (e) {
    this.setState({page:e.props.name});
  }
  renderScene () {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <MainContainer pageState={this.state.page} />
        </View>
        <View style={styles.tabContainer} >
          <TabsComponet pageState={this.state.page} onClick={this.handleClick.bind(this)} />
        </View>
      </View>
    );
  }
    render() {
  const routes = [
    {title: 'First Scene', index: 0},
    {title: 'Second Scene', index: 1},
  ];
  return (
    <Navigator
      style={styles.navi}
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={this.renderScene.bind(this)}
      navigationBar={
     <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
          { return (<Text>Cancel</Text>); },
         RightButton: (route, navigator, index, navState) =>
           {
             switch (this.state.page) {
              case "1":
                  return (<Text>Search</Text>);
              case "2":
                  return (<Text>Register</Text>);
               default:
             }
           },
         Title: (route, navigator, index, navState) =>
           {
             switch (this.state.page) {
               case "0":
                  return (<Text>Near</Text>);
              case "1":
                  return (<Text>Search</Text>);
              case "2":
                  return (<Text>Register</Text>);
              case "3":
                  return (<Text>Notify</Text>);
              case "4":
                  return (<Text>Profile</Text>);
               default:
             }
           },
       }}
       style={styles.navContainer}
     />
  }
    />
  );
}


}

const styles = StyleSheet.create({
  navi: {
    flex:1,
    borderWidth:2,
    borderColor:'red'
  },
  container: {
    flex:1,
    marginTop:window.height*0.1,
    borderWidth:5,
    borderColor:'yellow',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  navContainer: {
    borderWidth:2,
    borderColor:'blue',
    backgroundColor: 'gray',
    height:window.height*0.1,
  }
  ,
  mainContainer: {
    flex: 9,
    flexDirection: 'column',
  },
  tabContainer: {
    flex: 1
  },
  NavigationRightBtn: {
    flexDirection: 'row',
  }
});
