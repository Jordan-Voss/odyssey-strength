import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { Link } from "@react-navigation/web";

const isWeb = Platform.OS === "web";

export default function HomepageWebSmall({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.openDrawer()}
        title="Go to notifications"
      />
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
