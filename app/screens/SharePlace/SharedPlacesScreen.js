import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SharedPlacesItem from "./SharedPlacesItem";

import { connect } from "react-redux";

export class SharedPlaces extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.sharedPlaces}
          renderItem={({ item }) => (
            <SharedPlacesItem
              key={item.key}
              name={item.name}
              image={item.image}
              text={item.text}
            />
          )}
        />
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
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 35
  }
});
