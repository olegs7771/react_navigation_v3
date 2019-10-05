import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { NavigationEvents } from "react-navigation";

export class FirstItem extends Component {
  render() {
    const cat = {
      legs: 4,
      sound: "meow"
    };
    const dog = {
      ...cat,
      legs: 5
    };

    console.log("dog", dog);

    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}

export default FirstItem;
