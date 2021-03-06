import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

import { connect } from "react-redux";

export class PlacesFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.places}
          renderItem={({ item }) => (
            <PlaceItem
              key={item.key}
              name={item.name}
              image={item.image}
              text={item.text}
              id={item.id}
              navigate={this.props.navigate}
            />
          )}
        />
      </View>
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
  container: {
    flex: 1
  }
});
