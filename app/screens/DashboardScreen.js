import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity,
  Alert
} from "react-native";
import TextTitle from "../components/TextTitle";
import CustomStyleText from "../components/CustomStyleText";
import { getActiveChildNavigationOptions } from "react-navigation";

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    props.navigation.setParams({ userName: "some name" });
  }
  _signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Other")}
          >
            <Text style={styles.text}> Other Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Places")}
          >
            <Text style={styles.text}> Places</Text>
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
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40
  },
  textTitle: {
    color: "#8e98e6"
  }
});
