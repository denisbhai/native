import { View, Text, Button, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { combineReducers } from "redux";
import { Colors } from 'react-native/Libraries/NewAppScreen'
import useToggle from './toggle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

const index = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState("initial Data");
  const scrollViewRef = useRef(null);

  let array = Array(1000).fill(0);

  useEffect(() => {
    if (count == 5) {
      setData("Update Data");
    }
  }, []);

  const handleClick = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animition: true });
  }

  const [isOn,toggleIsOn] = useToggle(false);

  const [textValue,setTextValue]=useState("");

  return (
    <SafeAreaView >
      <ScrollView ref={scrollViewRef}>
        {/* {
          array.map((value, index) => (
            <Text>Hello world</Text>
          ),
        )} */}
        <Text>{isOn?'ON':'OFF'}</Text>
        <Image 
          source={require("../assets/images/cake.jpg")} 
          style={{width: 300, height: 100, Colors: 'yellow'}}
          resizeMode={'contain'}
         >
        </Image>
        <Image 
          source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wedding_cake_with_pillar_supports%2C_2009.jpg/1200px-Wedding_cake_with_pillar_supports%2C_2009.jpg"}} 
          style={{width: 300,height:100,Colors: 'red'}}
          resizeMode={'stretch'}
         >
        </Image>
        <TextInput 
          style={{borderWidth:1,padding:10,borderRadius:4,margin:20,borderRadius:30,borderColor:'blue'}} 
          value={textValue}
          placeholder='Demo App'
          onChangeText={value=>{setTextValue(value)}}
          
        />
        <Button title={'Scroll To Top'} onPress={toggleIsOn} />
        <FontAwesomeIcon icon={faArrowAltCircleRight}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index