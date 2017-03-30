import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
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
    const title = this.props.title;
    const navigator = this.props.navigator;
    const page = this.props.page;
    
    return (

      <TouchableHighlight
        onPress={() => navigator.replace({ name: page })}>
      <View style={styles.container}>
        <Image source={image} />
        <Text>{title}</Text>
      </View>
      </TouchableHighlight>
    );
  }
}