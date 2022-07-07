import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { Link } from "@react-navigation/web";
import { useWindowDimensions, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { AntDesign, Entypo } from "@expo/vector-icons";
import HeaderWebSmall from "../../../components/HeaderWebSmall";

const isWeb = Platform.OS === "web";

export default function HomepageWebSmall({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const fontDimension = useWindowDimensions().fontScale;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: "100%",
          backgroundColor: "rgba(52, 52, 52, 0.9)",
          height: 200,
          position: "relative",
          top: 0,
          left: 0,
        }}
      >
        <Video
          source={require("../../../assets/video/ody2.mp4")}
          // style={{ height: windowHeight }}
          isMuted={true}
          isLooping={true}
          paused={false}
          shouldPlay={true}
          repeat={true}
          resizeMode={"contain"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        ></Video>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            // top: 0,
            // aspectRatio: 800 / 450,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            justifyContent: "center",
            position: "fixed",
          }}
        ></View>
      </View>
      <HeaderWebSmall style={{ marginRight: "-10%" }} navigation={navigation} />
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
