import React, { Component } from "react";
import { NavigationEvents } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Animated
} from "react-native";
import InputForm from "../../components/InputForm";
import TextTitle from "../../components/TextTitle";
import PlacesFeed from "./PlacesFeed";
import PlacesModal from "./PlacesModal";
import { addPlace } from "../../../action/modalAction";
import { connect } from "react-redux";
import uuid from "uuid/v1";

export class Places extends Component {
  state = {
    placeName: "",
    orientMode: "portrait",
    placeLoaded: false
  };
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyle);
  }
  //clear EventListner to avoid memory leak (navigation.event in view)

  updateStyle = dims => {
    this.setState({
      orientMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  _addPlace = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    const newPlace = {
      id: uuid(),
      key: JSON.stringify(Math.random()),
      name: this.state.placeName,
      image: {
        uri:
          "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
      },
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
    };
    this.props.addPlace(newPlace);
  };
  render() {
    const { orientMode } = this.state;
    let titleContent;
    if (orientMode === "portrait") {
      titleContent = (
        <TextTitle style={{ marginVertical: 10 }}>Choose Place</TextTitle>
      );
    }

    return (
      <ScrollView style={styles.containerScrollView}>
        <NavigationEvents
          onWillBlur={payload => {
            Dimensions.removeEventListener("change", this.updateStyle); //clear EventListener
            this.setState({
              placeLoaded: false
            });
          }}
        />
        <View style={styles.container}>
          {titleContent}

          <PlacesModal selectedPlace={this.props.selectedPlace} />

          <View
            style={
              orientMode === "portrait"
                ? styles.containerInputAndFeed
                : styles.containerInputAndFeedLandScape
            }
          >
            <View
              style={
                orientMode === "portrait"
                  ? styles.containerInput
                  : styles.containerInputLandScape
              }
            >
              <View style={{ width: "80%", alignSelf: "center" }}>
                <InputForm
                  value={this.state.placeName}
                  placeName={this.state.placeName}
                  placeholder="Choose some place.."
                  onChangeText={text => this.setState({ placeName: text })}
                />
                <Button title="Add Place" onPress={this._addPlace} />
              </View>
            </View>

            <View
              style={
                orientMode === "portrait"
                  ? styles.containerFeed
                  : styles.containerFeedLandScape
              }
            >
              <PlacesFeed navigate={this.props.navigation.navigate} />
            </View>
          </View>
          <View style={styles.containerButton}>
            <Button
              title="My Shared Places"
              onPress={() => this.props.navigation.navigate("SharedPlaces")}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  selectedPlace: state.modal.selectedPlace
});

const mapDispatchToProps = { addPlace };

export default connect(mapStateToProps, mapDispatchToProps)(Places);

const styles = StyleSheet.create({
  containerScrollView: { flex: 1 },
  container: { alignItems: "center", paddingVertical: 20 },
  containerInputAndFeed: { width: "100%" },
  containerInputAndFeedLandScape: {
    flexDirection: "row",
    width: "100%"
  },
  containerInput: { width: "100%" },
  containerInputLandScape: { width: "47%", marginLeft: 20 },
  containerFeed: { marginVertical: 20 },
  containerFeedLandScape: { width: "47%", marginLeft: 5 },
  containerButton: { width: "80%", marginTop: 20 },
  containerAddPlaceBtn: {
    borderColor: "#5964a8",
    borderRadius: 50,
    padding: 20,
    borderWidth: 4
  },
  textAddPlaceBtn: {
    color: "#5964a8",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center"
  }
});
