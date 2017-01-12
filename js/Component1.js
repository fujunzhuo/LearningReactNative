'use strict';
import Navigator1 from './Component/Navigator';
import ActivityIndicator1 from './Component/ActivityIndicator';
import DatePickerIOS1 from './Component/DatePickerIOS';
import DrawerLayoutAndroid1 from './Component/DrawerLayoutAndroid';
import Image1 from './Component/Image';
import KeyboardAvoidingView1 from './Component/KeyboardAvoidingView';
import ListView1 from './Component/ListView';
var Component1 = {
    Navigator1:Navigator1,//导航器
    ActivityIndicator1:ActivityIndicator1,//显示一个圆形的loading提示符号
    DatePickerIOS1:DatePickerIOS1,//使用DatePickerIOS来在iOS平台上渲染一个日期/时间选择器
    DrawerLayoutAndroid1:DrawerLayoutAndroid1,//侧边栏 抽屉
    Image1:Image1,//
    KeyboardAvoidingView1:KeyboardAvoidingView1,//本组件可以自动根据键盘的位置，调整自身的position或底部的padding，以避免被遮挡
    ListView1:ListView1,
}


module.exports = Component1;