import React, { Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>点我进入下一场景</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>点我返回上一场景</Text>
                </TouchableHighlight>
                <View style={styles.view}>
                    <Image source={require('../img/01.jpg')} style={styles.img} />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    img:{
        width:200,
        height:200,
    },
    view:{
        backgroundColor:'red',
        height:500,
    }
});