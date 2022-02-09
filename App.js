import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import react from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ONLINE SHOPPING</Text>
      <Text>When using shopping vocabulary you will most likely have
        to speak, doing an ESL shopping reading activity will help 
        you learn the vocabulary.
        This will help you when you have to speak about shopping 
        in the future. When using shopping vocabulary you will most
         likely have to speak, doing an ESL shopping reading activity
          will help you learn the vocabulary. This will 
        help you when you have to speak about shopping in the future.</Text>
      
        <Image source={require({})} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
    marginLeft: 20,
  },

  header: {
    fontSize: 25,
    fontWeight: "bold",

  }
});
