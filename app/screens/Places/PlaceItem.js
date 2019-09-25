import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button
} from "react-native";
import { connect } from "react-redux";
import { selectPlaceID, sharePlace } from "../../../action/modalAction";

class PlaceItem extends Component {
  state = {
    sharedPlaces: []
  };

  //Update State from Redux Props
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sharedPlaces !== this.props.sharedPlaces) {
      console.log("state updated");

      this.setState({
        sharedPlaces: this.props.sharedPlaces
      });
    }
  }
  _onPressSelectID = () => {
    this.props.selectPlaceID(this.props.id);
  };

  //Share Place
  _sharePlace = () => {
    const { id, image, text, navigate } = this.props;
    const newSharedPlace = {
      id,
      image,
      text
    };
    console.log("shared");
    console.log(this.state.sharedPlaces.length);
    if (this.state.sharedPlaces.length > 0) {
      const isExists = this.state.sharedPlaces.find(place => {
        return place.id === id;
      });
      if (isExists) {
        console.log("exists");

        return;
      } else {
        this.props.sharePlace(newSharedPlace);
        navigate("SharedPlaces");
      }
    } else {
      this.props.sharePlace(newSharedPlace);
      navigate("SharedPlaces");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerTouchable}
          onPress={this._onPressSelectID}
        >
          <Text style={styles.text}>{this.props.name}</Text>
          <Image
            source={this.props.image}
            style={{ width: "100%", height: 200 }}
          />
          <View>
            <Text style={styles.textArticle}>{this.props.text}</Text>
          </View>
          <Button title="Share" color="#42e6f5" onPress={this._sharePlace} />
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  sharedPlaces: state.modal.sharedPlaces
});

export default connect(
  mapStateToProps,
  { selectPlaceID, sharePlace }
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
