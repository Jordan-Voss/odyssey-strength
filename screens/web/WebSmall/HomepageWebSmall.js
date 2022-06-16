import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { Link } from "@react-navigation/web";
import { useWindowDimensions } from "react-native";

const isWeb = Platform.OS === "web";

export default function HomepageWebSmall({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.openDrawer()}
        title="Go to notifications"
      />
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {windowWidth}
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
