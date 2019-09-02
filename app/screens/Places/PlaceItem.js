import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const PlaceItem = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerTouchable}>
        <Image />
        <Text style={styles.text}>{props.name}</Text>
        <Image source={props.image} style={{ width: "100%", height: 100 }} />
      </TouchableOpacity>
    </View>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "flex-start",
    width: "40%",
    marginBottom: 5
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    color: "#4f7e9e"
  },

  containerTouchable: {
    padding: 10,
    backgroundColor: "#ffffff"
  }
});
