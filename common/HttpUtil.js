'use strict'

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,

} from 'react-native';

var HttpUtil = {

    /**
     * 基于fetch的get方法
     * @method post
     * @param {string} url
     * @param {function} callback 请求成功回调
     */
    get: function (url, successCallback, failCallback) {

        // return fetch(url)
        //     .then((response) => response.json)
        //     .then((json) => {
        //         // console.log('success:' + url + '  response:' + json);
        //         alert(json);
        //         successCallback(JSON.parse(json));
        //     })
        //     .catch((error) => {
        //         // console.error('fail:' + url + '  fail_message:' + error);
        //         failCallback(error);
        //     });

        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (json) {
            // alert("success:json::" + json.data.list);
            // successCallback(JSON.parse(json.data.listDynamic));
           return successCallback(json.data);
        }).catch((error) => {
            // console.error('fail:' + url + '  fail_message:' + error);
            alert("fail:" + error);
        });

    }


};

module.exports = HttpUtil;