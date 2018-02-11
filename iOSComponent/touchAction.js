
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
    AlertIOS
} from 'react-native';

/*获取点击事件*/
export default class touchActionView extends Component {

   state = {
       title:'默认人',
   }

    render(){
        return(
            <View style={touchActionViewStyle.container}>
                <TouchableOpacity activeOpacity={0.3}
                                  onPress={()=>this.click('点击')}
                                  onPressIn={()=>this.click('按下')}
                                  onPressOut={()=>this.click('起来')}
                                  onLongPress={()=>this.click('长按')}
                >
                    <Text>
                        {this.state.title}
                        我是touch组件
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }


    click(event) {
        // AlertIOS.alert('来了');
        this.setState({
            title:event
        })
    }

}


const  touchActionViewStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    }

});