import React, { Component } from 'react'
import { Text, View,TouchableOpacity,TextInput } from 'react-native'

export default class ResetEmail extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ alignSelf: 'center', marginVertical: 30, fontSize: 23, fontWeight: 'bold' }}> Reset-Email sent </Text>
                <View style={{marginLeft:20}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> ForgotPassword </Text>
                    <Text style={{ fontSize: 15,padding:10 }}>We have sent a instructions email to Nawfazim@icloud.com having Problem </Text>
                </View>
                {/* <TextInput placeholder='Enter your email address' style={{marginLeft:20,borderBottomWidth:1,marginRight:10}}></TextInput> */}
<TouchableOpacity style={{alignItems:'center',marginTop:100,backgroundColor:'#c94a5b',padding:18,borderRadius:20,width:250,marginLeft:60}}>
    <Text style={{color:'white'}}>Sent Again</Text>
</TouchableOpacity>



            </View>
        )
    }
}