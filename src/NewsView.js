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

import NewCell from './newCell';
import FilterCell from './filterCell';
import Header from './header';
import Tabbar from './tabbar';
import _ from 'underscore';

export default class newsView extends Component {

    constructor(props) {
        super(props);
        this.filterNews = this.filterNews.bind(this);

        this.newsContent = [
            { id: 1, title: "World Happines Report", description: "18k people talking about this", typeId: 1 },
            { id: 2, title: "Stephen Hawking", description: "120k people talking about this", typeId: 2 },
            { id: 3, title: "Samsung", description: "1M people talking about this", typeId: 2 },
            { id: 4, title: "Cristiano Ronaldo", description: "510k people talking about this", typeId: 3 },
            { id: 5, title: "Xiaomi", description: "120k people talking about this", typeId: 2 }
        ];
        this.newsTypes = [
            { title: "Around You", id: 1, image: require('./assets/around.png'), color: '#A5DF00' },
            { title: "Top News", id: 2, image: require('./assets/top.png'), color: '#FA5882' },
            { title: "Sport News", id: 3, image: require('./assets/sport.png'), color: '#FE642E' }
        ];

        this.state.newsFilteredList = this.newsContent;
    }

    state = {
        newsFilteredList: []
    }

    filterNews(filterTypeId) {
        const filteredList = this.newsContent.filter(
            (item) => item.typeId === filterTypeId
        )
        this.state.newsFilteredList = filteredList;
        this.setState({ newsFilteredList: this.state.newsFilteredList });
    }

    render() {
        const navigator = this.props.navigator;

        return (
            <View style={styles.container}>
                <Header />
                <ScrollView style={styles.content}>
                    <ScrollView horizontal style={styles.scrollViewFilters}>
                        {
                            _.map(this.newsTypes, (newsTypeItem) => {
                                return (
                                    <TouchableHighlight key={newsTypeItem.id}
                                        onPress={() => this.filterNews(newsTypeItem.id)}>
                                        <View key={newsTypeItem.id}>
                                            <FilterCell
                                                key={newsTypeItem.id}
                                                title={newsTypeItem.title}
                                                image={newsTypeItem.image}
                                                color={newsTypeItem.color} />
                                        </View>
                                    </TouchableHighlight>)
                            })
                        }
                    </ScrollView>
                    {
                        _.map(this.state.newsFilteredList, (newsItem) => {
                            return (<NewCell
                                key={newsItem.id}
                                title={newsItem.title}
                                description={newsItem.description} />)
                        })
                    }
                </ScrollView>
                <Tabbar navigator={navigator}/>
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
    },
    touchableHighlight: {
        flex: 1
    }
});