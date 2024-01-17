import { View, Text, Button, Image, } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { addToCart, removeFromCart } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'


const Product = ({ item }) => {

    const dispatch = useDispatch();

    const handelAddTOCart = (itemList) => {
        dispatch(addToCart(itemList));
        console.log("itemList", addToCart(itemList));
    }

    const hendelRemoveFromCart = (itemList) => {
        dispatch(removeFromCart(itemList.name));
    }

    const cartItems = useSelector((state) => state.reducer);

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        let result = cartItems.filter((element)=>{
            return element.name === item.name
        })
        if(result.length) {
            setIsAdded(true)
        }else {
            setIsAdded(false)
        }
    }, [cartItems])



    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10, marginBottom: 50 }}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.color}</Text>
            <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
            {
                isAdded ?
                    <Button title='Remove To Cart' onPress={() => hendelRemoveFromCart(item)} />
                    :
                    <Button title='Add To Cart' onPress={() => handelAddTOCart(item)} />
            }
        </View>
    )
}

export default Product