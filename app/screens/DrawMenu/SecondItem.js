import React, { Component } from "react";
import { Text, View } from "react-native";
import InputForm from "../../components/InputForm";

export class SecondItem extends Component {
  state = {
    users: {
      name: "",
      email: "",
      password: ""
    }
  };

  _changeInput = (key, text) => {
    this.setState(prevState => {
      console.log("...prevState.users,[key]", ...prevState.users, [key]);

      return {
        users: {
          ...prevState.users[key],
          value: text,
          valid: false,
          validationRule: {
            minChars: 6
          }
        }
      };
    });
  };

  render() {
    return (
      <View>
        <InputForm
          placeholder="Name"
          value={this.state.users.name}
          onChangeText={text => this._changeInput("name", text)}
        />
        <InputForm
          placeholder="Email"
          value={this.state.users.email}
          onChangeText={text => this._changeInput("email", text)}
        />
        <InputForm
          placeholder="Password"
          value={this.state.users.password}
          onChangeText={text => this._changeInput("password", text)}
        />
      </View>
    );
  }
}

export default SecondItem;
