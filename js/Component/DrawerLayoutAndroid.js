'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    DatePickerIOS,
    StyleSheet,
    Text,
    TextInput,
    View,
    DrawerLayoutAndroid
} = ReactNative;



export default class DrawerLayoutAndroidExample extends React.Component {
    render(){
        var navigationView = (
            <View style={{flex: 1, backgroundColor: 'green'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left',backgroundColor:'red'}}>
                    I'm in the Drawer!
                </Text>
            </View>
        )

        return(
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={()=>navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );

    }

}