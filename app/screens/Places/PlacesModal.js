import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  Image,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import { closePlace, deletePlace } from "../../../action/modalAction";

class PlacesModal extends Component {
  _closePlace = () => {
    this.props.closePlace();
  };

  _deletePlace = () => {
    this.props.deletePlace();
  };

  render() {
    //Landscape Orientation for Modal
    let modalLandscapeContent;
    //Portrait Orientation for Modal
    let modalContent;
    if (this.props.selectedPlace) {
      const { name, image, text } = this.props.selectedPlace;
      if (Dimensions.get("window").height > 500) {
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
      } else {
        modalLandscapeContent = (
          <View style={{ paddingHorizontal: 5 }}>
            <View style={styles.containerLandScape}>
              <View style={{ width: "36%" }}>
                <Text style={styles.textTitle}>{name}</Text>
                <Image source={image} style={styles.imageLandScape} />
              </View>
              <View style={{ width: "60%", marginTop: 20 }}>
                <Text style={styles.textArticle}>{text}</Text>
              </View>
            </View>
            <View style={styles.containerButtons}>
              <Button title="Close" color="grey" onPress={this._closePlace} />
              <Button title="Delete" color="red" onPress={this._deletePlace} />
            </View>
          </View>
        );
      }
    }

    return (
      <Modal visible={this.props.selectedPlace !== null} animationType="slide">
        {modalContent}
        {modalLandscapeContent}
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
    paddingTop: 30,
    width: "80%",
    alignSelf: "center"
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
  },
  //LandScape
  containerLandScape: {
    flexDirection: "row",
    alignContent: "space-between"
  },
  imageLandScape: {
    width: "100%",
    height: 200
  }
});
