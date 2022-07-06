import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBrowserApp } from "@react-navigation/web";

import HomepageWeb from "../screens/web/Homepage";
import HomepageMobile from "../screens/mobile/Homepage";
import AboutWeb from "../screens/web/About";
import Resources from "../screens/web/Resources";
import Pricing from "../screens/web/Pricing";

import Coaching from "../screens/web/Coaching";

import AboutMobile from "../screens/mobile/About";
import { Platform } from "react-native";
import Header from "../components/Header";

const isWeb = Platform.OS === "web";

const HomeWeb = createStackNavigator(
  {
    About: {
      screen: AboutWeb,
      path: "About",
    },
    Coaching: {
      screen: Coaching,
    },
    Pricing: {
      screen: Pricing,
    },
    Resources: {
      screen: Resources,
    },
    Homepage: HomepageWeb,
    Header: Header,
  },
  {
    initialRouteName: "Homepage",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const HomeMobile = createStackNavigator(
  {
    About: {
      screen: AboutMobile,
      path: "/About",
    },
    Homepage: HomepageMobile,
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const Home = isWeb ? HomeWeb : HomeMobile;

const container = isWeb ? createBrowserApp(Home) : createAppContainer(Home);

export default container;
