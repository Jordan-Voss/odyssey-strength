import { createDrawerNavigator } from "@react-navigation/drawer";
import HomepageWeb from "../screens/web/Homepage";
import Coaching from "../screens/web/Coaching";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={HomepageWeb} />
      <Drawer.Screen name="Article" component={Coaching} />
    </Drawer.Navigator>
  );
}
