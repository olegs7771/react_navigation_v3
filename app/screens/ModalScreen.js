import React, { Component } from "react";
import { Text, StyleSheet, View, Modal, TouchableOpacity } from "react-native";

export default class ModalScreen extends Component {
  render() {
    let modalConent;
    if (this.props.modal) {
      modalConent = (
        <View style={styles.container}>
          <Text>This Is Modal </Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={this.props.modalClose}
          >
            <Text style={styles.textTitle}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      // <Modal
      //   visible={this.props.modal}
      //   transparent={false}
      //   animationType="slide"
      // >
      <View>{modalConent}</View>
      // </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,

    alignItems: "center"
  },
  modalButton: {
    backgroundColor: "#9532a8",
    padding: 5
  },
  textTitle: {
    color: "white"
  }
});
