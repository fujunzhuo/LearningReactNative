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
    ViewPagerAndroid,
} = ReactNative;


export default class ViewExample extends React.Component {

    render(){
        return (
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage={0}>
                <View style={[styles.pageStyle,{backgroundColor:'red'}]}>
                    <Text>First page</Text>
                </View>
                <View style={[styles.pageStyle,{backgroundColor:'rgba(0,0,0,0.3)'}]}>
                    <Text>Second page</Text>
                </View>
                <View style={[styles.pageStyle,{backgroundColor:'rgba(0,0,0,0.8)'}]}>
                    <Text>Second page</Text>
                </View>
            </ViewPagerAndroid>


        )
    }
}


var styles = StyleSheet.create({
    box: {
        backgroundColor: '#527FE4',
        borderColor: '#000033',
        borderWidth: 1,
    },
    zIndex: {
        justifyContent: 'space-around',
        width: 100,
        height: 50,
        marginTop: -10,
    },
    viewPager:{
        height:900
    },
    pageStyle:{
        height:900
    },
});