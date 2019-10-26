import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, Button } from "react-native";

import MapView from "react-native-maps";
import { connect } from "react-redux";
import { getCurrentLocation } from "../../../action/locationAction";

class PlacesMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedRegion: {
        latitudeDelta: 0.0122,
        longitudeDelta:
          (Dimensions.get("window").width / Dimensions.get("window").height) *
          0.0122
      },
      locationChosen: false
    };

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
    //Get Location Data to Redux
    const data = {
      longitude: this.state.focusedRegion.longitude,
      latitude: this.state.focusedRegion.latitude,
      longitudeDelta: this.state.focusedRegion.longitudeDelta,
      latitudeDelta: this.state.focusedRegion.latitudeDelta
    };
    this.props.getCurrentLocation(data);
  };
  render() {
    let marker;
    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedRegion} />;
    } else {
      marker = null;
    }

    if (this.state.focusedRegion.latitude) {
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
          {this.state.locationChosen ? null : (
            <Button title="Pick Location On Map" color="#92abd4" />
          )}
        </View>
      );
    } else {
      return (
        <View>
          <Text>Loading..</Text>
        </View>
      );
    }
  }
}

export default connect(
  null,
  { getCurrentLocation }
)(PlacesMap);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5
  }
});
