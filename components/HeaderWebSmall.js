import {
  useWindowDimensions,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import App from "../App";

export default function HeaderWebSmall(props) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const fontDimension = useWindowDimensions().fontScale;
  return (
    <View
      style={[
        styles.container,
        {
          // marginTop: "20%",
          height: fontDimension * 50,
          width: fontDimension * 50,
          justifyContent: "center",
        },
      ]}
    >
      <View style={{ width: fontDimension * 50 }}>
        <TouchableOpacity
          // style={{ flex: 1, justifyContent: "center" }}
          onPress={() => props.navigation.toggleDrawer()}
        >
          <Feather name="menu" size={fontDimension * 50} color="white" />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.rowContainer}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity
            // style={{ flex: 1, justifyContent: "center" }}
            onPress={() => props.navigation.toggleDrawer()}
          >
            <Feather name="menu" size={fontDimension * 50} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 10, justifyContent: "center" }}>
          <Image
            // style={{ flex: 1 }}
            style={styles.tinyLogo}
            source={require("../assets/ody2.png")}
          ></Image>
        </View>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // width: "17.5%",
    // backgroundColor: "red",
    // top: "10%",
    // left: "10%",
    // paddingTop: "20%",
    // paddingLeft: 10,
    // flexDirection: "row",
    // flex: 1,
    // top: 10,
    // width: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    // position: "fixed",
    // width: "100%",
    // flexDirection: "row",
    // marginTop: "-20vh",
    // marginLeft: "7vw",
    // flex: 1,
  },
  tinyLogo: {
    // flex: 1,
    // marginTop: "300vh",
    width: "100%",
    height: "100%",
  },
});
