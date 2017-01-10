import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
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