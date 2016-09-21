/**
 * xinyu.liang 2016/9/21
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

// 加 export default ，才能被别的文件引用
export default class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {status: 1};
    }

    customPressHandler = () => {
        //自定义方法，用属性来定义
        // alert('按下了按钮,当前状态是：' + this.state.status);
        const {dianjishijian} = this.props;
        //执行点击事件
        dianjishijian();
    };

    render() {

        // {} 叫解构。具体看阮一峰老师的书es6
        //从 props 中取出 text 属性，也可以一次取出多个属性
        const {text,beijingyanse} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button,{backgroundColor:beijingyanse}]} onPress={this.customPressHandler}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </TouchableOpacity>
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
