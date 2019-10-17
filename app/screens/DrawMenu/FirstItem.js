import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { NavigationEvents } from "react-navigation";

export class FirstItem extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={event => console.log("event", event.type)}>
            <View style={styles.containerBtn}>
              <Text style={styles.text}>Some text</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingTop: 50
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  containerBtn: {
    backgroundColor: "#1b262b",
    borderRadius: 5,
    padding: 5,
    width: "70%",
    alignSelf: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "red"
  }
});

export default FirstItem;
