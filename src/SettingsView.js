/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Header from './header';
import Tabbar from './tabbar';

export default class settingsView extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const navigator = this.props.navigator;

    return (  
      <View style={styles.container}>
        <Header />
        <View style={styles.container}>
           <Text>settings</Text>
        </View>
         <Tabbar navigator={navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});