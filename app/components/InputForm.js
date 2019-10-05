import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default class InputForm extends Component {
  state = {
    valid: false
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.props.value.trim().length < 1 || this.props.valid) {
        this.setState({
          valid: true
        });
      } else {
        this.setState({
          valid: false
        });
      }
    }
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          !this.state.valid && this.props.touched ? styles.invalid : null
        ]}
      >
        <TextInput {...this.props} style={[styles.textInput]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#ffffff",
    // backgroundColor: "#2c5278",
    borderRadius: 5,
    width: "100%",
    padding: 5
  },
  textInput: {
    color: "#ffffff",
    fontSize: 22
  },
  invalid: {
    borderWidth: 1,
    backgroundColor: "#fa5555",
    borderColor: "#ffffff",
    borderRadius: 5,
    padding: 5
  }
});
