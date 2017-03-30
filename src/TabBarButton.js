import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
     flex:1,
     backgroundColor: '#E6E6E6',
     padding: 20,
     justifyContent: 'center'
  }
})

export default class TabBarButton extends Component {

  render() {
    const image = require('./assets/news50.png');

    return (
      <View style={styles.container}>
        <Image source={image} />
        <Text>trending</Text>
      </View>
    );
  }
}