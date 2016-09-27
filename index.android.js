'use strict';

// var React = require('react-native');

import React, {Component} from 'react';
import{AppRegistry, StyleSheet,ScrollView, Image, Text, View} from 'react-native'

// var {
//     AppRegistry,
// } = React;

var ListViewModule = require('./list_view_module/index');

AppRegistry.registerComponent('AwesomeProject', () => ListViewModule);