import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import InputForm from "../../components/InputForm";
import PlacesFeed from "./PlacesFeed";
import { addPlace } from "../../../action/modalAction";
import { connect } from "react-redux";

export class Places extends Component {
  state = {
    placeName: ""
  };
  _addPlace = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    const newPlace = {
      key: JSON.stringify(Math.random()),
      name: this.state.placeName,
      image: {
        uri:
          "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
      }
    };
    this.props.addPlace(newPlace);
    console.log(newPlace);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Choose Place</Text>

        <View style={styles.containerInput}>
          <InputForm
            placeholder="Choose some place.."
            onChangeText={text => this.setState({ placeName: text })}
          />
          <Button title="Add Place" onPress={this._addPlace} />
        </View>
        <PlacesFeed />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

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
    backgroundColor: "#b8e2f2"
  },
  textTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#fcfcfc",
    fontWeight: "bold"
  },
  containerInput: {
    flex: 1,
    width: "60%",
    marginLeft: "20%",
    paddingTop: 10
  }
});
