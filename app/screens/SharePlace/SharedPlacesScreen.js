import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class SharedPlaces extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View>
        <Text> Here Shared Places </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedPlaces);
