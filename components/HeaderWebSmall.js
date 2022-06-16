import { useWindowDimensions, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function HeaderWebSmall(props) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const fontDimension = useWindowDimensions().fontScale;
  return (
    <TouchableOpacity
      style={{ marginTop: "-40%", marginLeft: "85%" }}
      onPress={() => props.navigation.toggleDrawer()}
    >
      <Feather name="menu" size={fontDimension * 50} color="white" />
    </TouchableOpacity>
  );
}
