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

function Navigate(navigation, route) {
  navigation.navigate(route);
}

export default function Header({ navigation }) {
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
          onPress={() => {
            if (navigation.state.routeName != "About")
              Navigate(navigation, "About");
          }}
        >
          <Text style={{ fontSize: fontDimension * 15, color: "white" }}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.link}
          style={{ flex: 1 }}
          title="Go to Pricing"
          onPress={() => {
            if (navigation.state.routeName != "Pricing")
              Navigate(navigation, "Pricing");
          }}
        >
          <Text style={{ fontSize: fontDimension * 15, color: "white" }}>
            Pricing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.link}
          style={{ flex: 1 }}
          title="Go to About"
          onPress={() => {
            if (navigation.state.routeName != "Coaching")
              Navigate(navigation, "Coaching");
          }}
        >
          <Text style={{ fontSize: fontDimension * 15, color: "white" }}>
            Coaching
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.link}
          style={{ flex: 1 }}
          title="Go to About"
          onPress={() => {
            if (navigation.state.routeName != "Homepage")
              Navigate(navigation, "Homepage");
          }}
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
          onPress={() => {
            if (navigation.state.routeName != "Resources")
              Navigate(navigation, "Resources");
          }}
        >
          <Text style={{ fontSize: fontDimension * 15, color: "white" }}>
            Resources
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.link}
          style={{ flex: 1 }}
          title="Go to Pricing"
          onPress={() => {
            if (navigation.state.routeName != "Coaching")
              Navigate(navigation, "Coaching");
          }}
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
            onPress={() => Linking.openURL("mailto:jordan@jordan.voss.online")}
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
    // paddingTop: "3%",
    // flex: 1,
    position: "absolute",
    top: 30,
    // marginTop: "-20%",
    width: "100%",
  },
  rowContainer: {
    // position: "fixed",
    // width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    // marginTop: "5vh",
    marginLeft: "7vw",
  },
  tinyLogo: {
    flex: 1,
    marginTop: "-3vh",
    width: 100,
    height: 100,
  },
});
