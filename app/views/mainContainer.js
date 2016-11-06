import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NearView from './nearView';
import SearchView from './searchView';
import RegisterView from './registerView';
import NotifyView from './notifyView';
import ProfileView from './profileView';

//npm install --save react-native-tabs
import MapComponent from '../components/mapComponent';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    var mainContent;
    //console.log(this.props.pageState);
    switch (this.props.pageState) {
      case '0':
        mainContent = <NearView />;
        //console.log("super");
        break;
      case '1':
         mainContent = <SearchView />;
        break;
      case '2':
         mainContent = <RegisterView />;
        break;
      case '3':
         mainContent = <NotifyView />;
        break;
      case '4':
         mainContent = <ProfileView />;
        break;
      default:

    }
    return (
      <View style={styles.mainView}>
        {mainContent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'column'
  }
});

module.exports = MainContainer;
