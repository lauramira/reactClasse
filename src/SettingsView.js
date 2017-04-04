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
  TouchableOpacity
} from 'react-native';

import Header from './header';
import Tabbar from './tabbar';
import Modal from 'react-native-modal';

import styles from './app.styles';

export default class settingsView extends Component {

  state = {
    visibleModal: null,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  constructor(props) {
    super(props);
  }


  render() {
    const navigator = this.props.navigator;

    return (  
      <View style={styles.container}>
        <Header />
        <View style={styles.container}>
          {this._renderButton('Default modal', () => this.setState({ visibleModal: 1 }))}
        {this._renderButton('Sliding from the sides', () => this.setState({ visibleModal: 2 }))}
        {this._renderButton('A slower modal', () => this.setState({ visibleModal: 3 }))}
        {this._renderButton('Fancy modal!', () => this.setState({ visibleModal: 4 }))}
        {this._renderButton('Bottom half modal', () => this.setState({ visibleModal: 5 }))}
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 2}
          animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 3}
          animationInTiming={2000}
          animationOutTiming={2000}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={2000}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 4}
          backdropColor={'red'}
          backdropOpacity={1}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
          {this._renderModalContent()}
        </Modal>
        </View>
         <Tabbar navigator={navigator}/>
      </View>
    );
  }
}