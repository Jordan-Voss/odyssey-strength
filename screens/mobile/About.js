import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { Link } from "@react-navigation/web";

export default class Profile extends React.Component {
  static path = "";

  render() {
    return (
      <View style={styles.container}>
        This is the mobile profile screen
        <Button
          title="Go to Homepage"
          onPress={() => this.props.navigation.navigate("Homepage")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
