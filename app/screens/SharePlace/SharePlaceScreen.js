import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import InputForm from "../../components/InputForm";
import ButtonBackGround from "../../components/ButtonBackGround";
import { sharePlace } from "../../../action/modalAction";
import { connect } from "react-redux";

const backgroundImg = {
  uri:
    "https://images.pexels.com/photos/953214/pexels-photo-953214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
};

export class SharePlaceScreen extends Component {
  state = {
    name: "",
    image: {},
    text: ""
  };
  componentDidMount() {
    this.props.places.map(place => {
      this.setState({
        name: place.name,
        image: place.image,
        text: place.text
      });
    });
  }

  _sharePlace = () => {
    const { name, image, text } = this.state;
    const placeToShare = {
      name,
      image,
      text
    };

    console.log("placeToShare", placeToShare);
    this.props.sharePlace(placeToShare);
    this.props.navigation.navigate("SharedPlaces");
  };

  render() {
    const { name, image, text } = this.state;
    let ImageContent;
    this.props.places.map(place => {
      ImageContent = (
        <View style={styles.placeholder}>
          <Text style={styles.textTitle}>{name}</Text>
          <View style={styles.containerImage}>
            <Image source={image} style={{ width: "100%", height: "100%" }} />
          </View>
          <View style={styles.containerTextArticle}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      );
    });
    return (
      <ImageBackground
        source={backgroundImg}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textTitle}> Share Place With Us! </Text>

            {ImageContent}

            <View style={styles.placeholder}>
              <Text>Map</Text>
            </View>
            <ButtonBackGround color="#4f7e9e" width="80%" marginBottom={30}>
              Locate Me
            </ButtonBackGround>

            <InputForm placeholder="Place Name" />
            <ButtonBackGround
              color="#4f7e9e"
              width="80%"
              marginBottom={30}
              onPress={this._sharePlace}
            >
              Share The Place
            </ButtonBackGround>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  places: state.modal.places
});

const mapDispatchToProps = { sharePlace };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePlaceScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 35,
    alignContent: "center"
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    color: "#ffffff"
  },
  placeholder: {
    width: "80%",
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "black",
    backgroundColor: "#0f5370",

    marginBottom: 100
  },
  text: {
    color: "#ffffff"
  },
  containerImage: {
    height: 200
  },
  containerTextArticle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  }
});
