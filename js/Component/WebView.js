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
    WebView
} = ReactNative;


export default class ViewExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scalesPageToFit:function () {

            }
        }
    }


    onNavigationStateChange(){

    }
    onShouldStartLoadWithRequest(){

    }
    render(){
        return (
            <WebView
                ref={'http://m.baidu.com'}
                automaticallyAdjustContentInsets={false}
                style={styles.webView}
                source={{uri: 'http://m.baidu.com'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                onNavigationStateChange={this.onNavigationStateChange}
                onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />

        )
    }
}

var styles = StyleSheet.create({

    webView:{
        height:900,
        backgroundColor:'rgba(0,0,0,0.3)'
    },
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