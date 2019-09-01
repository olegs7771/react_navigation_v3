import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import ModalScreen from "./ModalScreen";
export default class OtherScreen extends Component {
  state = {
    visible: false
  };

  _openModal = () => {
    this.setState({
      visible: true
    });
  };
  _modalClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ModalScreen modal={this.state.visible} modalClose={this._modalClose} />
        <Text> Other Screen </Text>
        <Text> Here We gonna have Modal pop up </Text>
        <View>
          <TouchableOpacity onPress={this._openModal}>
            <Text>Open Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  modalButton: {}
});
