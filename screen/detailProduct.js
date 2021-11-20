import React, { Component } from 'react'
import { Text, View, Image,TouchableOpacity } from 'react-native'

export default class DetailProduct extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ }}>
                    <Image source={require('../pic/Burger.jpeg')} style={{height:260,width:370,borderBottomRightRadius:60,borderBottomLeftRadius:60}}
                    />
                </View>
                <Text style={{ fontSize: 25, marginHorizontal: 15 ,marginVertical:10}}> King Burger </Text>
                <Text style={{ fontSize: 20, marginHorizontal: 15, color: 'red' }}> Rp.10,000</Text>

                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <Image source={require('../pic/Star.png')} style={{ height: 50, width: 50, marginVertical: 10 }} />
                    <View>
                        <Text style={{ marginVertical: 15, marginHorizontal: 15, fontWeight: 'bold' }}>Delivery </Text>
                        <Text style={{ marginHorizontal: 15, }}>4+ </Text>
                    </View>
                </View >
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <Image source={require('../pic/timer.jpeg')} style={{ height: 50, width: 50, marginVertical: 10 }} />
                    <View>
                        <Text style={{ marginHorizontal: 15, marginVertical: 15, fontWeight: 'bold' }}>Rating</Text>
                        <Text style={{ marginHorizontal: 15, }}>20-30 minutes </Text>
                    </View>
                </View>
                <TouchableOpacity style={{ alignItems: 'center', marginTop: 60, backgroundColor: '#F47554', padding: 15, borderRadius: 20, width: 250, marginLeft: 60, }}>
                    <Text style={{ color: 'black' }}>ADD TO CART!</Text>
                </TouchableOpacity>
            </View>
        )

    }
}