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
} = ReactNative;


export default class TouchableNativeFeedbackExample extends React.Component {

    _onPressButton(){
        //alert('')
    }

    render(){
        return (
            <View>
                <TouchableOpacity onPress={this._onPressButton} activeOpacity={0.7}>
                    <Image
                        style={styles.button}
                        source={require('../img/01.jpg')}
                    />
                </TouchableOpacity>
            </View>



        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:50,
        height:50
    }
});