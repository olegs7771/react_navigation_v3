import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

//Redux
import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();

//Screens
import SignInScreen from "./app/screens/SignInScreen";
import AuthLoadingScreen from "./app/screens/AuthLoadingScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import OtherScreen from "./app/screens/OtherScreen";
import ModalScreen from "./app/screens/ModalScreen";
import DetailScreen from "./app/screens/DetailScreen";
import PlacesScreen from "./app/screens/Places/PlacesScreen";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

//Modal/Detail Navigation
const ModalBattomStack = createBottomTabNavigator({
  Modal: { screen: ModalScreen },
  Detail: { screen: DetailScreen }
});

//App Stack Navigation
const AppRootStack = createStackNavigator(
  {
    DashBoard: DashboardScreen,
    Other: OtherScreen,
    Modal: ModalBattomStack,
    Places: PlacesScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: navigation.state.routeName,
        headerStyle: {
          backgroundColor: "#719bf0"
        },
        headerTitleStyle: {
          marginLeft: "33%"
        },
        headerTintColor: "#fcfcfc"
      };
    }
  }
);
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
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;