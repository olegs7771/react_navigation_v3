import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SharedPlacesItem from "./SharedPlacesItem";

import { connect } from "react-redux";

export class SharedPlaces extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>Shared Places</Text>
        </View>
        <FlatList
          data={this.props.sharedPlaces}
          renderItem={({ item }) => (
            <SharedPlacesItem
              key={item.id}
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
