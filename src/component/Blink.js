/**
 * xinyu.liang 2016/9/21
 */

import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

// 加 export default ，才能被别的文件引用
export default class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000);

    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        );
    }
}