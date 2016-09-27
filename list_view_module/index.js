'use strict'

// var React = require('react-native');

// var {
//     Text,
//     Image,
//     TouchableOpacity, // 按钮
//     ListView,
//     View,
//     ToastAndroid,
// } = React;

import React, {Component} from 'react';
import{
    AppRegistry, StyleSheet, ScrollView, Image, Text, View, TouchableOpacity, // 按钮
    ListView, ToastAndroid
} from 'react-native'

var styles = require('./styles');

// 图片
var IMAGES = [
    require('./images/1.jpg'),
    require('./images/2.jpg'),
    require('./images/3.jpg'),
    require('./images/4.jpg'),
    require('./images/5.jpg'),
    require('./images/6.jpg'),
    require('./images/7.jpg'),
    require('./images/8.jpg'),
    require('./images/9.jpg'),
    require('./images/10.jpg'),
];

// 名字
var NAMES = [
    'Girls\' Generation',
    'Jessica Jung',
    'Kim Hyo Yeon',
    'Seo Hyun',
    'Soo Young',
    'Sunny',
    'Taeyeon',
    'Tiffany',
    'Yoona',
    'Yuri'
];

//noinspection JSAnnotator
var ListViewModule = React.createClass({

    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this._genRows())
        };
    },

    _genRows: function () {
        var re = [];
        for (var i = 0; i < IMAGES.length; ++i) {
            re.push([NAMES[i % NAMES.length], IMAGES[i % IMAGES.length]]);
        }
        return re;
    },

    // 点击事件
    _pressRow: function (rowToast: string) {
        ToastAndroid.show(rowToast, ToastAndroid.SHORT);
    },

    _renderRow: function (rowData: array, sectionID: number, rowID: number) {
        return (
            <TouchableOpacity onPress={() => this._pressRow(rowData[0])}>
                <View>
                    <View style={styles.button}>
                        <Image style={styles.image} source={rowData[1]}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    render: function () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        );
    }
});

module.exports = ListViewModule;