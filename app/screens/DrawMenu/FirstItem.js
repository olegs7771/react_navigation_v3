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
  state = {
    removeAnim: new Animated.Value(1)
  };
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  _removeBtn = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };
  componentDidMount() {
    "cdm";
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onDidBlur={payload => {
            Animated.timing(this.state.removeAnim, {
              toValue: 1,
              easing: Easing.back(),
              duration: 5000
            }).start();
          }}
        />

        <Animated.View
          style={{
            opacity: this.state.removeAnim
          }}
        >
          <TouchableOpacity onPress={this._removeBtn}>
            <View style={styles.containerBtn}>
              <Text style={styles.text}> First Item </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

export default FirstItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  containerBtn: {
    borderColor: "#043b94",
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: "#5f87c9",
    padding: 10,
    width: "60%",
    alignSelf: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center"
  }
});
