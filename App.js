import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import react from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ONLINE SHOPPING</Text>
      <Text>
        When using shopping vocabulary you will most likely have to speak, doing
        an ESL shopping reading activity will help you learn the vocabulary.
        This will help you when you have to speak about shopping in the future.
        When using shopping vocabulary you will most likely have to speak, doing
        an ESL shopping reading activity will help you learn the vocabulary.
        This will help you when you have to speak about shopping in the future.
      </Text>

      <Image style={styles.img} source={require("./assets/1.png")} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Next</Text>
      </TouchableOpacity>

    <View style={styles.allcircle}>
    <View style={styles.circle}></View>
    <View style={styles.circ}></View>
    <View style={styles.circ}></View>
    </View>

    <Text style={styles.foot}>Skip</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
    marginLeft: 20,
  },

  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10
  },

  img: {
    height: 450,
    width: 300,
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#6C63FF",
    alignSelf: "center",
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },

  btntext: {
    fontSize: 25,
    color: "white"
  },

  allcircle: {
  flexDirection: "row",
  alignSelf: "center",
  marginTop: 50,

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
    marginRight: 5
  },

  foot: {
    fontSize: 18,
    textAlign: "right",
    marginRight: 30,
    color: "grey"
  }
});
