import { View, Text, Button, SafeAreaView, ScrollView, Image, TextInput, FlatList, SectionList, Modal } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'


const Header =()=> {
    const cartData = useSelector((state) => state.reducer);
    const [cartItems , setCartItem]=useState(0);

    useEffect(()=>{
        setCartItem(cartData.length);
    }, [cartData])

    return(
        <View>
            <Text style={{fontSize:30}}>{cartItems}</Text>
        </View>
    )
}

export default Header