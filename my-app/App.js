import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textcomponent}>My name is <Text style={styles.name}>Selina</Text>.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textcomponent:{
 
     fontSize:24,
 
   },
   name:{
     fontWeight:'bold',
 
   },
 

 
});
