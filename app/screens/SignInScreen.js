import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import InputForm from "../components/InputForm";
import ButtonBackGround from "../components/ButtonBackGround";
import validate from "../utils/Validation";
import { connect } from "react-redux";
import { regesterUser } from "../../action/authAction";

class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    authMode: "login",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equelTo: "password"
        },
        touched: false
      }
    }
  };

  _updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equelTo) {
      const equelControl = this.state.controls[key].validationRules.equelTo;
      const equelValue = this.state.controls[equelControl].value;
      connectedValue = {
        ...connectedValue,
        equelTo: equelValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equelTo: value
      };
    }

    this.setState(prevState => {
      // console.log("prevState.controls[key]", prevState.controls[key]);

      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  };

  _signIn = () => {
    const newUser = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    };
    this.props.regesterUser(newUser);
    this.props.navigation.navigate("App");
  };

  _switchAuth = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === "login" ? "signup" : "login"
      };
    });
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
          <TouchableOpacity onPress={this._switchAuth}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ffffff",
                padding: 5,
                borderRadius: 5
              }}
            >
              {this.state.authMode === "signup" ? (
                <Text style={styles.textTitle}>Go To Login </Text>
              ) : (
                <Text style={styles.textTitle}>Go To SignIn</Text>
              )}
            </View>
          </TouchableOpacity>
          {this.state.authMode === "signup" ? (
            <View style={styles.containerForms}>
              <InputForm
                placeholder="Email"
                value={this.state.controls.email.value}
                onChangeText={val => this._updateInputState("email", val)}
                valid={this.state.controls.email.valid}
                touched={this.state.controls.email.touched}
              />
              <InputForm
                placeholder="Password"
                value={this.state.controls.password.value}
                onChangeText={val => this._updateInputState("password", val)}
                valid={this.state.controls.password.valid}
                touched={this.state.controls.password.touched}
              />

              <InputForm
                placeholder="Confirm Password"
                value={this.state.controls.confirmPassword.value}
                onChangeText={val =>
                  this._updateInputState("confirmPassword", val)
                }
                valid={this.state.controls.confirmPassword.valid}
                touched={this.state.controls.confirmPassword.touched}
              />

              <ButtonBackGround
                onPress={this._signIn}
                color="#415956"
                disabled={
                  !this.state.controls.email.valid ||
                  !this.state.controls.password.valid ||
                  !this.state.controls.confirmPassword.valid
                }
              >
                SignIn
              </ButtonBackGround>
            </View>
          ) : (
            <View style={styles.containerForms}>
              <InputForm
                placeholder="Email"
                value={this.state.controls.email.value}
                onChangeText={val => this._updateInputState("email", val)}
                valid={this.state.controls.email.valid}
                touched={this.state.controls.email.touched}
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <InputForm
                placeholder="Password"
                value={this.state.controls.password.value}
                onChangeText={val => this._updateInputState("password", val)}
                valid={this.state.controls.password.valid}
                touched={this.state.controls.password.touched}
              />

              <ButtonBackGround
                onPress={this._signIn}
                color="#415956"
                disabled={
                  !this.state.controls.email.valid ||
                  !this.state.controls.password.valid ||
                  (!this.state.controls.confirmPassword.valid &&
                    this.state.authMode === "signup")
                }
              >
                Login
              </ButtonBackGround>
            </View>
          )}
        </View>
      </ImageBackground>
    );
  }
}
export default connect(
  null,
  { regesterUser }
)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 70
  },
  containerForms: {
    marginTop: 20,
    flex: 1,
    width: "80%"
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff"
  }
});
