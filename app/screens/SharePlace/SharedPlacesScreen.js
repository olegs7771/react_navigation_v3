import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SharedPlacesItem from "./SharedPlacesItem";

import { connect } from "react-redux";
import PlacesModal from "../Places/PlacesModal";

export class SharedPlaces extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlacesModal selectedPlace={this.props.selectedPlace} />
        <View style={styles.containerFeed}>
          <FlatList
            data={this.props.sharedPlaces}
            renderItem={({ item }) => (
              <SharedPlacesItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                text={item.text}
                location={item.location}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  sharedPlaces: state.modal.sharedPlaces
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedPlaces);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35
  },
  containerTitle: {
    borderWidth: 1,
    paddingVertical: 5,
    backgroundColor: "#719bf0"
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fcfcfc"
  }
});
