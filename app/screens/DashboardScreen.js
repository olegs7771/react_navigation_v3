import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity
} from "react-native";

export default class DashboardScreen extends Component {
  _signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Dashboard </Text>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Other")}
          >
            <Text style={styles.text}> Other Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this._signOut}>
            <Text style={styles.text}> SignOut</Text>
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
  button: {
    backgroundColor: "#4287f5",
    padding: 5,
    marginRight: 3
  },
  text: {
    color: "white"
  },
  containerButton: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40
  }
});
