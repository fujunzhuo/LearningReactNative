'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback
} = ReactNative;


export default class TouchableNativeFeedbackExample extends React.Component {

    _onPressButton(){
        //alert('')
    }

    render(){
        return (
            <View>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{height:50}}></View>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
                    <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{height:50}}></View>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.5)', false)}>
                    <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>

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