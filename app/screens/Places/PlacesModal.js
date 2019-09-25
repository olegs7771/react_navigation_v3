import React, { Component } from "react";
import { View, Text, Modal, StyleSheet, Button, Image } from "react-native";
import { connect } from "react-redux";

import { closePlace, deletePlace } from "../../../action/modalAction";

class PlacesModal extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sharedPlaces !== this.props.sharedPlaces) {
      this.setState({
        sharedPlaces: this.props.sharedPlaces
      });
    }
  }

  _closePlace = () => {
    console.log("closed");
    this.props.closePlace();
  };

  _deletePlace = () => {
    console.log("deleted");
    this.props.deletePlace();
  };

  render() {
    let modalContent;
    if (this.props.selectedPlace) {
      const { name, image, text } = this.props.selectedPlace;
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
      <Modal visible={this.props.selectedPlace !== null} animationType="slide">
        {modalContent}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  selectedPlace: state.modal.selectedPlace
});

export default connect(
  mapStateToProps,
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
