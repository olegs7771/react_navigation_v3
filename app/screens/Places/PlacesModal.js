import React from "react";
import { View, Text, Modal, StyleSheet, Button, Image } from "react-native";

const PlacesModal = props => {
  let modalContent;
  if (props.selectedPlace) {
    const { name, image, id } = props.selectedPlace;
    modalContent = (
      <View style={styles.container}>
        <Text style={styles.textTitle}>{name}</Text>
        <Image source={image} style={{ width: "100%", height: 200 }} />
        <View style={styles.containerButtons}>
          <Button title="Close" color="grey" />
          <Button title="Delete" color="red" />
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

export default PlacesModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  containerButtons: {
    flexDirection: "row"
  },
  textTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10
  }
});
