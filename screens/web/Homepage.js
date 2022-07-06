import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Platform,
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
    <ScrollView style={{ flex: 1, position: "absolute" }}>
      <View
        style={
          {
            // width: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.9)",
            // height: 200,
            // position: "relative",
            // top: 0,
            // left: 0,
          }
        }
      >
        <Video
          source={require("../../assets/video/odyssey.mp4")}
          style={{
            width: windowWidth,
            // height: windowHeight / 2,
            aspectRatio: 800 / 450,
          }}
          isMuted={true}
          isLooping={true}
          paused={false}
          shouldPlay={true}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        ></Video>
        <View
          style={{
            width: windowWidth,
            aspectRatio: 800 / 450,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            position: "fixed",
          }}
        >
          <Header
            navigation={props.navigation}
            // style={{ marginTop: -windowHeight / 2 }}
          ></Header>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: "15%",
              paddingRight: "15%",
              justifyContent: "space-between",
              marginTop: "10%",
            }}
          >
            <Text
              style={{
                flex: 1,
                color: "white",
                fontFamily: "Roboto",
                fontSize: fontDimension * 40,
              }}
            >
              Odyssey
            </Text>
            <Text
              style={{
                flex: 1,
                color: "white",
                fontFamily: "Roboto",
                fontSize: fontDimension * 35,
              }}
            >
              An Epic Journey
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          {/* <Text>f</Text> */}
          {/* <View style={{ flex: 1, backgroundColor: "red", height: 100 }}>
            <Text>red</Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1, backgroundColor: "darkorange" }}>
            <Text>orange</Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text>green</Text>
          </View>  */}
        </View>
        <View>
          <Text>gwreg</Text>
        </View>
        <Text>erfhwe</Text>
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
  prices: {
    backgroundColor: "red",
    // flex: 1,
    marginTop: "50%",

    // height: 100,
  },
});
