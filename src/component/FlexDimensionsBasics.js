/**
 * xinyu.liang 2016/9/21
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// 加 export default ，才能被别的文件引用
export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            // 试试去掉父View中的`flex: 1`。
            // 则父View不再具有尺寸，因此子组件也无法再撑开。
            // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 1, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 1, backgroundColor: 'steelblue'}}/>
                </View>
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
    }
});