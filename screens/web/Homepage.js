import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
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
      {/* tyle={{ flex: 1, position: "absolute" }}> */}
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
            // alignItems: "center",
            justifyContent: "center",
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
              // paddingLeft: "15%",
              // paddingRight: "15%",
              alignItems: "center",
              justifyContent: "center",
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
            </TouchableOpacity>{" "}
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>TITLE</Text>
        </View>
        <View style={styles.pricesContainer}>
          {/* <Text>f</Text> */}
          <View style={styles.item}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              finibus arcu a risus aliquet, ullamcorper vestibulum justo
              accumsan. Nunc tortor enim, eleifend posuere tempor congue,
              tincidunt quis dolor. Nam tristique eros mi, a sodales elit
              accumsan vitae. In feugiat sodales quam, pharetra suscipit magna
              lobortis sed. Fusce luctus diam purus. Phasellus finibus ut lectus
              id volutpat. Phasellus sodales dolor et lacus tempus venenatis.
              Maecenas sit amet ligula enim. Proin nisi arcu, placerat a neque
              eget, rutrum faucibus felis. Maecenas scelerisque nunc erat,
              lacinia venenatis mi consequat id. Nam dapibus luctus sem, sit
              amet finibus mauris. Integer tellus lacus, vehicula vitae mauris
              non, sollicitudin feugiat dolor. Cras sed aliquet ligula.
              Suspendisse nec magna condimentum, consequat elit sit amet,
              euismod metus.
            </Text>
          </View>
          <View style={styles.item}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              finibus arcu a risus aliquet, ullamcorper vestibulum justo
              accumsan. Nunc tortor enim, eleifend posuere tempor congue,
              tincidunt quis dolor. Nam tristique eros mi, a sodales elit
              accumsan vitae. In feugiat sodales quam, pharetra suscipit magna
              lobortis sed. Fusce luctus diam purus. Phasellus finibus ut lectus
              id volutpat. Phasellus sodales dolor et lacus tempus venenatis.
              Maecenas sit amet ligula enim. Proin nisi arcu, placerat a neque
              eget, rutrum faucibus felis. Maecenas scelerisque nunc erat,
              lacinia venenatis mi consequat id. Nam dapibus luctus sem, sit
              amet finibus mauris. Integer tellus lacus, vehicula vitae mauris
              non, sollicitudin feugiat dolor. Cras sed aliquet ligula.
              Suspendisse nec magna condimentum, consequat elit sit amet,
              euismod metus.
            </Text>
          </View>
          <View style={styles.item}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              finibus arcu a risus aliquet, ullamcorper vestibulum justo
              accumsan. Nunc tortor enim, eleifend posuere tempor congue,
              tincidunt quis dolor. Nam tristique eros mi, a sodales elit
              accumsan vitae. In feugiat sodales quam, pharetra suscipit magna
              lobortis sed. Fusce luctus diam purus. Phasellus finibus ut lectus
              id volutpat. Phasellus sodales dolor et lacus tempus venenatis.
              Maecenas sit amet ligula enim. Proin nisi arcu, placerat a neque
              eget, rutrum faucibus felis. Maecenas scelerisque nunc erat,
              lacinia venenatis mi consequat id. Nam dapibus luctus sem, sit
              amet finibus mauris. Integer tellus lacus, vehicula vitae mauris
              non, sollicitudin feugiat dolor. Cras sed aliquet ligula.
              Suspendisse nec magna condimentum, consequat elit sit amet,
              euismod metus.
            </Text>
          </View>
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
  pricesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    // marginLeft: 1 / 7,
    padding: 3,
  },
  item: {
    width: "30%",
    alignItems: "center",
  },
});
