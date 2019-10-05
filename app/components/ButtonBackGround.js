import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const ButtonBackGround = props => {
  if (!props.disabled) {
    return (
      <View
        {...props}
        style={[styles.button, props.disabled ? styles.disabled : null]}
      >
        <Text style={styles.text}>{props.children}</Text>
      </View>
    );
  } else {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View
          {...props}
          style={[styles.button, props.disabled ? styles.disabled : null]}
        >
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default ButtonBackGround;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    color: "#ffffff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffffff",
    alignSelf: "center"
  },
  text: {
    color: "#ffffff",
    textAlign: "center"
  },
  disabled: {
    backgroundColor: "#999d9e",
    padding: 10
  }
});
