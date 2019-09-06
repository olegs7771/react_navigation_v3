import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomStyleText = props => (
  <Text style={styles.textStyle}>{props.children}</Text>
);

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "monospace"
  }
});

export default CustomStyleText;
