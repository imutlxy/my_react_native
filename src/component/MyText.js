/**
 * xinyu.liang 2016/9/21
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

// 加 export default ，才能被别的文件引用
export default class MyText extends Component {
    render() {
        return (
           <Text> 我是文本{this.props.name}</Text>
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
    button: {
        height: 40,
        width: 100,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
});