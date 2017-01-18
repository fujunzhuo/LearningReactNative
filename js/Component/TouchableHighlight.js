'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} = ReactNative;


export default class TouchableHighlightExample extends React.Component {

    _onPressButton(){
        //alert('')
    }

    render(){
        return (
            <TouchableHighlight
                onPress={this._onPressButton}
                activeOpacity={0.5}
                underlayColor='rgba(0,0,0,0.1)'>
                <Image
                    style={styles.button}
                    source={require('../img/01.jpg')}
                />
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:50,
        height:50
    }
});