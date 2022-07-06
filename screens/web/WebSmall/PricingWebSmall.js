import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { Link } from "@react-navigation/web";
import { useWindowDimensions, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { AntDesign, Entypo } from "@expo/vector-icons";
import HeaderWebSmall from "../../../components/HeaderWebSmall";

const isWeb = Platform.OS === "web";

export default function PricingWebSmall({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const fontDimension = useWindowDimensions().fontScale;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: windowWidth,
          backgroundColor: "green",
          height: 200,
          position: "relative",
          top: 0,
          left: 0,
        }}
      ></View>
      <HeaderWebSmall navigation={navigation} />
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {windowWidth}
      </Text>
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        Pricing
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
