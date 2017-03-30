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
  View
} from 'react-native';

import Header from './src/header';
import Tabbar from './src/tabbar';
import NewCell from './src/newCell';
import FilterCell from './src/filterCell';
import _ from 'underscore';

export default class testapp extends Component {

  constructor(props) {
    super(props);

    this.newsContent = [
      { id: 1, title: "World Happines Report", description: "18k people talking about this", typeId: 1 },
      { id: 2, title: "Stephen Hawking", description: "120k people talking about this", typeId: 2 },
      { id: 3, title: "Samsung", description: "1M people talking about this", typeId: 2 },
      { id: 4, title: "Cristiano Ronaldo", description: "510k people talking about this", typeId: 3 },
      { id: 5, title: "Xiaomi", description: "120k people talking about this", typeId: 2 }
    ];

    this.newsTypes = [
      { title: "Around You", id: 1, image: require('./src/assets/around.png'), color: '#A5DF00' },
      { title: "Top News", id: 2, image: require('./src/assets/top.png'), color: '#FA5882' },
      { title: "Sport News", id: 3, image: require('./src/assets/sport.png'), color: '#FE642E' }
    ];
  }

  render() {
    return (  
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.content}>
          <ScrollView horizontal style={styles.scrollViewFilters}>
            {
              _.map(this.newsTypes, (newsTypeItem) => {
                return (<FilterCell
                  key={newsTypeItem.id}
                  title={newsTypeItem.title}
                  image={newsTypeItem.image}
                  color={newsTypeItem.color} />)
              })
            }
          </ScrollView>
          {
            _.map(this.newsContent, (newsItem) => {
              return (<NewCell
                key={newsItem.id}
                title={newsItem.title}
                description={newsItem.description} />)
            })
          }
        </ScrollView>
        <Tabbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollViewFilters: {
    height: 140
  }
});

AppRegistry.registerComponent('testapp', () => testapp);
