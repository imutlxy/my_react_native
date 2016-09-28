'use strict';

// var React = require('react-native');

import React, {Component} from 'react';
import{AppRegistry, StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import discover_list from './src/page/discover_list';
// var {
//     AppRegistry,
// } = React;

// var ListViewModule = require('./list_view_module/index');
// var DiscoverListViewModule = require('./src/page/discover_list');


class AwesomeProject extends Component {

    render() {
        return (
            <View style={styles.container}>
                <discover_list/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('AwesomeProject', () =>AwesomeProject);


// AppRegistry.registerComponent('AwesomeProject', () => DiscoverListViewModule);