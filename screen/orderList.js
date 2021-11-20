import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class OrderList extends Component {
    render() {
        return (
            <View style={{flex:1}}>
               <View style={{flexDirection:'row',margin:50,borderWidth:0.3,padding:8,borderRadius:10}}>
               
                   <Image source={require('../pic/orderburger.png')} style={{borderRadius:30}}/>
                  
                   <View style={{left:80}}>
                   <Text style={{color:'red',}}>Kings Burger</Text>
               <Text style={{color:'red',top:20}}>Rp:110</Text>
                   </View>
                   </View>
                   <View style={{flexDirection:'row',margin:50,borderWidth:0.3,padding:8,borderRadius:10}}>
               
               <Image source={require('../pic/orderburger.png')} style={{borderRadius:30}}/>
              
               <View style={{left:80}}>
               <Text style={{color:'red',}}>Kings Burger</Text>
               <Text style={{color:'red',top:20}}>Rp:110</Text>
               </View>
               </View>
            </View>
        )
    }
}
