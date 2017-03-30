import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Button from './TabBarButton';

const styles = StyleSheet.create({
  container: {
    height: 80,    
    flexDirection: 'row',
    justifyContent: 'space-between',    
    width: Dimensions.get('window').width  
  }
})

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button />
        <Button />
        <Button />
      </View>
    );
  }
}