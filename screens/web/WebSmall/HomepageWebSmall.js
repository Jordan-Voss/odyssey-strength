import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Animated,
  Platform,
  AppState,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useAnimatedScrollHandler } from "react-native-reanimated";

import { Link } from "@react-navigation/web";
import { useWindowDimensions, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { AntDesign, Entypo } from "@expo/vector-icons";
import HeaderWebSmall from "../../../components/HeaderWebSmall";

const isWeb = Platform.OS === "web";

export default function HomepageWebSmall({ navigation }) {
  const scroll = useRef(new Animated.Value(0)).current;

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const fontDimension = useWindowDimensions().fontScale;
  const topTextDiffClamp = Animated.diffClamp(scroll, 0, windowHeight / 2);
  const translateTopText = Animated.multiply(topTextDiffClamp, -1);
  const bottomTextDiffClamp = Animated.diffClamp(scroll, 1, windowHeight / 2);
  const translateBottomText = Animated.multiply(bottomTextDiffClamp, -1);
  // const translateHeaderText = Animated.multiply(translateTopText, -1.5);
  const fadeOut = topTextDiffClamp.interpolate({
    inputRange: [0, windowHeight / 4],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const fadeIn = bottomTextDiffClamp.interpolate({
    inputRange: [0, windowHeight / 4],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <ScrollView
      scrollEventThrottle={1}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scroll } } }],
        {
          useNativeDriver: false,
        }
      )}
      // scrollEventThrottle={1}
    >
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
          <Button onPress={() => moveBall()}></Button>
          <Animated.View
            style={[
              styles.fadingContainerTop,
              { transform: [{ translateY: translateTopText }] },
            ]}
          >
            <Animated.Text style={[styles.topFadingText, { opacity: fadeOut }]}>
              Odyssey
            </Animated.Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.fadingContainerBottom,
              { transform: [{ translateY: translateTopText }] },
            ]}
          >
            <Animated.Text style={[styles.topFadingText, { opacity: fadeIn }]}>
              An Epic Journey
            </Animated.Text>
          </Animated.View>
        </View>

        <Text
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {windowWidth}
        </Text>
        <Text
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        {/* 
        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={fadeIn(1000)} />
          <Button title="Fade Out View" onPress={fadeOut(1000)} />
        </View> */}
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
  fadingContainerTop: {
    padding: 20,
    marginTop: "-50%",
    // backgroundColor: "powderblue",
  },
  fadingContainerBottom: {
    padding: 20,
    // marginTop: "-50%",
    // backgroundColor: "powderblue",
  },
  topFadingText: {
    color: "white",
    fontSize: 50,
  },
  bottomFadingText: {
    color: "white",
    fontSize: 50,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});
