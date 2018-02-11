import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,

} from 'react-native';



export  default class loginView extends Component {
    render(){
        return(
            <View style={loginStyle.container}>

                <Image style={loginStyle.imageStyle1} source={require('./img/pic1.png')}/>

                {/*账号密码*/}
                <TextInput  placeholder={'请输入账号'}
                            style={loginStyle.inputStyle}
                />
                <TextInput placeholder={'请输入密码'}
                           style={loginStyle.inputStyle}
                />

                <View>
                     <Text style={loginStyle.loginText}>
                          登陆
                     </Text>
                </View>

                <View  style={loginStyle.setting}>
                        <Text  >
                            无法登录
                        </Text>
                        <Text>
                            新用户
                        </Text>
                </View>
                <View style={loginStyle.otherLogin} >
                    <Text>
                        其他登陆方式:
                    </Text>

                    <Image style={loginStyle.imageStyle2}  source={require('./img/feng1.jpg')} />
                    <Image style={loginStyle.imageStyle2}  source={require('./img/feng2.jpg')} />
                    <Image style={loginStyle.imageStyle2}  source={require('./img/feng3.jpg')} />
                </View>


            </View>
        );
    }
}


const loginStyle = StyleSheet.create({
   container:{
       flex:1,
       /*内容居中显示*/
       alignItems:'center',
       // justifyContent:'center',
   },
   imageStyle1: {
        width:80,
        height:80,
        marginTop:50,
       borderRadius:40,
       borderWidth:2,
       borderColor:'orange',
       marginBottom:30,
   },
    inputStyle:{
        backgroundColor: 'white',
        height:30,
        marginBottom:2,
        textAlign:'center',
    },
    loginText: {
        backgroundColor:'orange',
        height:30,
        color: 'white',
        textAlign:'center',
        lineHeight:30,
        // justifyContent:'center',
        // alignItems:'center',
        width:200,
        borderRadius:10,
        // borderWidth:2,
        // borderColor:'white',
        marginTop:30,
        marginBottom:30,
    },
    setting:{
        flexDirection:'row',
        width:300,
        justifyContent:'space-between'
    },
    otherLogin:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:30,
        position:'absolute',
        bottom:40,
        left:20,
        alignItems:'center',
    },
    imageStyle2: {
       width:50,
        height:50,
        marginLeft:20,
        borderRadius:25,
    }



});
