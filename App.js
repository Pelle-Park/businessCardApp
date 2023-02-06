import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./logo-kea.png')}  />
      </View>
      <Text>Copenhagen School of Design and Technology</Text>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://kea.dk/en')}>
        <Text style={styles.buttonText}>to learn more visite kea.dk</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
    imageContainer: {
      backgroundColor: 'red',
      padding: 15
  },
  button:{
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 24
  },
  buttonText: {
    color: 'white'
  }
});
