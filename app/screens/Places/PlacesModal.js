import React from "react";
import { View, Text, Modal, StyleSheet, Button, Image } from "react-native";
import { connect } from "react-redux";
import { closePlace, deletePlace } from "../../../action/modalAction";

const PlacesModal = props => {
  _closePlace = () => {
    console.log("closed");

    props.closePlace();
  };

  _deletePlace = () => {
    console.log("deleted");
    props.deletePlace();
  };
  let modalContent;
  if (props.selectedPlace) {
    const { name, image, id, text } = props.selectedPlace;
    modalContent = (
      <View style={styles.container}>
        <Text style={styles.textTitle}>{name}</Text>
        <Image source={image} style={styles.image} />
        <Text style={styles.textArticle}>{text}</Text>
        <View style={styles.containerButtons}>
          <Button title="Close" color="grey" onPress={this._closePlace} />
          <Button title="Delete" color="red" onPress={this._deletePlace} />
        </View>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      {modalContent}
    </Modal>
  );
};

export default connect(
  null,
  { closePlace, deletePlace }
)(PlacesModal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "center",

    paddingTop: 20
  },
  textTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10
  },
  image: {
    width: "100%",
    height: 200
  },
  textArticle: {
    padding: 10
  }
});
