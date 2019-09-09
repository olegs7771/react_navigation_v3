import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { connect } from "react-redux";

export class SharedPlaces extends Component {
  state = {
    name: "",
    image: "",
    text: ""
  };

  componentDidMount() {
    console.log("this.props.sharedPlaces", this.props.sharedPlaces);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Here Shared Places </Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 35
  }
});
