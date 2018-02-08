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

          <View style={myStyle.smallView}>
              <Text style={myStyle.textStyle}>
                  我是里面的view
              </Text>


              <Text >
                  我是下面view
              </Text>
          </View>

          <View style={myStyle.smallView}>
              <Text style={myStyle.textStyle}>
                  我是右边
              </Text>
          </View>


      </View>
    );
  }
}


export default   class secondExample extends  Component {

    


}

/**flexbox布局技术
*
* 1 主轴方法  默认朝下排列  自视图的排列方向 x轴
 *  侧轴  y轴
*   主轴排列不了再往侧轴排列
*   修改主轴的方向 修改父视图的主轴
* */

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

const myStyle = StyleSheet.create({
    container: {
          /* 达到全屏 */
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
         /*、修改主轴的方向 默认是垂直方向*/
         /*、column 冲还是那个到下  row 是从左往右
         * row-reverse 从右往左  column-reverse 从下到上
         * */
         flexDirection: 'column-reverse',
    },
    smallView: {
        width: 200,
        height: 80,
        backgroundColor: 'red',
    },
    textStyle:{
       fontSize:14,
       color: 'red',
        backgroundColor:'black'
    },

    bottom:{
      fontSize:17,
      backgroundColor:'yellow',
    },
});


AppRegistry.registerComponent('hBXRNLearning', () => hBXRNLearning);
