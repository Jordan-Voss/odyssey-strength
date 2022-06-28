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
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={{ marginTop: "-200%", marginLeft: "190%" }}
          onPress={() => props.navigation.toggleDrawer()}
        >
          <Feather name="menu" size={fontDimension * 50} color="white" />
        </TouchableOpacity>
        <Image
          //   style={{ flex: 1, backgroundColor: "red" }}
          style={styles.tinyLogo}
          source={require("../assets/ody2.png")}
        ></Image>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flex: 1,
    // top: 10,
    // width: "100%",
  },
  rowContainer: {
    // position: "fixed",
    // width: "100%",
    // flexDirection: "row",
    // marginTop: "-20vh",
    // marginLeft: "7vw",
    flex: 1,
  },
  tinyLogo: {
    flex: 1,
    // marginTop: "300vh",
    width: "100%",
    height: "100%"    "homepage": "http://jordan-voss.github.io/ody",
    "scripts": {
        "deploy": "gh-pages -d web-build",
        "predeploy": "expo build:web"
    },,
  },
});
