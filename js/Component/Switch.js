'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Image,
    Switch,
} = ReactNative;


export default class SwitchExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:false
        }

    }

    setValue(v){
        this.setState({value:v});
    }


    render(){
        return (
            <View>
                <Switch
                    onValueChange={this.setValue.bind(this,!this.state.value)}
                    value={this.state.value ? true : this.state.value}
                />
            </View>
        )
    }
}
