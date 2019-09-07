import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { connect } from "react-redux";

export class SharePlaceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}> Share Place With Us! </Text>
        <View>Image Preview</View>
        <Button title="Pick Image" />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePlaceScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 35,
    alignItems: "center"
  },
  textTitle: {
    fontSize: 30,
    marginTop: 30
  }
});
