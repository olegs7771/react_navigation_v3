import React, { Component } from "react";
import { Text, StyleSheet, View, AsyncStorage } from "react-native";

export default class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this._isAuthToken();
  }
  _isAuthToken = async () => {
    const token = await AsyncStorage.getItem("authToken");
    this.props.navigation.navigate(token ? "App" : "Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Loader.... </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
