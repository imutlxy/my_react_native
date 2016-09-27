'use strict'

// var React = require('react-native');
//
// var {
//     StyleSheet,
// } = React;

import React, {Component} from 'react';
import{AppRegistry, StyleSheet,ScrollView, Image, Text, View} from 'react-native'

var styles = StyleSheet.create({
    button: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
    },

    image: {
        flex: 1,
        height: 200,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#FF1492',
    },
});

module.exports = styles;