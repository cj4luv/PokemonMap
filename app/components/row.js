import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Row = (props) => (
  <View style={styles.container}>
    <Image source={ props.url } style={styles.photo} />
    <Text style={styles.text}>
      근처에 <Text style={styles.highlight2}>{ props.name }</Text>가 나타났습니다.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    borderColor: 'blue',
    borderWidth: 1,
  },
  highlight: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  highlight2: {
    color: 'red'
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: 'green',
    borderWidth: 1,
  },
});

export default Row;
