import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default class InputForm extends Component {
  render() {
    const { placeholder, onChangeText } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingTop: 10,
    width: "100%",
    marginBottom: 10
  },
  textInput: {
    backgroundColor: "#fcfcfc",
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#838ceb"
  }
});
