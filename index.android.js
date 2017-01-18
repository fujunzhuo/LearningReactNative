/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import {
  Navigator1,
  ActivityIndicator1,
  DatePickerIOS1,
  DrawerLayoutAndroid1,
  Image1,
  KeyboardAvoidingView1,
  ListView1,
  MapView1,
  ReactNativeMaps,
  Modal1,
  Picker1,
  ProgressBarAndroid1,
  RefreshControl1,
  Slider1,
    StatusBar1,
    Switch1,
    Text1,
    TextInput1,
    ToolbarAndroid1,
    TouchableHighlight1,
    TouchableNativeFeedback1,
    TouchableOpacity1,
    TouchableWithoutFeedback1,
    View1,
    ViewPagerAndroid1,
    WebView1,
}  from './js/Component1';

import {
    ActionSheetIOS1,
    Animated1,
    CameraRoll1,
}  from './js/Api';


export default class LearningReactNative extends Component {
  render() {
    return (
        <CameraRoll1 />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LearningReactNative', () => LearningReactNative);
