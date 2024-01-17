import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from './index';
import Header from './component/header';
import UserData from './userData';
import Product from './component/product';
import { View,Text, Image, ScrollView, Button } from 'react-native'

const Stack = createNativeStackNavigator();

const main = () => {

    const products = [
        {
            name: "Samsung Mobile",
            color: 'white',
            price: 30000,
            image: "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=sph"
        },
        {
            name: "Apple Mobile",
            color: 'black',
            price: 50000,
            image: "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=sph"
        },
        {
            name: "Nokia Mobile",
            color: 'green',
            price: 10000,
            image: "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=sph"
        }
    ]

    

    return <View>
        <Header />
        <ScrollView>
        {
            products.map((item) => <Product item = {item}/>)
        }
        </ScrollView>
        
    </View>
}

export default main

{/* <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Header" component={Header}/>
            <Stack.Screen name="Product" component={Product}/>
            <Stack.Screen name="Home" component={index}/>
            <Stack.Screen name="Userdata" component={UserData} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer> */}