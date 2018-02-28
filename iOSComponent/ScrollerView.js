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

/*scrollview必须要有一个确定的高度才可以使用*/

export default class scrollView extends Component {

    render(){
        return(
           <ScrollView horizontal={true}
                       showsHorizontalScrollIndicator={false}
                       pagingEnabled={true}
                       onMomentumScrollEnd={(e)=>this.scrollEnd(e)}

           >
               {this.renderChildView()}
           </ScrollView>
        );
    }

    renderChildView(){
        var allChild = [];
        var color = ['red','green','yellow','orange'];
        for (var i = 0 ; i < color.length ; i++) {

            allChild.push(
                <View key{i} style={{backgroundColor:color[i],width:375,height:120}}>
                    <Text key{i}>
                        {i}
                    </Text>

                </View>
            )
        }
        return allChild;
    }

    scrollEnd(e){

    AlertIOS.alert("isos");
    }


}