import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    /*可被点击组件*/
    TouchableOpacity,
    AlertIOS,
    ScrollView
} from 'react-native';

var TimeMinxin = require('react-timer-mixin')


var Dimensions = require('Dimensions');

var {width} = Dimensions.get('window').width;

export default class WelcomeVie extends Component {
    state = {
        currentPage:0
    }

    render(){
        return(
           <View style={welcomeStyle.container}>
              <ScrollView horizontal={true} pagingEnabled={true}

                          
              >
                  {this.loadWelcomeImages()}

              </ScrollView>
               <View style={welcomeStyle.wPageStyle}>
                   {/*装指示器 5个小点*/}
                   {this.renderPageView()}
               </View>
           </View>
        );
    }

    loadWelcomeImages() {

        var list = [{"image":"pic1.png"},
            {"image":"pic2.png"},
            {"image":"pic3.png"},
            {"image":"pic4.png"},  ]

        var imageArray = [];
        for (var i = 0; i < list.length; i ++) {
            imageArray.push(
                <Image key={i}  source={{uri:list[i].image}} style={{width:375, height:200}}/>
            )
        }
        return imageArray;
    }

    renderPageView() {

        var style;

        var pageArray = [];
        for (var  i = 0; i < 5; i++) {
            style = (i==this.state.currentPage)?{color:'orange'}:{color:'#ffffff'};

            pageArray.push(
               <Text key={i} style={[{fontSize:25,},style]}>
                  ·
               </Text>
            );
        }
        return pageArray;
    }




};


const welcomeStyle = StyleSheet.create({

    container: {
        // flex:1,

    },
    wPageStyle:{
        width:375,
        height:25,
        backgroundColor:'red',
        position: 'absolute',
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.2)',
        flexDirection:'row',
        justifyContent:'center',
    }


})
