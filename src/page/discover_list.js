'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ListView,
} from 'react-native';

import HttpUtil from './../../common/HttpUtil';
import DiscoverItem from './discover_list_item';
import DiscoverDetail from './discover_detail';
import Url from './../../common/Url';
// import ViewUtil from './../../common/ViewUtil';

export default class discover_list extends Component {

    constructor(props) {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
            type: 1,
            show: false
        };

        this.getData = this.getData.bind(this);
    }

    // 已经挂载当前页面(启动页面的时候，加载数据)
    componentDidMount() {
        this.getData();
    }

    //获取数据
    getData() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var that = this;
        var baseURL = Url.host_name + Url.discover_list + '?type=' + this.state.type;
        //开启loading
        this.setState({
            show: false
        });
        HttpUtil.get(baseURL, function (data) {
            alert(data.toString());

            // if (!data.books || !data.books.length) {
            //     return alert('服务出错');
            // }
            var postList = data.listDynamic;
            that.setState({
                dataSource: ds.cloneWithRows(postList),
                show: true
            });
        }, function (err) {
            alert(err);
        });
    }

    render() {
        // 未加载完成时, 调用加载页面
        // if (!this.state.show) {
        //     return ViewUtil.loading;
        // }
        //加载成功
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow(this.state.dataSource)}
                    /*renderRow={(rowData) => <Text>{rowData.userName}</Text>}*/
                />
            </View>
        );
    }

    //渲染每个item
    _renderRow(rowData) {
        return (
            <DiscoverItem row={rowData}
                // {/*onPress={this._loadPage.bind(this, row.id)}*/}
            />
        );
    }

    //点击进入动态详情页
    _loadPage(id) {
        this.props.navigator.push({
            component: DiscoverDetail,
            passProps: {
                id: id
            }
        });
    }
}

// export default discover_list;
// var styles = StyleSheet.create({});