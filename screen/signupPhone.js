import React, { Component } from 'react'
import { Text, View,TouchableOpacity,TextInput, Image } from 'react-native'

export default class SignUpPhone extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ alignSelf: 'center', marginVertical: 30, fontSize: 23, fontWeight: 'bold' }}> Login with HUNGER </Text>
                <View style={{marginLeft:20}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Get Started with Hunger </Text>
                    <Text style={{ fontSize: 15,padding:10 }}>Enter Your Phone Number to use Foodly  and Enjoy Your Food:) </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../pic/flag.png')} style={{left:15,top:20,height:25,width:50}}/>
                <TextInput placeholder=':+1(503)333-2982 ' style={{marginLeft:60,borderBottomWidth:1,}} keyboardType='number-pad'></TextInput>
                </View>
<TouchableOpacity style={{alignItems:'center',marginTop:100,backgroundColor:'#c94a5b',padding:18,borderRadius:20,width:250,marginLeft:60}}>
    <Text style={{color:'white'}}>SignUP</Text>
</TouchableOpacity>



            </View>
        )
    }
}