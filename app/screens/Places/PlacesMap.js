import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, Button } from "react-native";
import { connect } from "react-redux";
import { addLocation } from "../../../action/modalAction";

import MapView from "react-native-maps";
class PlacesMap extends Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition(geo_success => {
      this.setState(prevState => {
        return {
          focusedRegion: {
            ...prevState.focusedRegion,
            latitude: geo_success.coords.latitude,
            longitude: geo_success.coords.longitude
          }
        };
      });
    });

    this.state = {
      focusedRegion: {
        latitudeDelta: 0.0122,
        longitudeDelta:
          (Dimensions.get("window").width / Dimensions.get("window").height) *
          0.0122
      },
      locationChosen: false
    };
  }

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

  _confirmLocation = e => {
    console.log("this.state.focusedRegion", this.state.focusedRegion);
    const location = this.state.focusedRegion;
    this.props.getLocation(location);
  };

  render() {
    let marker;
    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedRegion} />;
    } else {
      marker = null;
    }

    if (
      this.state.focusedRegion.longitude &&
      this.state.focusedRegion.latitude
    ) {
      return (
        <View style={styles.container}>
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
          {this.state.locationChosen ? (
            <Button
              title="Confirm Location"
              color="#92abd4"
              onPress={this._confirmLocation}
            />
          ) : (
            <Button title="Pick Location On Map" color="#92abd4" />
          )}
        </View>
      );
    } else {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5
  }
});

export default connect(null, { addLocation })(PlacesMap);
