import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  label: {    
    fontSize: 18,
    width: Dimensions.get('window').width,
    textAlign: 'center',
    padding: 15,
    textAlignVertical: 'center'
  },
})

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>News</Text>
      </View>
    );
  }
}