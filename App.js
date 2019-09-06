import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

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
//Menu Draw Navigation

import FirstItem from "./app/screens/DrawMenu/FirstItem";
import SecondItem from "./app/screens/DrawMenu/SecondItem";
import ThirdItem from "./app/screens/DrawMenu/ThirdItem";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

//Draw Navigation

const DrawMenu = createDrawerNavigator({
  Menu: { screen: DashboardScreen },
  Item1: { screen: FirstItem },
  Item2: { screen: SecondItem },
  Item3: { screen: ThirdItem }
});

//Modal/Detail Navigation
const ModalBattomStack = createBottomTabNavigator({
  Modal: { screen: ModalScreen },
  Detail: { screen: DetailScreen }
});

//App Stack Navigation
const AppDrawStack = createStackNavigator(
  {
    DashBoard: DrawMenu
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: navigation.state.routeName,
        headerLeft: (
          <Icon
            name="md-menu"
            size={32}
            color="white"
            style={{ paddingLeft: 15 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
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

const AppRootStack = createStackNavigator(
  {
    DashBoard: AppDrawStack,
    Other: OtherScreen,
    Modal: ModalBattomStack,
    Places: PlacesScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
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
