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

/**
* props 属性， 相当于oc中的readonly 只读属性
 * state 状态 每个组件都有一个setstate方法，用来改变状态，并且刷新界面 调用render函数
 *
 * render函数， 异步方法，不会立刻马上刷新
 *
 *  生命周期方法
 *  componmentWillMount方法 相当于viewWillappear
 *
 *
 *
* */
export default class lifeCycle extends Component {

    state={
        title:'默认值',
        presop: '张三'

    }

    /*视图即将出现*/
    componentWillMount(){
        /*render函数即将调用*/

    }

    componentDidMount() {
        /*render函数调用完成*/
        /*一般进行网络请求的地方*/
        /*生命周期 一般最多会调用2次*/
    }


    componentDidUpdate() {
        /*render函数UI视图有修改的时候 刷新UI完成之后*/
    }


    render(){
        return(
            <View  ref="topView"  style={lifeCycleStyle.container}>
                <Text>
                    {this.state.title}
                </Text>
                <Text>
                    {this.state.presop}
                </Text>
                <button title={"我就是个button"}
                    color={'red'}
                        onPress={btnClick}
                >
                </button>
            </View>
        );
    }


    clicl(){

        /*this.refs.topView;*/

    }

}


const btnClick = ()=>{

    AlertIOS.alert('哥们我来了');
}



const lifeCycleStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }

})
