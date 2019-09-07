import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  ImageBackground
} from "react-native";
import InputForm from "../components/InputForm";
import ButtonBackGround from "../components/ButtonBackGround";

class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: ""
  };
  _signIn = async () => {
    await AsyncStorage.setItem("authToken", "abc");
    console.log("signed");

    this.props.navigation.navigate("App");

    console.log(this.state.email);
  };

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.pexels.com/photos/953214/pexels-photo-953214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Text style={styles.textTitle}> SignIn </Text>
          <View style={styles.containerForms}>
            <InputForm
              placeholder="Email"
              onChangeText={text => this.setState({ email: text })}
            />
            <InputForm placeholder="Password" />
            <InputForm placeholder="Confirm Password" />
            <ButtonBackGround onPress={this._signIn} color="#415956">
              SignIn
            </ButtonBackGround>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 35
  },
  containerForms: {
    flex: 1,
    width: "80%"
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 40
  }
});
