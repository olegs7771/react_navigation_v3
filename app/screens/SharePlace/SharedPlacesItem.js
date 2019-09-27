import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { selectPlaceID } from "../../../action/modalAction";

const SharedPlacesItem = props => {
  _onPressSelectID = () => {
    props.selectPlaceID(props.id);
  };
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={this._onPressSelectID}
      >
        <View style={{ width: "40%" }}>
          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>{props.name}</Text>
          </View>
          <View style={styles.containerImage}>
            <Image source={props.image} style={{ width: "100%", height: 80 }} />
          </View>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default connect(
  null,
  { selectPlaceID }
)(SharedPlacesItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0f5370",
    marginVertical: 5
  },
  containerTouchable: {
    flexDirection: "row"
  },
  containerTitle: {
    width: "100%"
  },
  textTitle: {
    width: "100%",
    textAlign: "center",
    marginVertical: 5,
    color: "#ffffff"
  },
  containerText: {
    width: "60%",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  containerImage: {
    borderColor: "#ffffff",
    borderWidth: 2,
    width: "100%"
  },
  text: {
    color: "#ffffff"
  }
});
