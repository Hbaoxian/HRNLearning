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
import  LoinView from  './loginView'

/*点击事件*/
import TouchActionView from  './iOSComponent/touchAction'

/*生命周期*/
import LifeCycleView from  './iOSComponent/lifrCycle'


/*scrollview*/
//import ScrollView from './iOSComponent/ScrollerView'

/*轮播图项目*/
import WelComeView from './iOSComponent/Welcome'


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TextInput,

} from 'react-native';
//import LoadingView from "../RNWeChat/app/views/LoadingView";

/*引入内库*/
var Dimensions = require('Dimensions');

/*引入外部的js文件*/


export default class hBXRNLearning extends Component {
    render(){
        return(
           <WelComeView/>
        );
    }
}


/******************************左右上下布局 *************************************************************8/
/*
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
*/


/*

export default   class secondExample extends  Component {
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
*/
/******************************读取全局属性 *************************************************************8/

/*练习3*/
/*
export  default  class  thirdExample extends  Component {

    render(){
        return(

            <View style={styleb1.viewStyle} >
                <Text style={styleb1.screenStyle}>
                   // {/*屏幕分辨率
                    当前屏幕宽度:{Dimensions.get('window').width}
                </Text>
                <Text style={styleb1.screenStyle}>
                    //{/*屏幕分辨率
                    当前屏幕宽度:{Dimensions.get('window').height}
                </Text>

            </View>

        );
    }
}*/
/******************************  文本组件学习 *************************************************************8/

/*文本组件学习*/
/*export  default  class componentText extends  Component {

    render(){
     return(

         <View style={textStyle.viewStyle}>


             <View>

                 <Text style={textStyle.textStyle} >
                     我的文本样式
                 </Text>

             </View>
         </View>

     );
    }
}*/

/******************************  图片组件学习 *************************************************************8/

/* 图片组件联系 */

/*es5  的写法*/
/*
var imageClass = React.createClass({

  render(){
      return(
          <View style={imageStyle.viewStyle}>

              <Text>
                  加载本地的图片
              </Text>
              <Image style={imageStyle.imageStyle3} source={require('./img/animal2.jpeg')}>

              </Image>

              <Text>
                  加载网络上的图片
              </Text>
              <Image style={imageStyle.imageStyle} source={{uri:'http://img3.redocn.com/tupian/20150421/xiaohuakafeikafeibeibiankuangsucai_4013296.jpg'}}>
              </Image>

              <Text>
                  设置图片为背景
              </Text>


              <Image style={imageStyle.imageStyle1} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518165961529&di=c55dc827117098540f80b31bc68e287b&imgtype=0&src=http%3A%2F%2Fxysj.cditv.cn%2F2015%2F0429%2F20150429030754551.png'}}>
              </Image>


              <Image style={imageStyle.imageStyle4} source={require('./img/feng4.jpg')}>
                  <Text style={{backgroundColor:'red', fontSize:12}}>
                      背景是图片
                  </Text>
              </Image>
          </View>
      );
  }

})
*/

/*九宫格案例讲解*/
//
// var imageCollect = React.createClass({
//
//     render(){
//         return (
//           <View>
//
//
//           </View>
//         );
//     }
//
// })





// export default class InputConponment extends Component {
//
//     render(){
//         return(
//             <View style={inputStyle.container}>
//                 <TextInput value={'我是默认文字'} maxLength={200} multiline={true} style={inputStyle.style1}/>
//             </View>
//         );
//     }
// }

const inputStyle =StyleSheet.create({
    container: {
      flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },

    style1: {
        width: 220,
        height: 40,
        // backgroundColor: 'red',

    }

});




/****************************** 九宫格类 *************************************************************8/


/*定义一些全局变量*/

var Dimensions = require('Dimensions');

var screenWidth = Dimensions.get('window').width;

var cols = 3;

var boxWith = 100;

/*横向间距*/
var vmarge = (screenWidth - cols * boxWith)/(cols + 1);

/*、垂直间距*/
var hMarge  = 20;


// export default class imageCollect extends Component {
//     render(){
//         return (
//           <View style={imageConllectStyle.container}>
//               {this.renderALlImageConnect()}
//           </View>
//         );
//     }
//     //返回view的函数
//     renderALlImageConnect(){
//         /*1 定义一个数组
//          */
//
//         var imageArray = [];
//         /*引入数据*/
//         var data = [{"img":"pic1.png"},{"img":"pic1.png"},{"img":"pic3.png"},{"img":"pic4.png"},{"img":"pic1.png"},{"img":"pic1.png"},{"img":"pic3.png"},{"img":"pic4.png"}];
//
//         console.log(data);
//
//         /*创建组件*/
//         for (var i = 0; i < data.length; i ++) {
//             imageArray.push(
//                 <View style={imageNineStrye.imageSuperView}  key={i}>
//                     <Image style={imageNineStrye.imageStyle} source={{uri:data[i].img}}>
//
//                     </Image>
//                     <Text>
//                         {data[i].img}
//                     </Text>
//                 </View>
//             )
//
//         }
//         return imageArray;
//     }
//
// }




const imageNineStrye = StyleSheet.create({
    imageSuperView: {
        alignItems:'center',
        width: boxWith,
        height: boxWith,
        marginLeft: vmarge,
        marginTop: hMarge,
      // width: ,
      // height: 50,
        // backgroundColor:'red',
    },
    imageStyle:{
        width: 90,
        height: 90,
    }

});

/*九宫格样式学习*/
const  imageConllectStyle = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        /*修改主轴的防线 从左向右*/
        flexDirection:'row',
        /*、换行显示*/
        flexWrap:'wrap'

    },
    imageStyle1:{


    },
    imageStyle2: {

    }
});



/*图片样式学习*/

const imageStyle = StyleSheet.create({

    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imageStyle:{
        width:100,
        height:100,

    },
    imageStyle1:{
        width:100,
        height:100,

    },
    imageStyle3:{
        width:100,
        height:100,

    },
    imageStyle4:{
        width:100,
        height:100,

    },
    textStyle:{


    },

});



/****
 *
 * 文本样式学习
 *
 * */
const textStyle = StyleSheet.create({
    viewStyle: {
        flex:1,
        justifyContent: 'center',
        backgroundColor:'#f5fcff'
    },

    textSuperStyle: {
        height:150,
        flexDirection:'row',
        alignItems:'center',
    },

    textStyle: {
        // height:150,
        backgroundColor:'green',
        /*行数固定 不在style里面设置*/
        textAlign:'center',
        // /*行高*/
        // lineHeight: 30,

        /*垂直居中 与css处理思路一样，老版本不支持*/
        // height:150,
        // textAlign:'center',
        // lineHeight: 150,


        /*flex布局 只使用与子控件*/
        // height: 150,
        // /*主轴设置*/
        // flexDirection:'row',
        // /*副轴步骤*/
        // alignItems:'center',
    }

});





/**flexbox布局技术
*
* 1 主轴方法  默认朝下排列  自视图的排列方向 x轴
 *  侧轴  y轴
*   主轴排列不了再往侧轴排列
*   修改主轴的方向 修改父视图的主轴
* */

const styleb1 = StyleSheet.create({
    viewStyle: {
        /*屏幕居中显示*/
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    screenStyle: {

    },

});

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
