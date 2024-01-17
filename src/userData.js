import { StyleSheet, Text, View } from "react-native";
import {useRoute} from '@react-navigation/native';

const UserData = () => {
  const route = useRoute();
  console.log(route);
  return (
    <View>
      <Text style={styles.abcd2}>{route.params?.name}</Text>
      <Text style={styles.abcd2}>cvk pkho hyk</Text>
      <Text style={styles.abcd2}>cvk pkho hyk</Text>
      <Text style={styles.abcd2}>cvk pkho hyk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  abcd: {
    fontSize: 30,
    color: "yellow"
  },
  abcd1: {
    fontSize: 20,
    color: "blue"
  },
  abcd2: {
    fontSize: 20,
    color: "green"
  },
})

export default UserData