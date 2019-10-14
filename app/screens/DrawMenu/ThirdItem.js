import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import MapView from "react-native-maps";

export class ThirdItem extends Component {
  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };
  render() {
    return <MapView style={{ flex: 1 }} />;
  }
}

export default ThirdItem;
