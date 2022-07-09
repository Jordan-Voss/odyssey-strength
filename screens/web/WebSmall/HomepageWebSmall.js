import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Animated,
  Platform,
} from "react-native";
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
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <View
    //     style={{
    //       width: windowWidth,
    //       backgroundColor: "rgba(52, 52, 52, 0.9)",
    //       height: windowHeight,
    //       position: "relative",
    //       top: 0,
    //       left: 0,
    //     }}
    //   >
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Video
          source={require("../../../assets/video/ody2_AdobeExpress.mp4")}
          style={{
            height: windowHeight,
            // width: windowWidth,
            // aspectRatio: 800 / 800,
          }}
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
        >
          <HeaderWebSmall
            style={{ marginRight: "-10%" }}
            navigation={navigation}
          />
        </View>

        <Text
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {windowWidth}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
