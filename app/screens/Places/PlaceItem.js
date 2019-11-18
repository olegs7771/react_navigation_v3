import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  Animated,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { selectPlaceID, sharePlace } from "../../../action/modalAction";

import PlacesMap from "./PlacesMap";

class PlaceItem extends Component {
  state = {
    showMap: false,
    sharedPlaces: [],
    isShared: false,
    location: {},

    //scroll Animated on showMap:true
    scrollUp: new Animated.Value(0)
  };

  //Update State from Redux Props
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sharedPlaces !== this.props.sharedPlaces) {
      this.setState({
        sharedPlaces: this.props.sharedPlaces
      });
    }
  }
  _onPressSelectID = () => {
    this.props.selectPlaceID(this.props.id);
  };

  //showMap
  _showMap = () => {
    this.setState({
      showMap: !this.state.showMap
    });
  };
  //If user picked location then we add it to sharedPlace
  _addLocation = location => {
    console.log("location in placeitem", location);

    this.setState({
      location
    });
  };

  //Share Place

  _sharePlace = () => {
    console.log("pressed on share");

    const { id, name, image, text, navigate } = this.props;

    const newSharedPlace = {
      key: JSON.stringify(Math.random()),
      id,
      name,
      image,
      text,
      location: this.props.location.location
    };

    if (this.state.sharedPlaces.length > 0) {
      const isExists = this.state.sharedPlaces.find(place => {
        return place.id === id;
      });
      if (isExists) {
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
    }
  };

  render() {
    //Show Message
    let isSharedMessageContent;
    if (this.state.isShared) {
      isSharedContent = <Text style={styles.textMessage}>Already Shared</Text>;
    } else {
      isSharedContent = null;
    }
    //Show Map
    let mapContent;
    if (this.state.showMap) {
      mapContent = <PlacesMap getLocation={this._addLocation} />;
    } else {
      mapContent = null;
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          disabled={this.state.showMap ? true : false}
          style={styles.containerTouchable}
          onPress={this.state.showMap ? null : this._onPressSelectID}
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
            {this.state.showMap ? (
              <Button
                title="Hide Map"
                color="#7595c9"
                onPress={() =>
                  this.setState({
                    showMap: !this.state.showMap,
                    isMapChoosed: true
                  })
                }
              />
            ) : (
              <Button
                title="Show Map"
                color="#7595c9"
                onPress={this._showMap}
              />
            )}
          </View>
          <Button title="Share" color="#42e6f5" onPress={this._sharePlace} />
          {isSharedMessageContent}
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  sharedPlaces: state.modal.sharedPlaces,
  location: state.location
});

export default connect(mapStateToProps, { selectPlaceID, sharePlace })(
  PlaceItem
);

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
