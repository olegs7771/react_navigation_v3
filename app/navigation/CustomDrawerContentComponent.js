import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import { DrawerNavigatorItems } from "react-navigation-drawer";
const CustomDrawerContentComponent = props => (
  <ScrollView style={styles.container}>
    <DrawerNavigatorItems {...props} />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9ddf2",
    color: "#fcfcfc"
  },
  text: {
    color: "#fcfcfc"
  }
});
export default CustomDrawerContentComponent;
