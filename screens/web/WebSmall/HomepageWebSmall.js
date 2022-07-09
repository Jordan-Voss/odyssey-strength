import React, { useRef } from "react";
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
  const fadeAnim = useRef(new Animated.Value(0)).current;
  var currentOffset2 = 0;

  const fadeIn = (y) => {
    console.log(y + "Y");
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: y / 2,
      // duration: 5000,
      useNativeDriver: false, // Add This line
    }).start();
  };

  const fadeOut = (y) => {
    if (y != 0) {
      y / 2;
    }
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: y,
      // duration: 3000,
      useNativeDriver: false, // Add This line
    }).start();
  };

  // function direction(event) {
  //   const currentOffset = event.nativeEvent.contentOffset.y;
  //   const direction = currentOffset > currentOffset2 ? "down" : "up";
  //   currentOffset2 = currentOffset;
  //   if (direction == "down") {
  //     fadeIn(currentOffset);
  //   } else {
  //     fadeOut(currentOffset);
  //   }
  // }

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
    <ScrollView
      // var currentOffset = event.nativeEvent.contentOffset.y;
      //     var direction = currentOffset > this.offset ? 'down' : 'up';
      // this.offset = currentOffset;
      // console.log(direction);
      onScroll={(event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const direction = currentOffset > currentOffset2 ? "down" : "up";
        currentOffset2 = currentOffset;
        console.log(direction);
        if (direction == "down") {
          fadeIn(currentOffset);
        } else {
          fadeOut(currentOffset);
        }
      }}
      // function (event) {
      // const currentOffset = event.nativeEvent.contentOffset.y;
      // const direction = currentOffset > offset ? "down" : "up";
      // offset = currentOffset;
      // console.log(direction);

      // if (scrolling > 50) {
      //   fadeIn(scrolling);
      //   console.log(scrolling);
      // } else {
      //   console.log(scrolling);
      // }
      // }}
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
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                // Bind opacity to animated value
                opacity: fadeAnim,
              },
            ]}
          >
            <Text style={styles.fadingText}>Fading View!</Text>
          </Animated.View>
        </View>

        <Text
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {windowWidth}
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
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});
