import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
  Easing,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function BottomSheet(props) {
  const [isVisible1, setIsVisible1] = useState(false);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const iconSize1 = useRef(new Animated.Value(0)).current;
  const handleIsVisible1 = () => {
    console.log("b");
    setIsVisible1(!isVisible1);
  };
  const gesture = Gesture.Pan().onUpdate((event) => {
    console.log(event);
  });
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
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={styles.bottomContainer}>
        <Animated.View
          style={{
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
            width: "12%",
            justifyContent: "center",
            backgroundColor: "blue",
            transform: [
              {
                translateY: iconSize1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-30, -20],
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
            handleScaleUpIcon1();
          }}
          onMouseLeave={() => {
            handleScaleDownIcon1();
          }}
        >
          <Entypo
            size={60}
            color="grey"
            name="chevron-down"
            onPress={() => {
              handleIsVisible1();
            }}
          ></Entypo>
        </Animated.View>
        <Text>Bottom Sheet</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: -500,
    top: "50%",
    height: "50%",
    width: "100%",
    opacity: "70%",
    backgroundColor: "red",
    position: "absolute",
    borderRadius: 25,
    // backgroundColor: "blue",

    // position: "absolute",
    // left: 0,
    // right: 0,
  },
});
