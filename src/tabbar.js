import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Button from './TabBarButton';
import _ from 'underscore';

const styles = StyleSheet.create({
  container: {
    height: 80,    
    flexDirection: 'row',
    justifyContent: 'space-between',    
    width: Dimensions.get('window').width  
  }
})

export default class Footer extends Component {
   constructor(props) {
        super(props);        
        this.tabBarButtons = [
            { id: 1, title: "News", page: "newsPage"},
            { id: 2, title: "Trending", page: "trendingPage"},
            { id: 3, title: "Settings", page: "settingsView"},
            { id: 4, title: "TabView", page: "tabViewView"}           
        ];
    }


  render() {
    const navigator = this.props.navigator;

    return (
      <View style={styles.container}>
        {
          _.map(this.tabBarButtons, (button) => {
              return (
               <Button 
                  key={button.id} 
                  title={button.title} 
                  page={button.page}
                  navigator={navigator}/>                    
              )
          })
        }
      </View>
    );
  }
}