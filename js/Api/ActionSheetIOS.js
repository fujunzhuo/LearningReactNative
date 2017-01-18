'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
} = ReactNative;


export default class ViewExample extends React.Component {

    render(){
        return (
            <View style={{flexDirection: 'row', height: 100, padding: 20}}>
                <View style={{backgroundColor: 'blue', flex: 0.3}} />
                <View style={{backgroundColor: 'red', flex: 0.5}} />
            </View>


        )
    }
}
