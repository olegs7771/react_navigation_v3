import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Platform
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import { DrawerNavigatorItems } from "react-navigation-drawer";
class CustomDrawerContentComponent extends Component {
  _signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerIcon}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={this._signOut}
          >
            <Icon
              name={Platform.OS === "android" ? "md-log-out" : null}
              size={30}
              style={{ color: "#ffffff", marginLeft: 15, marginTop: 10 }}
            />
            <Text style={{ color: "#ffffff", fontSize: 16, marginLeft: 5 }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        <DrawerNavigatorItems {...this.props} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312e59"
  },
  containerIcon: {
    flexDirection: "row",
    alignItems: "center"
  }
});
export default CustomDrawerContentComponent;
