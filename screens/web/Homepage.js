import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Platform,
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

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const fontDimension = useWindowDimensions().fontScale;

  return (
    <ScrollView>
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
            // style={{ top: "1000" }}
            navigation={props.navigation}
          ></Header>
          <View
            style={{
              backgroundColor: "blue",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              top: 0,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  paddingLeft: "2%",
                  flex: 2,
                  color: "white",
                  fontFamily: "Roboto",
                  fontSize: fontDimension * 40,
                }}
              >
                <Image
                  //   style={{ flex: 1, backgroundColor: "red" }}
                  style={styles.tinyLogo}
                  source={require("../../assets/ody2.png")}
                ></Image>
                dyssey
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  flex: 2,
                  color: "white",
                  fontFamily: "Roboto",
                  fontSize: fontDimension * 35,
                }}
              >
                An Epic Journey
              </Text>
            </View>
          </View>
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
});
