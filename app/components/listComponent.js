import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';

import Row from './row';

class ListComponent extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        { id: '0', name: '파이리', code: '001', coords: { latitude: '37.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/1.png') },
        { id: '1', name: '꼬부기', code: '005', coords: { latitude: '37.5763982', longitude: '129' }, url: require('../img/icons/5.png') },
        { id: '2', name: '이상해씨', code: '002', coords: { latitude: '37.5763982', longitude: '128' }, url: require('../img/icons/2.png') },
        { id: '3', name: '피카츄', code: '004', coords: { latitude: '33.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/4.png') },
        { id: '4', name: '피죤', code: '003', coords: { latitude: '35.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/3.png') },
        { id: '5', name: '라이츄', code: '006', coords: { latitude: '32.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/6.png') },
        { id: '6', name: '어니부기', code: '008', coords: { latitude: '30.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/8.png') },
        { id: '7', name: '뮤', code: '007', coords: { latitude: '31.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/7.png') },
        { id: '8', name: '뮤츠', code: '009', coords: { latitude: '35.5763982', longitude: '121.00209410000002' }, url: require('../img/icons/9.png') },
        { id: '9', name: '파이리', code: '001', coords: { latitude: '37.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/1.png') },
        { id: '10', name: '꼬부기', code: '005', coords: { latitude: '37.5763982', longitude: '129' }, url: require('../img/icons/5.png') },
        { id: '11', name: '이상해씨', code: '002', coords: { latitude: '37.5763982', longitude: '128' }, url: require('../img/icons/2.png') },
        { id: '12', name: '피카츄', code: '004', coords: { latitude: '33.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/4.png') },
        { id: '13', name: '피죤', code: '003', coords: { latitude: '35.5763982', longitude: '127.00209410000002' }, url: require('../img/icons/3.png') }
      ])
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListComponent;
