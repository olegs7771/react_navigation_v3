import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
//Screens
import SignInScreen from "./app/screens/SignInScreen";
import AuthLoadingScreen from "./app/screens/AuthLoadingScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import OtherScreen from "./app/screens/OtherScreen";
import ModalScreen from "./app/screens/ModalScreen";
import DetailScreen from "./app/screens/DetailScreen";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

//Modal/Detail Navigation
const ModalStack = createStackNavigator({
  Modal: { screen: ModalScreen },
  Detail: { screen: DetailScreen }
});
//App Stack Navigation
const AppRootStack = createStackNavigator({
  DashBoard: DashboardScreen,
  Other: OtherScreen,
  Modal: ModalScreen
});
//Auth Stack Navigation
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
//Container Navigation
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: { screen: AppRootStack },
      Auth: { screen: AuthStack }
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
