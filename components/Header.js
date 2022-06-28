import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import HomepageWeb from "../screens/web/Homepage";
import HomepageMobile from "../screens/mobile/Homepage";
import AboutWeb from "../screens/web/About";
import Coaching from "../screens/web/Coaching";

import AboutMobile from "../screens/mobile/About";
import { Link } from "@react-navigation/web";
import { scale } from "../utils/scale";
import { useWindowDimensions } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import * as Linking from "expo-linking";

export default function Header(props) {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const fontDimension = useWindowDimensions().fontScale;

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          // style={styles.link}
          style={{ flex: 1 }}
          title="Go to About"
          onPress={() => props.navigation.navigate("About", props.navigation)}
        >
          <Text style={{ fontSize: fontDimension * 15, color: "white" }}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.link}
          style={{ flex: 1 }}
          title="Go to Pricing"
          onPress={() => props.navigation.navigate("About", props.navigation)}
        >
          <Text style={{ fontSize: fontDimension * 15, color: "white" }}>
            Pricing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.link}
          style={{ flex: 1 }}
          title="Go to About"
          onPress={() =>
            props.navigation.navigate("Coaching", props.navigation)
          }
        >
          <Text style={{ fontSize: fontDimension * 15, color: "white" }}>
            HELLO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.link}
          style={{ flex: 1 }}
          title="Go to About"
          onPress={() =>
            props.navigation.navigate("Homepage", props.navigation)
          }
        >
          <Image
            //   style={{ flex: 1, backgroundColor: "red" }}
            style={styles.tinyLogo}
            source={require("../assets/ody2.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          title="Go to Homepage"
          onPress={() =>
            props.navigation.navigate("Resources", props.navigation)
          }
        >
          <Text style={{ fontSize: fontDimension * 15, color: "white" }}>
            Resources
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.link}
          style={{ flex: 1 }}
          title="Go to Pricing"
          onPress={() => props.navigation.navigate("About", props.navigation)}
        >
          <Text style={{ fontSize: fontDimension * 15, color: "white" }}>
            Pricing
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://instagram.com/odysseystrength")
            }
          >
            <AntDesign
              name="instagram"
              size={fontDimension * 20}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://instagram.com/odysseystrength")
            }
          >
            <AntDesign name="mail" size={fontDimension * 20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://instagram.com/odysseystrength")
            }
          >
            <Entypo name="spotify" size={fontDimension * 20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    width: "100%",
  },
  rowContainer: {
    position: "fixed",
    width: "100%",
    flexDirection: "row",
    marginTop: "-20vh",
    marginLeft: "7vw",
  },
  tinyLogo: {
    flex: 1,
    marginTop: "-3vh",
    width: 100,
    height: 100,
  },
});
