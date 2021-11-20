import React, { Component } from 'react'
import { Text, View,TouchableOpacity,TextInput, Image } from 'react-native'

export default class VerfyNumber extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ alignSelf: 'center', marginVertical: 30, fontSize: 23, fontWeight: 'bold' }}> Login with HUNGER </Text>
                <View style={{marginLeft:20}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Get Started with Hunger </Text>
                    <Text style={{ fontSize: 15,padding:10 }}>Enter Your Phone Number to use Foodly  and Enjoy Your Food:) </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    
                <TextInput  style={{ margin:2,left:70, top:30,borderBottomWidth:1}} keyboardType='number-pad'></TextInput>
                <TextInput style={{margin:2,left:100, top:30,borderBottomWidth:1}} keyboardType='number-pad'></TextInput>
                <TextInput style={{margin:2,left:120, top:30,borderBottomWidth:1}} keyboardType='number-pad'></TextInput>
                <TextInput   style={{margin:2,left:160, top:30,borderBottomWidth:1}}keyboardType='number-pad'></TextInput>
                </View>
<TouchableOpacity style={{alignItems:'center',marginTop:100,backgroundColor:'#c94a5b',padding:18,borderRadius:20,width:250,marginLeft:60}}>
    <Text style={{color:'white'}}>SignUP</Text>

</TouchableOpacity>



            </View>
        )
    }
}