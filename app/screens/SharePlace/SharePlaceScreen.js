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
import { connect } from "react-redux";

const backgroundImg = {
  uri:
    "https://images.pexels.com/photos/953214/pexels-photo-953214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
};

export class SharePlaceScreen extends Component {
  render() {
    let ImageContent;
    this.props.places.map(place => {
      ImageContent = (
        <View style={styles.placeholder}>
          <View style={styles.containerStyle}>
            <Text style={styles.textTitle}>{place.name}</Text>
          </View>
          <View style={styles.containerImage}>
            <Image
              source={place.image}
              style={{ width: "80%", height: "80%" }}
            />
          </View>
          <View style={styles.containerTextArticle}>
            <Text style={styles.text}>{place.text}</Text>
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
            <ButtonBackGround color="#4f7e9e" width="80%" marginBottom={30}>
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePlaceScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 35,
    alignContent: "center",
    justifyContent: "space-evenly"
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",

    textAlign: "center",
    color: "#ffffff"
  },
  placeholder: {
    width: "80%",
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "black",

    marginBottom: 10
  },
  text: {
    color: "#ffffff"
  },
  containerTextArticle: {
    marginVertical: 10
  },
  containerStyle: {
    backgroundColor: "#1a4754"
  }
});
