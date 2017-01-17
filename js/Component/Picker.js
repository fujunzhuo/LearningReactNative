'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Picker,
    Image
} = ReactNative;


export default class PickerExample extends React.Component {
    constructor(){
        super();
        this.state = {
            language:'zh-CN'
        }
    }


    render(){
        return (
            <View>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java00000000" value="java" />
                    <Picker.Item label="JavaScript01" value="js" />
                    <Picker.Item label="JavaScript02" value="js" />
                    <Picker.Item label="JavaScript03" value="js" />
                    <Picker.Item label="JavaScript04" value="js" />
                    <Picker.Item label="JavaScript05" value="js" />
                    <Picker.Item label="JavaScript06" value="js" />
                    <Picker.Item label="JavaScript07" value="js" />
                    <Picker.Item label="JavaScript08" value="js" />
                    <Picker.Item label="JavaScript09" value="js" />
                    <Picker.Item label="JavaScript10" value="js" />
                    <Picker.Item label="JavaScript11" value="js" />
                    <Picker.Item label="JavaScript12" value="js" />
                    <Picker.Item label="JavaScript13" value="js" />
                    <Picker.Item label="JavaScript14" value="js" />
                    <Picker.Item label="JavaScript15" value="js" />
                    <Picker.Item label="JavaScript16" value="js" />
                    <Picker.Item label="JavaScript17" value="js" />
                </Picker>
            </View>
        )
    }
}