import { View, Text, Button, SafeAreaView, ScrollView, Image, TextInput, FlatList, SectionList, Modal } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import useToggle from './toggle';
import UserData from './userData';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

const index = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const [data, setData] = useState("initial Data");
  const scrollViewRef = useRef(null);

  let array = [
    1,
    2,
    3,
    4,
    5,
  ];

  const user = [
    {
      id: 1,
      name: "denis",
      data: ["c", "c+", "java"],
    },
    {
      id: 2,
      name: "gaurav",
      data: ["PHP", "React", "Angular"],
    }, {
      id: 3,
      name: "darshan",
      data: ["Java", "JS", "HTML"],
    }, {
      id: 4,
      name: "tony",
      data: ["CSS", "Bootsteap", "HTML"],
    }
  ];

  useEffect(() => {
    if (count == 5) {
      setData("Update Data");
    }
  }, []);

  const handleClick = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animition: true });
  }

  const [isOn, toggleIsOn] = useToggle(false);

  const [textValue, setTextValue] = useState("Denis");

  const [showModel, setShowModel] = useState(false);

  return (
    <SafeAreaView >
      <ScrollView ref={scrollViewRef}>
        {
          array.map((value, index) => (
            <Text>Hello world</Text>
             ),
          )}

        <FlatList
          data={array}
          renderItem={({ item }) => <Text>{item}</Text>}

        />
        <SectionList
          sections={user}
          renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item}</Text>}
          renderSectionHeader={({ section: { name } }) => <Text style={{ fontSize: 30 }}> {name} </Text>}
        />
        <Text>{isOn ? 'ON' : 'OFF'}</Text>
        <Image
          source={require("../assets/images/cake.jpg")}
          style={{ width: 300, height: 100, Colors: 'yellow' }}
          resizeMode={'contain'}
        >
        </Image>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wedding_cake_with_pillar_supports%2C_2009.jpg/1200px-Wedding_cake_with_pillar_supports%2C_2009.jpg" }}
          style={{ width: "70%", height: 100, Colors: 'red' }}
          resizeMode={'stretch'}
        >
        </Image>
        <TextInput
          style={{ borderWidth: 1, padding: 10, borderRadius: 4, margin: 20, borderRadius: 30, borderColor: 'blue' }}
          value={textValue}
          secureTextEntry={false}
          placeholder='Demo App'
          onChangeText={value => { setTextValue(value) }}

        />
        <Button title={'Scroll To Top'} onPress={() => {
          // navigation.navigate('Userdata', { name: 'Denis'});
          setShowModel(true);
        }} />
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
        <Text style={{ fontSize: 20 }}>cvk pkho hyk</Text>
        <Modal visible={showModel} transparent={true}>
          <UserModel setmodel={setShowModel} sfd={"fdghjk"}/>
        </Modal>
        <UserData />
      </ScrollView>
    </SafeAreaView>
  )
}

const UserModel = ({setmodel,sfd}) => {
  return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ backgroundColor: 'blue', padding: 40, borderRadius: 10 }}>
      <Text> Text ldkvfmo lkthjio </Text>
      <Button title='Close' onPress={() => {
        setmodel(false);
        console.log(sfd);
      }}> </Button>
    </View>
  </View>)
}

export default index