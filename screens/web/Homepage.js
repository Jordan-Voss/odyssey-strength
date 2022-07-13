import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Platform,
  Animated,
  SafeAreaView,
} from "react-native";
import { Link } from "@react-navigation/web";
import Header from "../../components/Header";
import { Video } from "expo-av";
import { Dimensions } from "react-native";
import { useWindowDimensions } from "react-native";
import * as Linking from "expo-linking";

export default function Homepage(props) {
  const isWeb = Platform.OS === "web";
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
    >
      <View style={{ alignItems: "center" }}>
        <Video
          source={require("../../assets/video/odyssey.mp4")}
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
          <Header
            style={{ position: "absolute" }}
            navigation={props.navigation}
          ></Header>
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
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                borderRadius: 50,
                backgroundColor: "blue",
                height: 100,
                width: 100,
                marginTop: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>My button</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontFamily: "Roboto", fontSize: fontDimension * 30 }}>
            TITLE
          </Text>
        </View>
        <View style={styles.pricesContainer}>
          <View style={styles.item}>
            <Text
              style={{ fontFamily: "Roboto", fontSize: fontDimension * 25 }}
            >
              Let us handle the details of your athletic pursuit by working
              hard, allowing you to work smarter. You’ll shine to your fullest
              potential.
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{ fontFamily: "Roboto", fontSize: fontDimension * 25 }}
            >
              We focus on being athlete-centric, responsive to data, and
              committed to relationships and coaching the whole athlete.
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{ fontFamily: "Roboto", fontSize: fontDimension * 25 }}
            >
              You’re more than a set of numbers. We refine your lifting
              technique, your mind, your nutrition, and habits that will last a
              lifetime.
            </Text>
          </View>
        </View>
        <View>{/* <Text>gwreg</Text> */}</View>
        {/* <Text>erfhwe</Text> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    height: 900,
    width: "100%",
    backgroundColor: "blue",
    // backgroundColor: 'rgba(0,0,0,.6)',
    // justifyContent: "space-between",
    // marginTop: "20%",
    // alignItems: "center",
  },
  pricesContainer: {
    // flex: 1,
    // backgroundColor: "red",
    width: "80%",
    height: "30%",
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    // marginLeft: 1 / 7,
    // padding: 3,
  },
  item: {
    width: "33%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tinyLogo: {
    // flex: 1,
    // marginTop: "-3vh",
    width: 40,
    height: 40,
  },
  fadingContainerTop: {
    // padding: 20,
    // marginTop: "50%",
    // backgroundColor: "powderblue",
  },
  fadingContainerBottom: {
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
});
