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
    sharedPlaces: [],
    isShared: false
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
    const { id, name, image, text, navigate } = this.props;
    const newSharedPlace = {
      key: JSON.stringify(Math.random()),
      id,
      name,
      image,
      text
    };

    console.log(this.state.sharedPlaces.length);
    if (this.state.sharedPlaces.length > 0) {
      const isExists = this.state.sharedPlaces.find(place => {
        return place.id === id;
      });
      if (isExists) {
        console.log("exists");
        this.setState({
          isShared: true
        });
        setTimeout(() => {
          this.setState({
            isShared: false
          });
        }, 15000);

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
    //Show Message
    let isSharedContent;
    if (this.state.isShared) {
      isSharedContent = <Text style={styles.textMessage}>Already Shared</Text>;
    } else {
      isSharedContent = null;
    }
    //Show Map
    let mapContent;
    if (this.state.showMap) {
      mapContent = (
        <View
          style={{
            height: 200,
            width: "100%",
            backgroundColor: "#b8bbbf",
            marginBottom: 5
          }}
        >
          <Text>Map Here</Text>
        </View>
      );
    } else {
      mapContent = null;
    }
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
          {mapContent}
          <View style={{ marginBottom: 5 }}>
            <Button
              title="Add Location"
              color="#7595c9"
              onPress={() =>
                this.setState({
                  showMap: !this.state.showMap
                })
              }
            />
          </View>
          <Button title="Share" color="#42e6f5" onPress={this._sharePlace} />
          {isSharedContent}
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
  },
  textMessage: {
    color: "red",
    textAlign: "center"
  }
});
