/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Button from './src/component/Button';
import MyImage from './src/component/MyImage';
import MyText from './src/component/MyText';
import Blink from './src/component/Blink';
import FlexDimensionsBasics from './src/component/FlexDimensionsBasics';


class AwesomeProject extends Component {

    constructor(props) {
        super(props);
        this.state = {status: 1};
    }

    render() {
        return (
            // <View style={styles.container}>
            //     {/* 可以传递字符串，数字，和对象 */}
            //     <FlexDimensionsBasics />
            // </View>
            // 尝试把`flexDirection`改为`column`看看
            <View style={styles.container}>
                <FlexDimensionsBasics/>
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
