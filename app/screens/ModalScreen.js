import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default class ModalScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This Is Modal </Text>
        <Button
          title="Detail"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
      </View>
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
