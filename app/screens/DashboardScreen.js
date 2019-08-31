import React, { Component } from "react";
import { Text, StyleSheet, View, Button, AsyncStorage } from "react-native";

export default class DashboardScreen extends Component {
  _signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Dashboard </Text>
        <Button
          title="other screen"
          onPress={() => this.props.navigation.navigate("Other")}
        />
        <Button title="signout" onPress={this._signOut} />
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
