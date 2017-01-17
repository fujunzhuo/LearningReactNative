import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    DrawerLayoutAndroid
} from 'react-native';

import MyScene from '../Other/MyScene';
import FirstPageComponent from '../Other/FirstPageComponent';

/***
 * 新手理解Navigator的教程
 * http://bbs.reactnative.cn/topic/20/%E6%96%B0%E6%89%8B%E7%90%86%E8%A7%A3navigator%E7%9A%84%E6%95%99%E7%A8%8B
 * **/



class Navigator1 extends Component{
    render(){
        return(

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

        );
    }
}



class SampleComponent extends React.Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        );
    }
}

class DrawerLayoutAndroid1 extends React.Component {

    getnNavigationView(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left',padding:10,backgroundColor:'rgba(0,0,0,0.1)'}}>
                    I'm in the Drawer!
                </Text>
            </View>
        )
    }

    render() {
        return (

            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={()=>this.getnNavigationView()}>
                <View style={{flex: 1}}>
                    <SampleComponent />
                </View>
            </DrawerLayoutAndroid>

        );
    }

}

export default class NavigatorExample extends Component {
    render() {
        return (
            <DrawerLayoutAndroid1 />
        )
    }
}