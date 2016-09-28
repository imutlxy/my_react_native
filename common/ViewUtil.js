'use strict'

import Dimensions from 'Dimensions';

import React, {
    PixelRatio,
    ActivityIndicatorIOS,
    ProgressBarAndroid,
} from 'react-native';


var ViewUtil = {

    /*屏幕尺寸*/
    size: {
        screenWidth: Dimensions.get('window').width,
        screenHeight: Dimensions.get('window').height
    },

    //todo：写法不对，待查
    //loading: <ProgressBarAndroid styleAttr="Inverse"/>
}

module.exports = ViewUtil;