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

class AwesomeProject extends Component {

    constructor(props) {
        super(props);
        this.state = {status: 1};
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 可以传递字符串，数字，和对象 */}
                <Button text="确定" beijingyanse="red" date="2016-9-21" dianjishijian={() => {
                    alert('你点击了确定!')
                }}/>
                <Button text='取消' beijingyanse="grey" dianjishijian={() => {
                    alert('你点击了取消!')
                }}/>
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
