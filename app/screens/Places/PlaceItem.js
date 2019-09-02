import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const PlaceItem = props => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceItem;
