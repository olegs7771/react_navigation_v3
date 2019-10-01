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
import validate from "../utils/Validation";

class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    control: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password1: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      password2: {
        value: "",
        valid: false,
        validationRules: {
          equelTo: "password1"
        }
      }
    }
  };

  _updateInputState = (key, value) => {
    let passwordValue = {};
    if (this.state.control[key].validationRules.equelTo) {
      passwordValue = this.state.control;
    }
    console.log(
      "this.state.control[key]",
      this.state.control[key].validationRules.equelTo
    );
    // console.log("key:", key);
    // console.log("value:", value);
    this.setState(prevState => {
      return {
        control: {
          ...prevState.control,
          [key]: {
            ...prevState.control[key],
            value: value,
            valid: validate(value, prevState.control.validationRules)
          }
        }
      };
    });
  };
  _signIn = () => {};

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
              value={this.state.control.email.value}
              onChangeText={value => this._updateInputState("email", value)}
            />
            <InputForm
              placeholder="Password"
              value={this.state.control.password1.value}
              onChangeText={value => this._updateInputState("password1", value)}
            />

            <InputForm
              placeholder="Confirm Password"
              value={this.state.control.password2.value}
              onChangeText={value => this._updateInputState("password2", value)}
            />

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
