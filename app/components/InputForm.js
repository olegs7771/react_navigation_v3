import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default class InputForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput {...this.props} style={styles.textInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginBottom: 10,
    width: "100%"
  },
  textInput: {
    backgroundColor: "#fcfcfc",
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#838ceb",
    width: "100%"
  }
});
