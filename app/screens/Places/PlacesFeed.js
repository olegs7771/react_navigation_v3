import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

import { connect } from "react-redux";

export class PlacesFeed extends Component {
  render() {
    console.log("this.props", this.props.places);
    let feedContent;
    if (this.props.places) {
      feedContent = (
        <FlatList
          data={this.props.places}
          renderItem={({ item }) => (
            <PlaceItem key={item.key} place={item.place} />
          )}
        />
      );
    }

    return <View style={styles.container}>{feedContent}</View>;
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
