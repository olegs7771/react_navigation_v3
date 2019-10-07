import React, { Component } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

export class ThirdItem extends Component {
  render() {
    return (
      <View>
        <Text> Third Item </Text>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
}

export default ThirdItem;
