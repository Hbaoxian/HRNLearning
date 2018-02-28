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
    ListView,
} from 'react-native';

var hers = [{"imae":"pic1.png", "desc":"这是布局"},
    {"imae":"pic1.png", "desc":"这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡这是布局阿喀琉斯点击还是卡"},
    {"imae":"pic2.png", "desc":"这是布局"},
    {"imae":"pic4.png", "desc":"这是布局"},
    {"imae":"pic3.png", "desc":"这是布局"},
    {"imae":"pic2.png", "desc":"这是布局"},
];

var Dimensions = require('Dimensions');

var {width} = Dimensions.get('window').width;




export default class HListView extends  Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2})
        this.state = {
            dataSource: ds.cloneWithRows(hers)
        }
    }


    render(){
        return(
           <ListView
               dataSource={this.state.dataSource}
               renderRow={(a) => this.renderRowAction(a)}
           >



           </ListView>
        );
    }

    /*、返回具体的cell*/
    renderRowAction(rowData,selectId,rowId, heightLighRow){

        return(
            <TouchableOpacity activeOpacity={0.5}
                              onPress={this.selectAction()}
            >
            <View style={listViewStyle.cellStyle}>
               <Image style={listViewStyle.imageStyle}  source={{uri:rowData.imae}}>

               </Image>
                <Text numberOfLines={3}  style={listViewStyle.textStyle}>图片描述：
                    {rowData.desc}
                </Text>
            </View>
            </TouchableOpacity>

        );
    }

    selectAction(){
        AlertIOS.alert("111");

    }

}


const  listViewStyle = StyleSheet.create({

   container:{

   },
    cellStyle:{
       padding:10,
        borderBottomWidth:0.5,
        borderBottomColor:'black',
        flexDirection:'row',
    },
    imageStyle:{
       width:60,
        height:60,
        paddingRight:20,
    },

    textStyle:{
        paddingLeft: 10,
        width:240,
        paddingRight:10,
    }

});
