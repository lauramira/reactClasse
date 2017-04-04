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
  ActivityIndicator,
  ListView
} from 'react-native';

import Header from './header';
import Tabbar from './tabbar';
import _ from 'underscore';

export default class trendingView extends Component {

  state = { stations: [], loading: true }

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        stations: ds.cloneWithRows([]),
         loading: true
      }
   
  }

  async componentWillMount() {
    const uri = 'http://barcelonaapi.marcpous.com/bicing/stations.json';
    try {
      const response = await fetch(uri);
      const jsonData = await response.json();
      console.log(jsonData);
      debugger;
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({ loading: false , stations: ds.cloneWithRows(jsonData.data.bici)})
     
    
    } catch(e) {
      console.log(e);
} }


  render() {
    const { stations, loading, error } = this.state;
    if (loading) {
      return <ActivityIndicator style={styles.loading} />
    }     

    const navigator = this.props.navigator;

    return (
       <View style={styles.container}>
      <Header />
      <ListView style={styles.container}
          dataSource={this.state.stations}
          enableEmptySections={true}
          renderRow={(station) => <Text style={styles.title}>{station.name}</Text>}
          />
        <Tabbar navigator={navigator}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    padding: 10
  },
  title: {
    fontSize: 18
  }
});