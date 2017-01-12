'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    DrawerLayoutAndroid
} = ReactNative;


export default class ListViewExample extends React.Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataArr = [];
        for(var i=0;i<1000;i++){
            dataArr.push('这是第' + ( i + 1 )+ '行数据！');
        }
        this.state = {
            dataSource: ds.cloneWithRows(dataArr),
        };
    }

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
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => {
                            return(
                                <View style={styles.container}>
                                    <Image style={styles.img} source={require('../img/01.jpg')} />
                                    <Text style={styles.text}>{rowData}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
            </DrawerLayoutAndroid>

        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height:100,
        flexDirection: 'row',
        backgroundColor:'#e0f6ff',
        borderRadius:5,
        justifyContent:'center',
        marginTop:20,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        borderWidth:1,
        borderColor:'red',

    },
    text:{
        fontSize:30,
        fontWeight:'100',
        color:'#009830',
        alignSelf:'center',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    img:{
        width:80,
        height:80,
        marginTop:10,
        marginRight:10
    },

});