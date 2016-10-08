'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

var DiscoverList = React.createClass({
    render: function () {
        var row = this.props.row;
        return (
            <TouchableOpacity style={[styles.row, styles.item]} {...this.props}>
                <View style={[styles.center]}>
                    {/*<Image source={{uri: row.image}} style={styles.item_img}/>*/}
                    <Text>{row.userName}</Text>
                    <View style={styles.divider}/>
                </View>
                {/*// <View style={styles.content}>*/}
                {/*//     <View>*/}
                {/*//         <Text style={{flex: 1}} numberOfLines={1}>{row.title}</Text>*/}
                {/*//     </View>*/}
                {/*//     <View style={{marginTop: 10}}>*/}
                {/*//         <Text style={[styles.publisher, {flex: 1}]} numberOfLines={1}>{row.publisher}</Text>*/}
                {/*//     </View>*/}
                {/*//     <View style={{marginTop: 10}}>*/}
                {/*//         <Text style={[styles.publisher, {flex: 1}]} numberOfLines={1}>{row.author}</Text>*/}
                {/*</View>*/}
                {/*<View style={[styles.row, {marginTop: 10, flex: 1}]}>*/}
                {/*<Text style={styles.price}>{row.price}</Text>*/}
                {/*<Text style={styles.pages}>{row.pages}页</Text>*/}
                {/*</View>*/}
                {/*</View>*/}
            </TouchableOpacity>
        );
    }
});

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    item: {
        height: 40,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginTop: 5,
        marginBottom: 5,
        borderColor: '#ccc'
    },
    divider: {
        height: 1,
        width: 300,
        backgroundColor: '#000000',
    },
});
module.exports = DiscoverList;
