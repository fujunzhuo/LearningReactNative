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


export default class TouchableNativeFeedbackExample extends React.Component {

    _onPressButton(){
        //alert('')
    }

    render(){
        return (
            <View>
                <TouchableWithoutFeedback onPress={this._onPressButton} activeOpacity={0.7}>
                    <Image
                        style={styles.button}
                        source={require('../img/01.jpg')}
                    />
                </TouchableWithoutFeedback>
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