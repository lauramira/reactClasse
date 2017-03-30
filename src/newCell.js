import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  title: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    marginHorizontal: 10,
    textAlignVertical: 'center'
  },
})

export default class NewCell extends Component {
  render() {
    const title = this.props.title;
    const description = this.props.description;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}