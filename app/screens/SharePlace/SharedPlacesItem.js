import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SharedPlacesItem = props => {
  return (
    <View style={[styles.container]}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>{props.name}</Text>
      </View>
      <View style={styles.containerImage}>
        <Image source={props.image} style={{ width: "100%", height: 200 }} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

export default SharedPlacesItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#0f5370",
    marginVertical: 5
  },
  textTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#ffffff"
  },
  containerText: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  containerImage: {
    borderColor: "#ffffff",
    borderWidth: 2
  },
  text: {
    color: "#ffffff"
  }
});
