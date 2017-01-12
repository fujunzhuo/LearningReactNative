'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Image
} = ReactNative;


export default class ImageExample extends React.Component {
    render(){
        return (
            <View>
                <Text>Image</Text>
                <Image style={{width:125,height:125}} source={require('../img/01.jpg')} />
                <Image style={{width:300,height:150}} source={{uri:'https://facebook.github.io/react/img/logo_og.png'}} />
            </View>
        )
    }
}
