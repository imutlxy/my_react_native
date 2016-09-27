import React, {Component} from 'react';
import{AppRegistry, StyleSheet,ScrollView, Image, Text, View} from 'react-native'

export default class Scrollview extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize: 16}}>Scroll me plz</Text>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Text style={{fontSize: 16}}>If you like</Text>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Image source={require('./cat.png')} style={styles.img}/>
                <Text style={{fontSize: 16}}>Scrolling down</Text>
                <Image source={require('./cat.png')} style={styles.img}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250,
        alignItems: 'center',
    },
});