import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import react from "react";


function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PAYMENT SUCCEFUL</Text>
      <Text>
        When using shopping vocabulary you will most likely have to speak, doing
        an ESL shopping reading activity will help you learn the vocabulary.
        This will help you when you have to speak about shopping in the future.
        When using shopping vocabulary you will most likely have to speak, doing
        an ESL shopping reading activity will help you learn the vocabulary.
        This will help you when you have to speak about shopping in the future.
      </Text>

    <View style={styles.imgcontainer}>
      <Image style={styles.img} source={require("./assets/2.png")} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Get Started</Text>
      </TouchableOpacity>
      

    <View style={styles.allcircle}>
    
    <View style={styles.circ}></View>
    <View style={styles.circ}></View>
    <View style={styles.circle}></View>
    </View>

    <View style={styles.foottext}>
    <Text style={styles.leftfoot}>Previous</Text>
    </View>
    
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    marginTop: 30,
    paddingHorizontal: 16
  },

  imgcontainer: {
    flex: 4
  },

  header: {
    fontSize: 25,
    fontWeight: "bold",
  },

  img: {
    height: 300,
    width: 150,
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#6C63FF",
    alignSelf: "center",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 50,
  },

  btntext: {
    fontSize: 25,
    color: "white"
  },

  allcircle: {
    flex: 1,
  flexDirection: "row",
  alignSelf: "center",
  marginTop: 30,

  },

  circle: {
    height: 10,
    width: 20,
    backgroundColor: "#6C63FF",
    borderRadius: 20,
    marginRight: 5
  },

  circ: {
    height: 10,
    width: 10,
    backgroundColor: "grey",
    borderRadius: 20,
    marginRight: 5,
  },

  foot: {
    fontSize: 18,
  // marginLeft: 120,
    color: "grey"
  },

  leftfoot: {
    fontSize: 18,
    color: "grey",
    marginLeft: 20, 
  },

  foottext: {
    flex: 1
  },
});


export default App;