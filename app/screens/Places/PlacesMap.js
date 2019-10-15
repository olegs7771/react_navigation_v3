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
    },
    locationChosen: false
  };
  _pickLocation = e => {
    const { coordinate } = e.nativeEvent;
    this.map.animateToRegion({
      ...this.state.focusedRegion,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude
    });

    this.setState(prevState => {
      return {
        focusedRegion: {
          ...prevState.focusedRegion,
          latitude: coordinate.latitude,
          longitude: coordinate.longitude
        },
        locationChosen: true
      };
    });
  };
  render() {
    let marker;
    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedRegion} />;
    } else {
      marker = null;
    }
    return (
      <MapView
        {...this.props}
        initialRegion={this.state.focusedRegion}
        // region={this.state.focusedRegion} -> disabled
        // now we use animation for focused region
        onPress={this._pickLocation}
        //bind method to this class with ref
        //we create property to this class ( PlacesMap)
        ref={ref => (this.map = ref)}
        style={{
          height: 200,
          width: "100%",
          backgroundColor: "#b8bbbf",
          marginBottom: 5
        }}
      >
        {marker}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({});
