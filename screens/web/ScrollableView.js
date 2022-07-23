import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from "react-native";

export default function ScrollableView(props) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
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
  //     transform: [
  //       {
  //         translateY: scrollViewInterpolate,
  //       },
  //     ],
  //   };
  return (
    <Animated.View
      style={
        (scrollViewStyle,
        {
          bottom: 450,
          overFlow: "hidden",
          backgroundColor: "blue",
          width: "100%",
          height: windowHeight / 2,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
        })
      }
    >
      <Text>Hello</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "blue",

    // position: "absolute",
    // left: 0,
    // right: 0,
  },
});
