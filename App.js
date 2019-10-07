import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
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

import SharedPlacesScreen from "./app/screens/SharePlace/SharedPlacesScreen";

//Menu Draw Navigation

import FirstItem from "./app/screens/DrawMenu/FirstItem";
import SecondItem from "./app/screens/DrawMenu/SecondItem";
import ThirdItem from "./app/screens/DrawMenu/ThirdItem";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import CustomDrawerContentComponent from "./app/navigation/CustomDrawerContentComponent";

//Draw Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//Modal/Detail Navigation
const ModalBattomStack = createBottomTabNavigator({
  Modal: { screen: ModalScreen },
  Detail: { screen: DetailScreen }
});

const DrawMenu = createDrawerNavigator(
  {
    Home: { screen: DashboardScreen },
    Other: OtherScreen,
    Modal: ModalBattomStack,

    Places: PlacesScreen,
    SharedPlaces: SharedPlacesScreen,
    Item1: { screen: FirstItem },
    Item2: { screen: SecondItem },
    Item3: { screen: ThirdItem }
  },
  {
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      inactiveTintColor: "#ffffff",
      activeTintColor: "#e91e63",
      itemsContainerStyle: {
        marginVertical: 0
      },
      iconContainerStyle: {
        opacity: 1
      },
      labelStyle: {
        marginTop: 1
      }
    }
  }
);

const AppRootStack = createStackNavigator(
  {
    CoolAlbum: DrawMenu
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        title: navigation.state.routeName,

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
