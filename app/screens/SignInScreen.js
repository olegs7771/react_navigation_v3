import React, { Component } from "react";
import { Text, StyleSheet, View, Button, AsyncStorage } from "react-native";

class SignInScreen extends Component {
  _signIn = async () => {
    await AsyncStorage.setItem("authToken", "abc");
    console.log("signed");

    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
        <Button title="SignIn" onPress={this._signIn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  }
});

export default SignInScreen;
