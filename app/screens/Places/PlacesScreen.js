import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import InputForm from "../../components/InputForm";
import TextTitle from "../../components/TextTitle";
import PlacesFeed from "./PlacesFeed";
import PlacesModal from "./PlacesModal";
import { addPlace } from "../../../action/modalAction";
import { connect } from "react-redux";
import uuid from "uuid/v1";

export class Places extends Component {
  state = {
    placeName: ""
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
    return (
      <View style={styles.container}>
        <PlacesModal selectedPlace={this.props.selectedPlace} />
        <TextTitle style={styles.textTitle}>Choose Place</TextTitle>

        <View style={styles.containerInput}>
          <InputForm
            placeholder="Choose some place.."
            onChangeText={text => this.setState({ placeName: text })}
          />
          <Button title="Add Place" onPress={this._addPlace} />
        </View>
        <View style={styles.containerFeed}>
          <PlacesFeed />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedPlace: state.modal.selectedPlace
});

const mapDispatchToProps = { addPlace };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Places);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    paddingVertical: 20,

    paddingTop: 50
  },

  containerInput: {
    flex: 1,
    width: "60%",
    marginLeft: "20%",
    paddingTop: 10
  },
  containerFeed: {
    flex: 4,
    flexDirection: "row"
  }
});
