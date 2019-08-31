import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SignInScreen from "./app/screens/SignInScreen";
import AuthLoadingScreen from "./app/screens/AuthLoadingScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import OtherScreen from "./app/screens/OtherScreen";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default App;

const AppStack = createStackNavigator({
  DashBoard: DashboardScreen,
  Other: OtherScreen
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: { screen: AppStack },
      Auth: { screen: AuthStack }
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
