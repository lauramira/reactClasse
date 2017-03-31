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
  TouchableHighlight,
  Navigator
} from 'react-native';

import NewsView from './src/NewsView';
import TrendingView from './src/TrendingView';
import SettingsView from './src/SettingsView';

var ROUTES = {
  newsPage: NewsView,
  trendingPage: TrendingView,
  settingsView: SettingsView
}

export default class testapp extends Component {

  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    var Component = ROUTES[route.name]
    return <Component route={route} navigator={navigator} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          style={styles.container}
          initialRoute={{ name: 'newsPage' }}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


AppRegistry.registerComponent('testapp', () => testapp);