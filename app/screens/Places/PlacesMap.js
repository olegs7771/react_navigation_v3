import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
export default class PlacesMap extends Component {
  state = {
    focusedRegion: {
      latitude: 32.8497427,
      longitude: 35.0700571,
      latitudeDelta: 0.0122,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0122
    }
  };
  _pickLocation = e => {
    const { coordinate } = e.nativeEvent;
    console.log("coordinate", coordinate);

    this.setState(prevState => {
      return {
        focusedRegion: {
          ...prevState.focusedRegion,
          latitude: coordinate.latitude,
          longitude: coordinate.longitude
        }
      };
    });
  };
  render() {
    return (
      <MapView
        {...this.props}
        initialRegion={this.state.focusedRegion}
        region={this.state.focusedRegion}
        onPress={this._pickLocation}
        style={{
          height: 200,
          width: "100%",
          backgroundColor: "#b8bbbf",
          marginBottom: 5
        }}
      />
    );
  }
}

const styles = StyleSheet.create({});
