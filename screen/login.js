import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,TextInput } from 'react-native'

export default class login extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>


        <View style={{ flex: 1, backgroundColor: "#F47554", borderBottomLeftRadius: 150, borderBottomRightRadius: 300, position: 'absolute', alignSelf: 'center', width: 480, height: 400 }} >
          <Image source={require('../pic/logo.png')} style={{ justifyContent: 'center', alignSelf: "center" }} />
          <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}>HUNGER</Text>


        </View>

        <View style={{ flex: 1, marginTop: 255, borderRadius: 25, marginLeft: 50, marginRight: 33, marginBottom: 55, position: 'relative', width: 250, borderWidth: 3, backgroundColor: 'white' }}>

          <View style={{ flex: 1, flexDirection: 'row', borderRadius: 2, marginTop: 5 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 22, borderWidth: 1, textAlign: 'center', backgroundColor: '#F47554', borderRadius: 20, height: 40, width: 110, margin: 5 }}>login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 22, borderWidth: 1, textAlign: 'center', backgroundColor: 'white', borderRadius: 20, height: 40, width: 110, margin: 5 }}>signUp</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 200,marginTop:30 }}>
            <TextInput placeholder="Enter Email or userName" style={{ borderBottomWidth: 1, margin: 3, top: 20 }} />
            <TextInput placeholder="Password" style={{ borderBottomWidth: 1, margin: 5, top: 20 }} />
            <Text style={{ top: 20, left: 120 }}>Forget Password?</Text>

            <TouchableOpacity style={{ top: 20 }}>
              <Text style={{ borderWidth: 1, backgroundColor: '#F47554', textAlign: 'center', height: 50, top: 15, borderRadius: 40, fontSize: 26,color:'white' }}>Login</Text>
            </TouchableOpacity>
            <Text style={{ top: 50, textAlign: 'center', fontSize: 20 }}>OR</Text>
            <View style={{flexDirection:'row',top:80}}>
              <Image source={require('../pic/facebook.jpeg')} style={{height:50,width:50,left:20,borderRadius:30}}/>
              <Image source={require('../pic/google.png')}style={{height:50,width:50, left:50,borderRadius:30}}/>
              <Image source={require('../pic/twitter.png')}style={{height:50,width:50,left:80,borderRadius:30}}/>
            
            </View>
          </View>
        </View>



      </View>
        )
    }
}
