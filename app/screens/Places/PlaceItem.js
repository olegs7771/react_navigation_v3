import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { selectPlaceID } from "../../../action/modalAction";

const PlaceItem = props => {
  _onPressSelectID = () => {
    console.log("props", props);

    props.selectPlaceID(props.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={this._onPressSelectID}
      >
        <Text style={styles.text}>{props.name}</Text>
        <Image source={props.image} style={{ width: "100%", height: 200 }} />
        <View>
          <Text style={styles.textArticle}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default connect(
  null,
  { selectPlaceID }
)(PlaceItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 5
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    color: "#4f7e9e"
  },

  containerTouchable: {
    padding: 10,
    backgroundColor: "#ffffff"
  },
  textArticle: {
    padding: 10
  }
});
