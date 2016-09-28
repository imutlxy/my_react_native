'use strict'

var HttpUtil = {

    /**
     * 基于fetch的get方法
     * @method post
     * @param {string} url
     * @param {function} callback 请求成功回调
     */
    get: function (url, successCallback, failCallback) {
        return fetch(url)
            .then((response) => response.text())
            .then((responseJson) => {
                console.log('success:' + url + '  response:' + responseText);
                successCallback(JSON.parse(responseText));
            })
            .catch((error) => {
                console.error('fail:' + url + '  fail_message:' + error);
            });
    }

};

module.exports = HttpUtil;