import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export default class ConfrimOrder extends Component {
    render() {
        return (
            <View style={{flex:1,position:'relative'}}>
            <View style={{flex:1,}}>
                <View style={{flexDirection:'row'}}> 
                <Text style={{fontSize:18,top:30,color:'black',left:10}}>CookiesSandWhich</Text>
                <Text style={{left:100,top:30,color:'red'}}>USD:15.00</Text>
                </View>
<Text style={{top:50,left:10,fontSize:18,color:'#868686'}}>ShortBread,Chocalate,cookies and Shake</Text>
                 </View>
            
                 <View style={{flex:1,}}>
                <View style={{flexDirection:'row'}}> 
                <Text style={{fontSize:18,top:30,color:'black',left:10}}>Combo Burger</Text>
                <Text style={{left:140,top:30,color:'red'}}>USD:15.00</Text>
                </View>
<Text style={{top:50,left:10,fontSize:18,color:'#868686'}}>ShortBread,Chocalate,cookies and Shake</Text>
                 </View>

 <View style={{flex:1,}}>
 <View style={{flexDirection:'row'}}> 
                <Text style={{fontSize:18,top:30,color:'black',left:10}}>Sub Total</Text>
                <Text style={{left:160,top:30,color:'red'}}>USD:15.00</Text>
                
                </View>
                <View style={{flexDirection:'row'}}> 
                <Text style={{fontSize:18,top:30,color:'black',left:10}}>Devlivery</Text>
                <Text style={{left:160,top:30,color:'red'}}>USD:15.00</Text>
                
                </View>
                <View style={{flexDirection:'row'}}> 
                <Text style={{fontSize:18,top:30,color:'black',left:10}}>Total(+incluTex)</Text>
                <Text style={{left:100,top:30,color:'red'}}>USD:15.00</Text>
                
                </View>
                 </View>
                 <TouchableOpacity  style={{marginBottom:50}}>
              <Text style={{ borderWidth: 1, backgroundColor: '#F47554', textAlign: 'center', height: 50, top: 15, borderRadius: 40, fontSize: 26,color:'white' }}>CheckOut</Text>
            </TouchableOpacity>
          </View>
        )
    }
}
