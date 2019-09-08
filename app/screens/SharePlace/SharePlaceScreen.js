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

const placeholderImage = {
  uri:
    "https://accuweather.brightspotcdn.com/dims4/default/cc442cf/2147483647/resize/590x/quality/90/?url=http%3A%2F%2Faccuweather-bsp.s3.amazonaws.com%2F35%2F36%2Fbbe409654bbabc17a8592826dacf%2Fforest.jpg"
};

export class SharePlaceScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.pexels.com/photos/953214/pexels-photo-953214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textTitle}> Share Place With Us! </Text>
            <View style={styles.placeholder}>
              <Image
                source={placeholderImage}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <ButtonBackGround color="#4f7e9e" width="80%" marginBottom={30}>
              Pick Image
            </ButtonBackGround>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

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
    marginVertical: 30,
    textAlign: "center",
    color: "#ffffff"
  },
  placeholder: {
    width: "80%",
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "black",
    backgroundColor: "#eee",
    height: 250
  }
});
