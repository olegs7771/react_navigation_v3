import React from "react";
import { Text, StyleSheet } from "react-native";

const TextTitle = props => (
  <Text {...props} style={[styles.textTitle, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#416ee0",
    fontWeight: "bold"
  }
});

export default TextTitle;
