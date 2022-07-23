import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  Modal,
  TouchableOpacity,
  Platform,
  Easing,
  Animated,
  SafeAreaView,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Link } from "@react-navigation/web";
import Header from "../../components/Header";
import { Video } from "expo-av";
import { Dimensions } from "react-native";
import { useWindowDimensions } from "react-native";
import * as Linking from "expo-linking";
import ScrollableView from "./ScrollableView";

export default function Homepage(props) {
  const isWeb = Platform.OS === "web";
  const card1TextView = useRef(new Animated.Value(0)).current;
  const scroll = useRef(new Animated.Value(0)).current;
  const iconSize1 = useRef(new Animated.Value(0)).current;
  const iconSize2 = useRef(new Animated.Value(0)).current;
  const iconSize3 = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  const handleIsVisible1 = () => {
    console.log("b");
    Animated.spring(card1TextView, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    setIsVisible1(!isVisible1);
  };
  const handleScaleUpIcon1 = () => {
    Animated.timing(iconSize1, {
      toValue: 1,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const handleScaleDownIcon1 = () => {
    Animated.timing(iconSize1, {
      toValue: 0,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const handleScaleUpIcon2 = () => {
    Animated.timing(iconSize2, {
      toValue: 1,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const handleScaleDownIcon2 = () => {
    Animated.timing(iconSize2, {
      toValue: 0,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const handleScaleUpIcon3 = () => {
    Animated.timing(iconSize3, {
      toValue: 1,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const handleScaleDownIcon3 = () => {
    Animated.timing(iconSize3, {
      toValue: 0,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const [scrollViewAlignment] = useState(new Animated.Value(0));
  const bringUpScrollView = () => {
    Animated.timing(scrollViewAlignment, {
      toValue: 1,
      duration: 500,
    }).start();
  };
  const scrollViewInterpolate = scrollViewAlignment.interpolate({
    inputRange: [0, 1],
    outputRange: [windowHeight / 2, 0],
  });
  const scrollViewStyle = {
    bottom: scrollViewInterpolate,
  };

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const fontDimension = useWindowDimensions().fontScale;
  const topTextDiffClamp = Animated.diffClamp(scroll, 0, windowWidth);
  const translateTopText = Animated.multiply(topTextDiffClamp, -1);
  const bottomTextDiffClamp = Animated.diffClamp(scroll, 0, windowHeight / 3);

  const titleFontSize = windowWidth * 0.1;
  const homeAnimatedTextFontSize = windowWidth * 0.2;
  const paragraphFontSize = windowWidth * 0.075;
  // const translateHeaderText = Animated.multiply(translateTopText, -1.5);
  const fadeOut = topTextDiffClamp.interpolate({
    inputRange: [0, windowWidth / 2],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const fadeIn = bottomTextDiffClamp.interpolate({
    inputRange: [0, windowHeight / 3],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <ScrollView
      scrollEventThrottle={1}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: scroll,
              },
            },
          },
        ],
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
            position: "absolute",
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
              {
                marginTop: windowHeight / 2,
                transform: [{ translateX: translateTopText }],
              },
            ]}
          >
            <Animated.Text style={[styles.topFadingText, { opacity: fadeOut }]}>
              Odyssey
            </Animated.Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.fadingContainerBottom,
              { marginTop: windowHeight / 2 },
            ]}
          >
            <Animated.Text
              style={[styles.bottomFadingText, { opacity: fadeIn }]}
            >
              An Epic Journey
            </Animated.Text>
          </Animated.View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => console.log("hi")}
              style={{
                borderRadius: 50,
                zIndex: 100,
                backgroundColor: "blue",
                height: 100,
                width: 100,
                // marginTop: -600,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>My button</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center", paddingTop: windowHeight }}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: fontDimension * 30,
              // marginTop: "100%",
            }}
          >
            TITLE
          </Text>
        </View>
        <View style={styles.pricesContainer}>
          <View style={styles.item2}></View>

          <View style={styles.item}>
            <Image
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50px",
              }}
              source={require("../../assets/img/card_carousel1.JPG")}
            ></Image>
            <Text
              style={{
                position: "absolute",
                textAlign: "center",
                fontSize: 30,
                color: "white",
              }}
            >
              All Access Coaching
            </Text>
            {/* <View>
              <Text style={styles.modalText}>Hello World!</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View> */}
            <Animated.View
              style={{
                alignItems: "center",
                // position: "relative",
                justifyContent: "center",
                // backgroundColor: "red",
                transform: [
                  {
                    translateY: iconSize1.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-30, -50],
                    }),
                  },
                  // {
                  //   scaleY: iconSize.interpolate({
                  //     inputRange: [0, 1],
                  //     outputRange: [1, 12.5],
                  //   }),
                  // },
                ],
              }}
              onMouseEnter={() => {
                // iconSize.setValue(30);
                handleScaleUpIcon1();
                // setModalVisible(!modalVisible);
              }}
              onMouseLeave={() => {
                // iconSize.setValue(30);
                handleScaleDownIcon1();
              }}
            >
              <Entypo
                size={60}
                color="grey"
                name="chevron-up"
                style={{
                  position: "absolute",
                  paddingTop: windowHeight * 1.5,
                  // marginTop: "-250%",
                  // backgroundColor: "blue",
                }}
                onPress={() => {
                  handleIsVisible1();
                }}
              ></Entypo>
            </Animated.View>
            {/* <Animated.View
              style={
                (scrollViewStyle,
                {
                  // bottom: 400,
                  overflow: "hidden",
                  backgroundColor: "blue",
                  width: "100%",
                  height: "10%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50px",
                })
              }
            >
              <Text>Hello</Text>
            </Animated.View> */}
            {/* <Text
              style={{ fontFamily: "Roboto", fontSize: fontDimension * 25 }}
            >
              Let us handle the details of your athletic pursuit by working
              hard, allowing you to work smarter. You’ll shine to your fullest
              potential.
            </Text> */}
          </View>
          <View style={styles.item2}></View>
          <View style={styles.item}>
            <Image
              style={{
                position: "absolute",
                width: "100%",
                height: "130%",
                borderRadius: "50px",
              }}
              source={require("../../assets/img/card_carousel2.JPG")}
            ></Image>
            <Text
              style={{
                position: "absolute",
                textAlign: "center",
                fontSize: 30,
                color: "white",
              }}
            >
              Powerlifting Coaching
            </Text>
            <Animated.View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                transform: [
                  {
                    translateY: iconSize2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-30, -50],
                    }),
                  },
                  // {
                  //   scaleY: iconSize.interpolate({
                  //     inputRange: [0, 1],
                  //     outputRange: [1, 12.5],
                  //   }),
                  // },
                ],
              }}
              onMouseEnter={() => {
                // iconSize.setValue(30);
                handleScaleUpIcon2();
              }}
              onMouseLeave={() => {
                // iconSize.setValue(30);
                handleScaleDownIcon2();
              }}
            >
              <Entypo
                size={60}
                color="grey"
                name="chevron-up"
                style={{
                  position: "absolute",
                  paddingTop: windowHeight * 1.5,
                  // marginTop: "-250%",
                  // backgroundColor: "blue",
                }}
              ></Entypo>
            </Animated.View>
          </View>
          <View style={styles.item2}></View>
          <View style={styles.item}>
            <Image
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50px",
              }}
              source={require("../../assets/img/card_carousel3.JPG")}
            ></Image>
            <Text
              style={{
                position: "absolute",
                textAlign: "center",
                fontSize: 30,
                color: "white",
              }}
            >
              Programming Consultation
            </Text>
            <Animated.View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                transform: [
                  {
                    translateY: iconSize3.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-30, -50],
                    }),
                  },
                  // {
                  //   scaleY: iconSize.interpolate({
                  //     inputRange: [0, 1],
                  //     outputRange: [1, 12.5],
                  //   }),
                  // },
                ],
              }}
              onMouseEnter={() => {
                // iconSize.setValue(30);
                handleScaleUpIcon3();
              }}
              onMouseLeave={() => {
                // iconSize.setValue(30);
                handleScaleDownIcon3();
              }}
              onPress={() => console.log("preszs")}
            >
              <Entypo
                size={60}
                color="grey"
                name="chevron-up"
                style={{
                  position: "absolute",
                  paddingTop: windowHeight * 1.5,
                  // marginTop: "-250%",
                  // backgroundColor: "blue",
                }}
              ></Entypo>
            </Animated.View>
          </View>
          <View style={styles.item2}></View>
        </View>
        <View>{/* <Text>gwreg</Text> */}</View>
        {/* <Text>erfhwe</Text> */}
      </View>
      <View style={styles.pricesContainer2}>
        <View style={styles.item}>
          <Text style={{ fontFamily: "Roboto", fontSize: paragraphFontSize }}>
            Let us handle the details of your athletic pursuit by working hard,
            allowing you to work smarter. You’ll shine to your fullest
            potential.
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={{ fontFamily: "Roboto", fontSize: paragraphFontSize }}>
            We focus on being athlete-centric, responsive to data, and committed
            to relationships and coaching the whole athlete.
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={{ fontFamily: "Roboto", fontSize: paragraphFontSize }}>
            You’re more than a set of numbers. We refine your lifting technique,
            your mind, your nutrition, and habits that will last a lifetime.
          </Text>
        </View>
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
    // marginTop: "100%",
    width: "100%",
    height: "60%",
    flexDirection: "row",
    paddingTop: "10%",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    // marginLeft: 1 / 7,
    // padding: 3,
  },
  pricesContainer2: {
    // flex: 1,
    // backgroundColor: "red",
    marginTop: "100%",
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
    overflow: "hidden",
    flex: 1,
    // width: "33%",
    height: "130%",
    borderRadius: "50px",
    // backgroundColor: "red",
    alignItems: "center",
    // justifyContent: "center",
  },
  hiddenItem: {
    // flex: 1,
    // // width: "33%",
    // height: "100%",
    // borderRadius: "50px",
    // // backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  item2: {
    flex: 0.1,
    // width: "33%",
    height: "100%",
    borderRadius: "50px",
    // backgroundColor: "red",
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
    // marginTop: "120%",
    position: "absolute",

    // backgroundColor: "powderblue",
  },
  fadingContainerBottom: {
    // marginTop: "20%",
    position: "absolute",
    // backgroundColor: "powderblue",
  },
  topFadingText: {
    fontFamily: "Roboto",

    padding: 15,
    color: "white",
    fontSize: 200,
  },
  bottomFadingText: {
    fontFamily: "Roboto",
    padding: 15,
    color: "white",
    fontSize: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
