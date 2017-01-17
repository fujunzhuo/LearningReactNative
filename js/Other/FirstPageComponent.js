import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Navigator,
    TouchableOpacity
} from 'react-native';

import SecondPageComponent from '../Other/SecondPageComponent';

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:2,
            user:null
        };
    }
    _pressButton() {
        let _this = this;
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                params:{
                    id:this.state.id,
                    getUser:function (user) {
                        _this.setState({
                            user:user
                        });
                    }
                }
            })
        }
    }
    render() {
        if(this.state.user){
            return(
                <View style={styles.view}>
                    <Text style={styles.text}>
                        用户信息：{JSON.stringify(this.state.user)}
                    </Text>
                    <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <Text style={styles.text}>查询ID为{this.state.id}的用户信息</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else{
            return(
                <View style={styles.view}>
                    <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <Text style={styles.text}>查询ID为{this.state.id}的用户信息</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
      view :{
          height:700,
          backgroundColor:'rgba(0,0,0,0.3)'
      },
       text:{
          color:'white',
           fontSize:30
       }
});