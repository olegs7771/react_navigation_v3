import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SharedPlacesItem = props => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Image source={props.image} />
      <Text>{props.text}</Text>
    </View>
  );
};

export default SharedPlacesItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "black"
  }
});
