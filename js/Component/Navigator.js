import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight
} from 'react-native';

import MyScene from '../Other/MyScene';


export default class Navigator1 extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) =>
                              <MyScene
                                title={route.title}
                                onForward={ () => {
                                  const nextIndex = route.index + 1;
                                  navigator.push({
                                    title: 'Scene ' + nextIndex,
                                    index: nextIndex,
                                  });
                                }}
                                onBack={() => {
                                  if (route.index > 0) {
                                    navigator.pop();
                                  }
                                }}
                              />
                            }
            />
        )
    }
}