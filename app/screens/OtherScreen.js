import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";

export default class OtherScreen extends Component {
  _showModel = () => {
    this.props.navigation.navigate("Modal");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Other Screen </Text>
        <Text> Here We gonna have Modal-Like page </Text>
        <View>
          <Button title="Model" onPress={this._showModel} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 35
  },

  modalButton: {}
});
