/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*面向组件开发*/
/*、ios的对象在rn中是组件*/
/*AppRegistry 注册*/
/*StyleSheet 样式*/
/*Text 文本组件*/
/*View 视图组件 */

/*hBXRNLearning 最终会变成组件*/

/*render() 初始化函数 viewdidload  return具体的内容*/

/*const styles = StyleSheet.create 样式*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TextInput,

} from 'react-native';

export default class hBXRNLearning extends Component {
  render() {
    return (
      <View style={myStyle.container}>


          <Text>

          wwwww

          </Text>

        <TextInput   style={myStyle.container}>

        </TextInput>
        {/*<Text style={styles.welcome}>*/}
          {/*Welcome hell baby to React Native!*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*To get started, edit index.ios.js*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*Press Cmd+R to reload,{'\n'}*/}
          {/*Cmd+D or shake for dev menu*/}
        {/*</Text>*/}
      </View>
    );
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

const myStyle = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    }


});


AppRegistry.registerComponent('hBXRNLearning', () => hBXRNLearning);
