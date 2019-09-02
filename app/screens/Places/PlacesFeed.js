import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

import { connect } from "react-redux";

export class PlacesFeed extends Component {
  render() {
    console.log("this.props", this.props.places);

    return (
      <FlatList
        data={this.props.places}
        renderItem={({ item }) => (
          <PlaceItem key={item.key} name={item.name} image={item.image} />
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  places: state.modal.places
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacesFeed);

styles = StyleSheet.create({
  container: 1
});
