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
    TabBarIOS,

    ListView,
} from 'react-native';


import Welcome from './lifrCycle'
import HListView from './ListView'

export default class HTabbarVC extends Component{

constructor(props){
    super(props);
    state = {
        title : '生活',
    }

}



render(){

    return(
        <View style={tabStyle.container}>
            <TabBarIOS barTintColor='black'>
               <TabBarIOS.Item
                   systemIcon="downloads"
               >
                   <Welcome/>
               </TabBarIOS.Item>


                <TabBarIOS.Item
                    systemIcon="contacts"
                >
                    <HListView/>

                </TabBarIOS.Item>


                <TabBarIOS.Item
                    systemIcon="search"
                >
                    <Welcome/>
                </TabBarIOS.Item>


                <TabBarIOS.Item
                    systemIcon="bookmarks"
                >
                    <HListView/>
                </TabBarIOS.Item>


            </TabBarIOS>
        </View>
    );
}

}


const tabStyle = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#ffffff',

    }


})
