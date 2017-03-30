import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 15,
    width: 140,
    borderRadius: 10,
    padding: 5
  },
  title: {
    fontSize: 18,
    marginHorizontal: 10
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    width: 20,
    height: 20,
  },
})

export default class FilterCell extends Component {
  render() {
    const title = this.props.title;
    const image = this.props.image;
    const color = this.props.color;
    return (
      <View style={[styles.container, {backgroundColor: color}]}>
        <Image style={styles.image} source={image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}